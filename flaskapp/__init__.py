import time
from flask import Flask
from flask import render_template
import flaskapp.src.fire as fr

app = Flask(__name__)

@app.route('/hello/<user>')
def hello(user=None):
    return render_template('test.html', gmt_time=time.gmtime(), unix_time=time.time(), user_name=user)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/draw')
def draw():
    return f'<!doctype html><body><div>{fr.make_chart()}</div></body>'