let chart_top_controls_container_div = null;
let graphs_wrapper_div = null;

function DecrementResolution() {
    const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
    if (chart_resolution_control_textbox) {
        if (chart_resolution_control_textbox.value.includes('minutes')) {
            const current_value = chart_resolution_control_textbox.value.replace('minutes', '');
            const current_number = parseInt(current_value);
            if (Number.isInteger(current_number)) {
                if (current_number > 1) {
                    switch (current_number) {
                        case 5:
                            chart_resolution_control_textbox.value = "1 minute";
                            break;
                        /* case 15:
                            chart_resolution_control_textbox.value = "5 minutes";
                            break; */
                        /* case 30:
                            chart_resolution_control_textbox.value = "15 minutes";
                            break;*/
                        case 60:
                            chart_resolution_control_textbox.value = "5 minutes";
                            break; 
                        default:
                            chart_resolution_control_textbox.value = "error";
                    }
                }
            }
        }
        else if (chart_resolution_control_textbox.value.includes('day')) {
            chart_resolution_control_textbox.value = "60 minutes";
        }
        /* else if (chart_resolution_control_textbox.value.includes('week')) {
            chart_resolution_control_textbox.value = "1 day";
        }
        else if (chart_resolution_control_textbox.value.includes('month')) {
            chart_resolution_control_textbox.value = "1 week";
        } */
    } 
}

function IncrementResolution() {
    const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
    if (chart_resolution_control_textbox) {
        if (chart_resolution_control_textbox.value.includes('minute')) {
            const index_of_trim_str = chart_resolution_control_textbox.value.indexOf('minute');
            if (index_of_trim_str && index_of_trim_str > 1) {
                const current_value = chart_resolution_control_textbox.value.substr(0, index_of_trim_str);
                const current_number = parseInt(current_value);
                if (Number.isInteger(current_number)) {
                    if (current_number <= 60) {
                        switch (current_number) {
                            case 1:
                                chart_resolution_control_textbox.value = "5 minutes";
                                break;
                            case 5:
                                chart_resolution_control_textbox.value = "60 minutes";
                                break;
                            /* case 15:
                                chart_resolution_control_textbox.value = "30 minutes";
                                break; */
                            /* case 30:
                                chart_resolution_control_textbox.value = "60 minutes";
                                break; */
                            case 60:
                                chart_resolution_control_textbox.value = "1 day";
                                break;
                            default:
                                chart_resolution_control_textbox.value = "error";
                        }
                    }
                }
            }
        }
        /* else if (chart_resolution_control_textbox.value.includes('day')) {
            chart_resolution_control_textbox.value = "1 week";
        }
        else if (chart_resolution_control_textbox.value.includes('week')) {
            chart_resolution_control_textbox.value = "1 month";
        } */
    } 
}

