let chart_top_controls_container_div = null;
let chart_bottom_controls_container_div = null;
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
    }
    InitChartBottomControls(); 
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
    }
    InitChartBottomControls(); 
}

function DecrementSentimentTime() {
    const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
    const sentiment_time_adjust_control_textbox = chart_bottom_controls_container_div.querySelector("input[id='sentiment_time_adjust_control_textbox']");
    if (sentiment_time_adjust_control_textbox) {
        if (chart_resolution_control_textbox && chart_resolution_control_textbox.value.length > 4) {
            switch (chart_resolution_control_textbox.value) {
                case '1 minute':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+4 minutes':
                                sentiment_time_adjust_control_textbox.value = '+3 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:3';
                                break;
                            case '+3 minutes':
                                sentiment_time_adjust_control_textbox.value = '+2 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:2';
                                break;
                            case '+2 minutes':
                                sentiment_time_adjust_control_textbox.value = '+1 minute';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:1';
                                break;
                            case '+1 minute':
                                sentiment_time_adjust_control_textbox.value = '0 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:min:00';
                                break;
                            case '0 minutes':
                                sentiment_time_adjust_control_textbox.value = '-1 minute';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:1';
                                break;
                            case '-1 minute':
                                sentiment_time_adjust_control_textbox.value = '-2 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:2';
                                break;
                            case '-2 minutes':
                                sentiment_time_adjust_control_textbox.value = '-3 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:3';
                                break;
                            case '-3 minutes':
                                sentiment_time_adjust_control_textbox.value = '-4 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:4';
                                break;
                        }
                    } 
                    break;
                case '5 minutes':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+55 minutes':
                                sentiment_time_adjust_control_textbox.value = '+50 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:50';
                                break;
                            case '+50 minutes':
                                sentiment_time_adjust_control_textbox.value = '+45 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:45';
                                break;
                            case '+45 minutes':
                                sentiment_time_adjust_control_textbox.value = '+40 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:40';
                                break;
                            case '+40 minutes':
                                sentiment_time_adjust_control_textbox.value = '+35 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:35';
                                break;
                            case '+35 minutes':
                                sentiment_time_adjust_control_textbox.value = '+30 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:30';
                                break;
                            case '+30 minutes':
                                sentiment_time_adjust_control_textbox.value = '+25 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:25';
                                break;
                            case '+25 minutes':
                                sentiment_time_adjust_control_textbox.value = '+20 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:20';
                                break;
                            case '+20 minutes':
                                sentiment_time_adjust_control_textbox.value = '+15 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:15';
                                break;
                            case '+15 minutes':
                                sentiment_time_adjust_control_textbox.value = '+10 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:10';
                                break;
                            case '+10 minutes':
                                sentiment_time_adjust_control_textbox.value = '+5 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:5';
                                break;
                            case '+5 minutes':
                                sentiment_time_adjust_control_textbox.value = '0 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:min:00';
                                break;
                            case '0 minutes':
                                sentiment_time_adjust_control_textbox.value = '-5 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:5';
                                break;
                            case '-5 minutes':
                                sentiment_time_adjust_control_textbox.value = '-10 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:10';
                                break;
                            case '-10 minutes':
                                sentiment_time_adjust_control_textbox.value = '-15 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:15';
                                break;
                            case '-15 minutes':
                                sentiment_time_adjust_control_textbox.value = '-20 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:20';
                                break;
                            case '-20 minutes':
                                sentiment_time_adjust_control_textbox.value = '-25 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:25';
                                break;
                            case '-25 minutes':
                                sentiment_time_adjust_control_textbox.value = '-30 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:30';
                                break;
                            case '-30 minutes':
                                sentiment_time_adjust_control_textbox.value = '-35 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:35';
                                break;
                            case '-35 minutes':
                                sentiment_time_adjust_control_textbox.value = '-40 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:40';
                                break;
                            case '-40 minutes':
                                sentiment_time_adjust_control_textbox.value = '-45 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:45';
                                break;
                            case '-45 minutes':
                                sentiment_time_adjust_control_textbox.value = '-50 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:50';
                                break;
                            case '-50 minutes':
                                sentiment_time_adjust_control_textbox.value = '-55 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:55';
                                break;
                        }
                    }
                    break;
                case '60 minutes':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+12 hours':
                                sentiment_time_adjust_control_textbox.value = '+11 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:11';
                                break;
                            case '+11 hours':
                                sentiment_time_adjust_control_textbox.value = '+10 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:10';
                                break;
                            case '+10 hours':
                                sentiment_time_adjust_control_textbox.value = '+9 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:9';
                                break;
                            case '+9 hours':
                                sentiment_time_adjust_control_textbox.value = '+8 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:8';
                                break;
                            case '+8 hours':
                                sentiment_time_adjust_control_textbox.value = '+7 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:7';
                                break;
                            case '+7 hours':
                                sentiment_time_adjust_control_textbox.value = '+6 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:6';
                                break;
                            case '+6 hours':
                                sentiment_time_adjust_control_textbox.value = '+5 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:5';
                                break;
                            case '+5 hours':
                                sentiment_time_adjust_control_textbox.value = '+4 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:4';
                                break;
                            case '+4 hours':
                                sentiment_time_adjust_control_textbox.value = '+3 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:3';
                                break;
                            case '+3 hours':
                                sentiment_time_adjust_control_textbox.value = '+2 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:2';
                                break;
                            case '+2 hours':
                                sentiment_time_adjust_control_textbox.value = '+1 hour';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:1';
                                break;
                            case '+1 hour':
                                sentiment_time_adjust_control_textbox.value = '0 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:hour:00';
                                break;
                            case '0 hours':
                                sentiment_time_adjust_control_textbox.value = '-1 hour';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:1';
                                break;
                            case '-1 hour':
                                sentiment_time_adjust_control_textbox.value = '-2 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:2';
                                break;
                            case '-2 hours':
                                sentiment_time_adjust_control_textbox.value = '-3 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:3';
                                break;
                            case '-3 hours':
                                sentiment_time_adjust_control_textbox.value = '-4 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:4';
                                break;
                            case '-4 hours':
                                sentiment_time_adjust_control_textbox.value = '-5 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:5';
                                break;
                            case '-5 hours':
                                sentiment_time_adjust_control_textbox.value = '-6 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:6';
                                break;
                            case '-6 hours':
                                sentiment_time_adjust_control_textbox.value = '-7 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:7';
                                break;
                            case '-7 hours':
                                sentiment_time_adjust_control_textbox.value = '-8 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:8';
                                break;
                            case '-8 hours':
                                sentiment_time_adjust_control_textbox.value = '-9 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:9';
                                break;
                            case '-9 hours':
                                sentiment_time_adjust_control_textbox.value = '-10 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:10';
                                break;
                            case '-10 hours':
                                sentiment_time_adjust_control_textbox.value = '-11 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:11';
                                break;
                            case '-11 hours':
                                sentiment_time_adjust_control_textbox.value = '-12 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:12';
                                break;
                        }
                    }
                    break;
                case '1 day':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+7 days':
                                sentiment_time_adjust_control_textbox.value = '+6 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:6';
                                break;
                            case '+6 days':
                                sentiment_time_adjust_control_textbox.value = '+5 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:5';
                                break;
                            case '+5 days':
                                sentiment_time_adjust_control_textbox.value = '+4 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:4';
                                break;
                            case '+4 days':
                                sentiment_time_adjust_control_textbox.value = '+3 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:3';
                                break;
                            case '+3 days':
                                sentiment_time_adjust_control_textbox.value = '+2 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:2';
                                break;
                            case '+2 days':
                                sentiment_time_adjust_control_textbox.value = '+1 day';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:1';
                                break;
                            case '+1 day':
                                sentiment_time_adjust_control_textbox.value = '0 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:day:00';
                                break;
                            case '0 days':
                                sentiment_time_adjust_control_textbox.value = '-1 day';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:1';
                                break;
                            case '-1 day':
                                sentiment_time_adjust_control_textbox.value = '-2 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:2';
                                break;
                            case '-2 days':
                                sentiment_time_adjust_control_textbox.value = '-3 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:3';
                                break;
                            case '-3 days':
                                sentiment_time_adjust_control_textbox.value = '-4 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:4';
                                break;
                            case '-4 days':
                                sentiment_time_adjust_control_textbox.value = '-5 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:5';
                                break;
                            case '-5 days':
                                sentiment_time_adjust_control_textbox.value = '-6 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:6';
                                break;
                            case '-6 days':
                                sentiment_time_adjust_control_textbox.value = '-7 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:7';
                                break;
                        }
                    }
                    break;
                default:
                    sentiment_time_adjust_control_textbox.value = 'value error';
            }
        }
    }
}

