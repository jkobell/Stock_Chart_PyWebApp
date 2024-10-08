import time
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

@app.route('/draw_price_yaxis/<ticker>|<begin_datetime>|<resolution>')
def draw_price_yaxis_only_historical(ticker=None, begin_datetime=None, resolution=None):
    #return f'<!doctype html><body><div style="text-align:center;">{fr.make_yaxis_only_volume_svg_chart()}</div></body>'
    #return f'{fr.make_yaxis_only_price_svg_chart(begin_timedate)}'
    api_json = ah.get_candlestick_historical(ticker, begin_datetime, resolution)
    data = {
        "price_yaxis": f"{fr.make_yaxis_only_price_svg_chart(api_json)}",
        "price": f"{fr.make_price_svg_chart(api_json)}"
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