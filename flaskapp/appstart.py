import time
from flask import Flask
from flask import render_template
import src.fire as fr

app = Flask(__name__)

@app.route('/hello/<user>')
def hello(user=None):
    return render_template('test.html', gmt_time=time.gmtime(), unix_time=time.time(), user_name=user)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/draw_price')
def draw_price_line_graph():
    return f'<!doctype html><body><div style="text-align:right;">{fr.make_price_svg_chart()}</div></body>'

@app.route('/draw_volume')
def draw_volume_bar_graph():
    return f'<!doctype html><body><div style="text-align:right;">{fr.make_volume_svg_chart()}</div></body>'

@app.route('/draw_two')
def draw_two_share_xaxis():
    return f'<!doctype html><body><div style="text-align:center;">{fr.make_two_svg_chart()}</div></body>'

@app.route('/draw_xaxis')
def draw_xaxis_only():
    return f'<!doctype html><body><div style="text-align:right;">{fr.make_xaxis_only_svg_chart()}</div></body>'