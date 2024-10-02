
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
                        case 15:
                            chart_resolution_control_textbox.value = "5 minutes";
                            break;
                        case 30:
                            chart_resolution_control_textbox.value = "15 minutes";
                            break;
                        case 60:
                            chart_resolution_control_textbox.value = "30 minutes";
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
        else if (chart_resolution_control_textbox.value.includes('week')) {
            chart_resolution_control_textbox.value = "1 day";
        }
        else if (chart_resolution_control_textbox.value.includes('month')) {
            chart_resolution_control_textbox.value = "1 week";
        }
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
                                chart_resolution_control_textbox.value = "15 minutes";
                                break;
                            case 15:
                                chart_resolution_control_textbox.value = "30 minutes";
                                break;
                            case 30:
                                chart_resolution_control_textbox.value = "60 minutes";
                                break;
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
        else if (chart_resolution_control_textbox.value.includes('day')) {
            chart_resolution_control_textbox.value = "1 week";
        }
        else if (chart_resolution_control_textbox.value.includes('week')) {
            chart_resolution_control_textbox.value = "1 month";
        }
    } 
}

async function LoadChartImages() {
    const domain = 'http://127.0.0.1:5000';
    try {
        const fetch_price_response = await fetch(domain + '/draw_price');
        if (!fetch_price_response.ok) {
            throw new Error('Stock price API is unavailable.');
        }
        const svg_price_image = await fetch_price_response.text();
        const price_graph_div = graphs_wrapper_div.querySelector("div[class='price_graph_div']");
        if (price_graph_div) {
            price_graph_div.innerHTML = svg_price_image;
        }
    } catch (error) {
        price_graph_div.innerHTML = error;
    }
    try {
        const fetch_volume_yaxis_response = await fetch(domain + '/draw_volume_yaxis');
        if (!fetch_volume_yaxis_response.ok) {
            throw new Error('Volume yaxis is unavailable.');
        }
        const svg_volume_yaxis_image = await fetch_volume_yaxis_response.text();
        const volume_yaxis_label_div = graphs_wrapper_div.querySelector("div[class='volume_yaxis_label']");
        if (volume_yaxis_label_div) {
            volume_yaxis_label_div.innerHTML = svg_volume_yaxis_image;
        }
    } catch (error) {
        volume_yaxis_label_div.innerHTML = error;
    }
    try {
        const fetch_volume_response = await fetch(domain + '/draw_volume');
        if (!fetch_volume_response.ok) {
            throw new Error('Volume API is unavailable.');
        }
        const svg_volume_image = await fetch_volume_response.text();
        const volume_graph_div = graphs_wrapper_div.querySelector("div[class='volume_graph_div']");
        if (volume_graph_div) {
            volume_graph_div.innerHTML = svg_volume_image;
        }
    } catch (error) {
        volume_graph_div.innerHTML = error;
    }
    try {
        const ticker = 'NVDA';
        const fetch_sentiment_response = await fetch(domain + `/draw_sentiment/${ticker}`);
        if (!fetch_sentiment_response.ok) {
            throw new Error('AI ML stock sentiment API is unavailable.');
        }
        const svg_sentiment_image = await fetch_sentiment_response.text();
        const sentiment_graph_div = graphs_wrapper_div.querySelector("div[class='sentiment_graph_div']");
        if (sentiment_graph_div) {
            sentiment_graph_div.innerHTML = svg_sentiment_image;
        }
    } catch (error) {
        sentiment_graph_div.innerHTML = error;
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