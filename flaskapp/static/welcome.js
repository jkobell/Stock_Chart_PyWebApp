
let chart_top_controls_container_div = null;

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

function InitChartTopControls() {
    if (chart_top_controls_container_div) {
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

    InitChartTopControls(); 
}


















document.addEventListener("DOMContentLoaded", InitControls, false);