async function LoadChartImages() {
    const domain = 'http://127.0.0.1:5000';
    const cache_no_store = ', { cache: "no-store" }';
    const historical_datetime_value = document.querySelector("input[id='begin_datetime_textbox']").value;
    const resolution_value = document.querySelector("input[id='chart_resolution_control_textbox']").value;
    const ticker_value = document.querySelector("input[id='stock_symbol_textbox']").value;
    const stock_message_div = document.querySelector("div[id='stock_msg']");
    const sentiment_message_div = document.querySelector("div[id='sentiment_msg']");
    try {
        let fetch_stock_graphs_response = null;
        const price_label = graphs_wrapper_div.querySelector("div[id='price_label']");
        const volume_label = graphs_wrapper_div.querySelector("div[id='volume_label']");
        const price_yaxis_label_div = graphs_wrapper_div.querySelector("div[class='price_yaxis_label']");
        const price_graph_div = graphs_wrapper_div.querySelector("div[class='price_graph_div']");
        const volume_yaxis_label_div = graphs_wrapper_div.querySelector("div[class='volume_yaxis_label']");
        const volume_graph_div = graphs_wrapper_div.querySelector("div[class='volume_graph_div']");
        const xaxis_graph_div = graphs_wrapper_div.querySelector("div[class='xaxis_graph_div']");
        if (historical_datetime_value.length === 19 && resolution_value.length > 4 && ticker_value.length > 0) {
            fetch_stock_graphs_response = await fetch(domain + '/draw_stock_graphs_historical/'+ ticker_value + '|' + historical_datetime_value + '|' + resolution_value, { cache: "no-store" });
        }
        else {
            fetch_stock_graphs_response = await fetch(domain + '/draw_stock_graphs_now', { cache: "no-store" });
        }
        if (!fetch_stock_graphs_response.ok) {
            throw new Error('Stock data is unavailable.');
        }
        const svg_stock_graphs_images = await fetch_stock_graphs_response.json();
        if (Object.keys(svg_stock_graphs_images).length === 5) {
            stock_message_div.innerHTML = 'Connected: Stock data is available';
        }
        if (price_label) {
            price_label.innerHTML = 'Stock<br />Trading<br />Price';
            price_label.style.cssText = 'background-color: #494949; color:#f4f4f4;';
        }
        if (price_yaxis_label_div) {
            price_yaxis_label_div.innerHTML = svg_stock_graphs_images.price_yaxis;
        }
        if (price_graph_div) {
            price_graph_div.innerHTML = svg_stock_graphs_images.price;
        }
        if (volume_label) {
            volume_label.innerHTML = 'Stock<br />Trading<br />Volume';
            volume_label.style.cssText = 'background-color: #494949; color:#f4f4f4;';
        }
        if (volume_yaxis_label_div) {
            volume_yaxis_label_div.innerHTML = svg_stock_graphs_images.volume_yaxis;
        }
        if (volume_graph_div) {
            volume_graph_div.innerHTML = svg_stock_graphs_images.volume;
        }
        if (xaxis_graph_div) {
            const volume_graph_container_clientRect = graphs_wrapper_div.querySelector("div[class='volume_graph_container']").getBoundingClientRect();
            const xaxis_outer_div_container = graphs_wrapper_div.querySelector("div[class='xaxis_outer_div_container']");
            if (xaxis_outer_div_container) {
                if (volume_graph_container_clientRect) {
                    const xaxis_outer_div_container_width = "width:" + volume_graph_container_clientRect.width + "px;";
                    xaxis_outer_div_container.style.cssText = xaxis_outer_div_container_width + 'background-color: #f4f4f4;';
                    xaxis_graph_div.innerHTML = svg_stock_graphs_images.xaxis;
                }
            }
        }
    } catch (error) {
        stock_message_div.innerHTML = error;
    }
    try {
        let fetch_sentiment_graphs_response = null;
        const sentiment_label = graphs_wrapper_div.querySelector("div[id='sentiment_label']");
        const sentiment_yaxis_label_div = graphs_wrapper_div.querySelector("div[class='sentiment_yaxis_label']");
        const sentiment_graph_div = graphs_wrapper_div.querySelector("div[class='sentiment_graph_div']");
        if (historical_datetime_value.length === 19 && resolution_value.length > 4 && ticker_value.length > 0) {
            fetch_sentiment_graphs_response = await fetch(domain + '/draw_sentiment_graphs_historical/'+ ticker_value + '|' + historical_datetime_value + '|' + resolution_value, { cache: "no-store" });
        }
        else {
            fetch_sentiment_graphs_response = await fetch(domain + '/draw_sentiment_graphs_now', { cache: "no-store" });
        }
        if (!fetch_sentiment_graphs_response.ok) {
            throw new Error('AI ML Sentiment data is unavailable.');
        }
        const svg_sentiment_graphs_images = await fetch_sentiment_graphs_response.json();
        if (Object.keys(svg_sentiment_graphs_images).length === 2) {
            sentiment_message_div.innerHTML = 'Connected: AI ML Sentiment data is available';
        }
        if (sentiment_label) {
            sentiment_label.innerHTML = 'AI ML<br />Stock<br />Sentiment';
            sentiment_label.style.cssText = 'background-color: #494949; color:#f4f4f4;';
        }
        if (sentiment_yaxis_label_div) {
            sentiment_yaxis_label_div.innerHTML = svg_sentiment_graphs_images.sentiment_yaxis;
        }
        if (sentiment_graph_div) {
            sentiment_graph_div.innerHTML = svg_sentiment_graphs_images.sentiment;
        }
    } catch (error) {
        sentiment_message_div.innerHTML = error;
    }
}

function InitChartTopControls() {
    if (chart_top_controls_container_div) {
        const chart_top_controls_load_button = chart_top_controls_container_div.querySelector("input[id='load_button']");
        if (chart_top_controls_load_button) {
            const load_button = new Promise((resolve) => {
                chart_top_controls_load_button.removeEventListener("click", LoadChartImages, false);
                resolve();
            });
            load_button.then(() => {
                chart_top_controls_load_button.addEventListener("click", LoadChartImages, false);
            });
        }
        const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
        if (chart_resolution_control_textbox) {
            chart_resolution_control_textbox.value = "5 minutes";
        }
        const chart_resolution_control_left_arrow_button = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_left_arrow']");
        if (chart_resolution_control_left_arrow_button) {
            const left_arrow_button = new Promise((resolve) => {
                chart_resolution_control_left_arrow_button.removeEventListener("click", DecrementResolution, false);
                resolve();
            });
            left_arrow_button.then(() => {
                chart_resolution_control_left_arrow_button.addEventListener("click", DecrementResolution, false);
            });
        }
        const chart_resolution_control_right_arrow_button = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_right_arrow']");
        if (chart_resolution_control_right_arrow_button) {
            const right_arrow_button = new Promise((resolve) => {
                chart_resolution_control_right_arrow_button.removeEventListener("click", IncrementResolution, false);
                resolve();
            });
            right_arrow_button.then(() => {
                chart_resolution_control_right_arrow_button.addEventListener("click", IncrementResolution, false);
            });
        }
    }
}
function InitControls() {
    chart_top_controls_container_div = document.querySelector("div[class='chart_top_controls_container']");
    graphs_wrapper_div = document.querySelector("div[class='graphs_wrapper']");

    InitChartTopControls(); 
}


















document.addEventListener("DOMContentLoaded", InitControls, false);