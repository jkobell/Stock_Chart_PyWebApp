import time
import datetime
from flask import Flask, jsonify
from flask import render_template
import src.fire as fr
import src.api_handler as ah

app = Flask(__name__)

@app.route('/hello/<user>')
def hello(user=None):
    return render_template('test.html', gmt_time=time.gmtime(), unix_time=time.time(), user_name=user)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/draw_price')
def draw_price_line_graph():
    #return f'<!doctype html><body><div style="text-align:right;">{fr.make_price_svg_chart()}</div></body>'
    return f'{fr.make_price_svg_chart()}'

@app.route('/draw_price_yaxis')
def draw_price_yaxis_only():
    #return f'<!doctype html><body><div style="text-align:center;">{fr.make_yaxis_only_volume_svg_chart()}</div></body>'
    return f'{fr.make_yaxis_only_price_svg_chart()}'

@app.route('/draw_stock_graphs_historical/<ticker>|<begin_datetime>|<resolution>')
def draw_stock_graphs_historical(ticker=None, begin_datetime=None, resolution=None):
    api_json = ah.get_candlestick_historical(ticker, begin_datetime, resolution)
    data = {
        "price_yaxis": f"{fr.make_yaxis_only_price_svg_chart(api_json)}",
        "price": f"{fr.make_price_svg_chart(api_json)}",
        "volume_yaxis": f"{fr.make_yaxis_only_volume_svg_chart(api_json)}",
        "volume": f"{fr.make_volume_svg_chart(api_json, resolution)}",
        "xaxis": f"{fr.make_xaxis_only_svg_chart(api_json, resolution)}"
    }
    return jsonify(data)

@app.route('/draw_sentiment_graphs_historical/<ticker>|<begin_datetime>|<resolution>')
def draw_sentiment_graphs_historical(ticker=None, begin_datetime=None, resolution=None):
    api_json = ah.get_sentiment_historical(ticker, begin_datetime, resolution)
    data = {
        "sentiment_yaxis": f"{fr.make_yaxis_only_sentiment_svg_chart(ticker, api_json)}",
        "sentiment": f"{fr.make_sentiment_svg_chart(ticker, api_json, resolution)}"
    }
    return jsonify(data)

@app.route('/draw_sentiment_graphs_adjusted/<ticker>|<begin_datetime>|<resolution>|<time_adjust_dataset>')
def draw_sentiment_graphs_adjusted(ticker=None, begin_datetime=None, resolution=None, time_adjust_dataset=None):
    adjusted_begin_datetime = adjust_begin_datetime(begin_datetime, time_adjust_dataset)
    api_json = ah.get_sentiment_historical(ticker, adjusted_begin_datetime, resolution)
    data = {
        "sentiment_yaxis": f"{fr.make_yaxis_only_sentiment_svg_chart(ticker, api_json)}",
        "sentiment": f"{fr.make_sentiment_svg_chart_adjusted(ticker, api_json, resolution)}"
    }
    return jsonify(data)

@app.route('/draw_volume')
def draw_volume_bar_graph():
    #return f'<!doctype html><body><div style="text-align:right;">{fr.make_volume_svg_chart()}</div></body>'
    return f'{fr.make_volume_svg_chart()}'

@app.route('/draw_volume_yaxis')
def draw_volume_yaxis_only():
    #return f'<!doctype html><body><div style="text-align:center;">{fr.make_yaxis_only_volume_svg_chart()}</div></body>'
    return f'{fr.make_yaxis_only_volume_svg_chart()}'

@app.route('/draw_two')
def draw_two_share_xaxis():
    return f'<!doctype html><body><div style="text-align:center;">{fr.make_two_svg_chart()}</div></body>'

@app.route('/draw_xaxis')
def draw_xaxis_only():
    #return f'<!doctype html><body><div style="text-align:right;">{fr.make_xaxis_only_svg_chart()}</div></body>'
    return f'{fr.make_xaxis_only_svg_chart()}'

@app.route('/draw_sentiment_yaxis/<symbol>')
def draw_sentiment_yaxis_only(symbol=None):
    sentiment_yaxis_svg_chart = fr.make_yaxis_only_sentiment_svg_chart(symbol)
    #return f'<!doctype html><body><div style="text-align:center;">{fr.make_yaxis_only_volume_svg_chart()}</div></body>'
    return f'{sentiment_yaxis_svg_chart}'

@app.route('/draw_sentiment/<symbol>')
def draw_sentiment_bar_graph(symbol=None):
    sentiment_svg_chart = fr.make_sentiment_svg_chart(symbol)
    #return f'<!doctype html><body><div style="text-align:right;">{svg_chart}</div></body>'
    return f'{sentiment_svg_chart}'

def adjust_begin_datetime(begin_datetime, time_adjust_dataset):
    if begin_datetime is not None and time_adjust_dataset is not None:
        gmt_time = datetime.datetime.strptime(begin_datetime, "%Y-%m-%dT%H:%M:%S").replace(tzinfo=datetime.timezone.utc)
        time_adjust_dataset_split = time_adjust_dataset.split(':')
        if time_adjust_dataset_split is not None and len(time_adjust_dataset_split) == 3:
            match time_adjust_dataset_split[0]:
                case '+':
                    match time_adjust_dataset_split[1]:
                        case 'min':
                            new_datetime_object = gmt_time - datetime.timedelta(minutes=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                        case 'hour':
                            new_datetime_object = gmt_time - datetime.timedelta(hours=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                        case 'day':
                            new_datetime_object = gmt_time - datetime.timedelta(days=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                case '-':
                    match time_adjust_dataset_split[1]:
                        case 'min':
                            new_datetime_object = gmt_time + datetime.timedelta(minutes=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                        case 'hour':
                            new_datetime_object = gmt_time + datetime.timedelta(hours=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                        case 'day':
                            new_datetime_object = gmt_time + datetime.timedelta(days=int(time_adjust_dataset_split[2]))
                            begin_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
                            return begin_datetime
                case '*':
                    return begin_datetime
                            