function IncrementSentimentTime() {
    const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
    const sentiment_time_adjust_control_textbox = chart_bottom_controls_container_div.querySelector("input[id='sentiment_time_adjust_control_textbox']");
    if (sentiment_time_adjust_control_textbox) {
        if (chart_resolution_control_textbox && chart_resolution_control_textbox.value.length > 4) {
            switch (chart_resolution_control_textbox.value) {
                case '1 minute':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+3 minutes':
                                sentiment_time_adjust_control_textbox.value = '+4 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:4';
                                break;
                            case '+2 minutes':
                                sentiment_time_adjust_control_textbox.value = '+3 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:3';
                                break;
                            case '+1 minute':
                                sentiment_time_adjust_control_textbox.value = '+2 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:2';
                                break;
                            case '0 minutes':
                                sentiment_time_adjust_control_textbox.value = '+1 minute';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:1';
                                break;
                            case '-1 minute':
                                sentiment_time_adjust_control_textbox.value = '0 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:min:00';
                                break;
                            case '-2 minutes':
                                sentiment_time_adjust_control_textbox.value = '-1 minute';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:1';
                                break;
                            case '-3 minutes':
                                sentiment_time_adjust_control_textbox.value = '-2 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:2';
                                break;
                            case '-4 minutes':
                                sentiment_time_adjust_control_textbox.value = '-3 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:3';
                            break;
                        }
                    } 
                    break;
                case '5 minutes':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+50 minutes':
                                sentiment_time_adjust_control_textbox.value = '+55 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:55';
                                break;
                            case '+45 minutes':
                                sentiment_time_adjust_control_textbox.value = '+50 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:50';
                                break;
                            case '+40 minutes':
                                sentiment_time_adjust_control_textbox.value = '+45 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:45';
                                break;
                            case '+35 minutes':
                                sentiment_time_adjust_control_textbox.value = '+40 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:40';
                                break;
                            case '+30 minutes':
                                sentiment_time_adjust_control_textbox.value = '+35 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:35';
                                break;
                            case '+25 minutes':
                                sentiment_time_adjust_control_textbox.value = '+30 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:30';
                                break;
                            case '+20 minutes':
                                sentiment_time_adjust_control_textbox.value = '+25 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:25';
                                break;
                            case '+15 minutes':
                                sentiment_time_adjust_control_textbox.value = '+20 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:20';
                                break;
                            case '+10 minutes':
                                sentiment_time_adjust_control_textbox.value = '+15 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:15';
                                break;
                            case '+5 minutes':
                                sentiment_time_adjust_control_textbox.value = '+10 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:10';
                                break;
                            case '0 minutes':
                                sentiment_time_adjust_control_textbox.value = '+5 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:min:5';
                                break;
                            case '-5 minutes':
                                sentiment_time_adjust_control_textbox.value = '0 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:min:00';
                                break;
                            case '-10 minutes':
                                sentiment_time_adjust_control_textbox.value = '-5 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:5';
                                break;
                            case '-15 minutes':
                                sentiment_time_adjust_control_textbox.value = '-10 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:10';
                                break;
                            case '-20 minutes':
                                sentiment_time_adjust_control_textbox.value = '-15 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:15';
                                break;
                            case '-25 minutes':
                                sentiment_time_adjust_control_textbox.value = '-20 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:20';
                                break;
                            case '-30 minutes':
                                sentiment_time_adjust_control_textbox.value = '-25 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:25';
                                break;
                            case '-35 minutes':
                                sentiment_time_adjust_control_textbox.value = '-30 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:30';
                                break;
                            case '-40 minutes':
                                sentiment_time_adjust_control_textbox.value = '-35 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:35';
                                break;
                            case '-45 minutes':
                                sentiment_time_adjust_control_textbox.value = '-40 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:40';
                                break;
                            case '-50 minutes':
                                sentiment_time_adjust_control_textbox.value = '-45 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:45';
                                break;
                            case '-55 minutes':
                                sentiment_time_adjust_control_textbox.value = '-50 minutes';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:min:50';
                                break;
                        }
                    }
                    break;
                case '60 minutes':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+11 hours':
                                sentiment_time_adjust_control_textbox.value = '+12 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:12';
                                break;
                            case '+10 hours':
                                sentiment_time_adjust_control_textbox.value = '+11 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:11';
                                break;
                            case '+9 hours':
                                sentiment_time_adjust_control_textbox.value = '+10 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:10';
                                break;
                            case '+8 hours':
                                sentiment_time_adjust_control_textbox.value = '+9 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:9';
                                break;
                            case '+7 hours':
                                sentiment_time_adjust_control_textbox.value = '+8 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:8';
                                break;
                            case '+6 hours':
                                sentiment_time_adjust_control_textbox.value = '+7 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:7';
                                break;
                            case '+5 hours':
                                sentiment_time_adjust_control_textbox.value = '+6 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:6';
                                break;
                            case '+4 hours':
                                sentiment_time_adjust_control_textbox.value = '+5 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:5';
                                break;
                            case '+3 hours':
                                sentiment_time_adjust_control_textbox.value = '+4 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:4';
                                break;
                            case '+2 hours':
                                sentiment_time_adjust_control_textbox.value = '+3 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:3';
                                break;
                            case '+1 hour':
                                sentiment_time_adjust_control_textbox.value = '+2 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:2';
                                break;
                            case '0 hours':
                                sentiment_time_adjust_control_textbox.value = '+1 hour';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:hour:1';
                                break;
                            case '-1 hour':
                                sentiment_time_adjust_control_textbox.value = '0 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:hour:00';
                                break;
                            case '-2 hours':
                                sentiment_time_adjust_control_textbox.value = '-1 hour';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:1';
                                break;
                            case '-3 hours':
                                sentiment_time_adjust_control_textbox.value = '-2 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:2';
                                break;
                            case '-4 hours':
                                sentiment_time_adjust_control_textbox.value = '-3 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:3';
                                break;
                            case '-5 hours':
                                sentiment_time_adjust_control_textbox.value = '-4 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:4';
                                break;
                            case '-6 hours':
                                sentiment_time_adjust_control_textbox.value = '-5 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:5';
                                break;
                            case '-7 hours':
                                sentiment_time_adjust_control_textbox.value = '-6 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:6';
                                break;
                            case '-8 hours':
                                sentiment_time_adjust_control_textbox.value = '-7 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:7';
                                break;
                            case '-9 hours':
                                sentiment_time_adjust_control_textbox.value = '-8 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:8';
                                break;
                            case '-10 hours':
                                sentiment_time_adjust_control_textbox.value = '-9 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:9';
                                break;
                            case '-11 hours':
                                sentiment_time_adjust_control_textbox.value = '-10 hours';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:10';
                                break;
                            case '-12 hours':
                            sentiment_time_adjust_control_textbox.value = '-11 hours';
                            sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:hour:11';
                            break;
                        }
                    }
                    break;
                case '1 day':
                    if (sentiment_time_adjust_control_textbox.value.length > 4) {
                        switch (sentiment_time_adjust_control_textbox.value) {
                            case '+6 days':
                                sentiment_time_adjust_control_textbox.value = '+7 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:7';
                                break;
                            case '+5 days':
                                sentiment_time_adjust_control_textbox.value = '+6 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:6';
                                break;
                            case '+4 days':
                                sentiment_time_adjust_control_textbox.value = '+5 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:5';
                                break;
                            case '+3 days':
                                sentiment_time_adjust_control_textbox.value = '+4 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:4';
                                break;
                            case '+2 days':
                                sentiment_time_adjust_control_textbox.value = '+3 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:3';
                                break;
                            case '+1 day':
                                sentiment_time_adjust_control_textbox.value = '+2 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:2';
                                break;
                            case '0 days':
                                sentiment_time_adjust_control_textbox.value = '+1 day';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '+:day:1';
                                break;
                            case '-1 day':
                                sentiment_time_adjust_control_textbox.value = '0 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '*:day:00';
                                break;
                            case '-2 days':
                                sentiment_time_adjust_control_textbox.value = '-1 day';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:1';
                                break;
                            case '-3 days':
                                sentiment_time_adjust_control_textbox.value = '-2 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:2';
                                break;
                            case '-4 days':
                                sentiment_time_adjust_control_textbox.value = '-3 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:3';
                                break;
                            case '-5 days':
                                sentiment_time_adjust_control_textbox.value = '-4 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:4';
                                break;
                            case '-6 days':
                                sentiment_time_adjust_control_textbox.value = '-5 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:5';
                                break;
                            case '-7 days':
                                sentiment_time_adjust_control_textbox.value = '-6 days';
                                sentiment_time_adjust_control_textbox.dataset.sentimenttimeadjust = '-:day:6';
                                break;
                        }
                    }
                    break;
                default:
                    sentiment_time_adjust_control_textbox.value = 'value error';
            }
        }
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
        const xaxis_label = graphs_wrapper_div.querySelector("div[id='xaxis_label']");
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
        if (xaxis_label) {
            xaxis_label.innerHTML = 'Eastern US<br />Times';
            xaxis_label.style.cssText = 'background-color: #494949; color:#f4f4f4;';
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
    InitChartBottomControls();
}

function Adjust_GMT(historical_datetime, sentiment_time_adjust_dataset) {
    let date_split = null;
    let time_split = null;
    const datetime_split = historical_datetime.split('T');
    const sentiment_time_adjust_dataset_split = sentiment_time_adjust_dataset.split('|');
    if (datetime_split && datetime_split.length === 2) {
        date_split = datetime_split[0].split('-');
        time_split = datetime_split[1].split(':');
    }
    if (sentiment_time_adjust_dataset_split && sentiment_time_adjust_dataset_split.length === 3) {
        switch (sentiment_time_adjust_dataset_split[0]) {
            case '+':
                switch (sentiment_time_adjust_dataset_split[1]) {
                    case 'min':
                        if (sentiment_time_adjust_dataset_split[2] != 0 && sentiment_time_adjust_dataset_split[2] != 5) {
                            time_split[1] = (parseInt(time_split[1]) - parseInt(sentiment_time_adjust_dataset_split[2])).toString();
                        }
                        break;
                }
                break;
            case '-':
                break;
            case '*':
                break;

        }
    }
    var tt = ""+date_split[0]+"-"+date_split[1]+"-"+date_split[2]+"T"+time_split[0]+":"+time_split[1]+":"+time_split[2]+"";
    return tt;
}

async function RefreshSentimentGraph() {
    const domain = 'http://127.0.0.1:5000';
    const cache_no_store = ', { cache: "no-store" }';
    const historical_datetime_value = document.querySelector("input[id='begin_datetime_textbox']").value;
    const resolution_value = document.querySelector("input[id='chart_resolution_control_textbox']").value;
    /* const sentiment_time_adjust_value = document.querySelector("input[id='sentiment_time_adjust_control_textbox']").value; */
    const sentiment_time_adjust_dataset = document.querySelector("input[data-sentimenttimeadjust]").dataset.sentimenttimeadjust;
    const ticker_value = document.querySelector("input[id='stock_symbol_textbox']").value;
    const sentiment_message_div = document.querySelector("div[id='sentiment_msg']");
    let adjusted_datetime = null;
    /* if (historical_datetime_value && sentiment_time_adjust_dataset) {
        adjusted_datetime = Adjust_GMT(historical_datetime_value, sentiment_time_adjust_dataset);
    } */
    try {
        let fetch_sentiment_graphs_response = null;
        const sentiment_label = graphs_wrapper_div.querySelector("div[id='sentiment_label']");
        const sentiment_yaxis_label_div = graphs_wrapper_div.querySelector("div[class='sentiment_yaxis_label']");
        const sentiment_graph_div = graphs_wrapper_div.querySelector("div[class='sentiment_graph_div']");
        /* if (adjusted_datetime.length === 19 && 
            resolution_value.length > 4 && 
            ticker_value.length > 0 ) {
            fetch_sentiment_graphs_response = await fetch(domain + '/draw_sentiment_graphs_adjusted/'+ ticker_value + '|' + adjusted_datetime + '|' + resolution_value, { cache: "no-store" });
        } */
        if (historical_datetime_value.length === 19 && 
            resolution_value.length > 4 && 
            ticker_value.length > 0 ) {
            fetch_sentiment_graphs_response = await fetch(domain + '/draw_sentiment_graphs_adjusted/'+ ticker_value + '|' + historical_datetime_value + '|' + resolution_value + '|' + sentiment_time_adjust_dataset, { cache: "no-store" });
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
    } catch {
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
function InitChartBottomControls() {
    const chart_bottom_controls_sentiment_refresh_button = chart_bottom_controls_container_div.querySelector("input[id='sentiment_refresh_button']");
        if (chart_bottom_controls_sentiment_refresh_button) {
            const refresh_button = new Promise((resolve) => {
                chart_bottom_controls_sentiment_refresh_button.removeEventListener("click", RefreshSentimentGraph, false);
                resolve();
            });
            refresh_button.then(() => {
                chart_bottom_controls_sentiment_refresh_button.addEventListener("click", RefreshSentimentGraph, false);
            });
        }
    const chart_resolution_control_textbox = chart_top_controls_container_div.querySelector("input[id='chart_resolution_control_textbox']");
    const sentiment_time_adjust_control_textbox = chart_bottom_controls_container_div.querySelector("input[id='sentiment_time_adjust_control_textbox']");
    if (sentiment_time_adjust_control_textbox) {
        if (chart_resolution_control_textbox && chart_resolution_control_textbox.value.length > 4) {
            switch (chart_resolution_control_textbox.value) {
                case '1 minute':
                    sentiment_time_adjust_control_textbox.value = '0 minutes';
                    break;
                case '5 minutes':
                    sentiment_time_adjust_control_textbox.value = '0 minutes';
                    break;
                case '60 minutes':
                    sentiment_time_adjust_control_textbox.value = '0 hours';
                    break;
                case '1 day':
                    sentiment_time_adjust_control_textbox.value = '0 days';
                    break;
                default:
                    sentiment_time_adjust_control_textbox.value = 'value error';
            }
        }
    }
    const sentiment_time_adjust_control_left_arrow_button = chart_bottom_controls_container_div.querySelector("input[id='sentiment_time_adjust_control_left_arrow']");
    if (sentiment_time_adjust_control_left_arrow_button) {
        const left_arrow_button = new Promise((resolve) => {
            sentiment_time_adjust_control_left_arrow_button.removeEventListener("click", DecrementSentimentTime, false);
            resolve();
        });
        left_arrow_button.then(() => {
            sentiment_time_adjust_control_left_arrow_button.addEventListener("click", DecrementSentimentTime, false);
        });
    }
    const sentiment_time_adjust_control_right_arrow_button = chart_bottom_controls_container_div.querySelector("input[id='sentiment_time_adjust_control_right_arrow']");
    if (sentiment_time_adjust_control_right_arrow_button) {
        const right_arrow_button = new Promise((resolve) => {
            sentiment_time_adjust_control_right_arrow_button.removeEventListener("click", IncrementSentimentTime, false);
            resolve();
        });
        right_arrow_button.then(() => {
            sentiment_time_adjust_control_right_arrow_button.addEventListener("click", IncrementSentimentTime, false);
        });
    }
}
function InitControls() {
    chart_top_controls_container_div = document.querySelector("div[class='chart_top_controls_container']");
    chart_bottom_controls_container_div = document.querySelector("div[class='chart_bottom_controls_container']");
    graphs_wrapper_div = document.querySelector("div[class='graphs_wrapper']");

    InitChartTopControls();
    InitChartBottomControls(); 
}
document.addEventListener("DOMContentLoaded", InitControls, false);