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

""" @app.route('/draw_price_yaxis/<ticker>|<begin_datetime>|<resolution>')
def draw_price_yaxis_only_historical(ticker=None, begin_datetime=None, resolution=None):
    #return f'<!doctype html><body><div style="text-align:center;">{fr.make_yaxis_only_volume_svg_chart()}</div></body>'
    #return f'{fr.make_yaxis_only_price_svg_chart(begin_timedate)}'
    api_json = ah.get_candlestick_historical(ticker, begin_datetime, resolution)
    data = {
        "price_yaxis": f"{fr.make_yaxis_only_price_svg_chart(api_json)}",
        "price": f"{fr.make_price_svg_chart(api_json)}"
    }
    return jsonify(data) """
@app.route('/draw_stock_graphs_historical/<ticker>|<begin_datetime>|<resolution>')
def draw_stock_graphs_historical(ticker=None, begin_datetime=None, resolution=None):
    api_json = ah.get_candlestick_historical(ticker, begin_datetime, resolution)
    data = {
        "price_yaxis": f"{fr.make_yaxis_only_price_svg_chart(api_json)}",
        "price": f"{fr.make_price_svg_chart(api_json)}",
        "volume_yaxis": f"{fr.make_yaxis_only_volume_svg_chart(api_json)}",
        "volume": f"{fr.make_volume_svg_chart(api_json)}",
        "xaxis": f"{fr.make_xaxis_only_svg_chart(api_json)}"
    }
    return jsonify(data)

@app.route('/draw_sentiment_graphs_historical/<ticker>|<begin_datetime>|<resolution>')
def draw_sentiment_graphs_historical(ticker=None, begin_datetime=None, resolution=None):
    api_json = ah.get_sentiment_historical(ticker, begin_datetime, resolution)
    data = {
        "sentiment_yaxis": f"{fr.make_yaxis_only_sentiment_svg_chart(ticker, api_json)}",
        "sentiment": f"{fr.make_sentiment_svg_chart(ticker, api_json)}"
    }
    """ data = {
        "sentiment_yaxis": '<?xml version="1.0" encoding="utf-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\n  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="86.4pt" height="648pt" viewBox="0 0 86.4 648" xmlns="http://www.w3.org/2000/svg" version="1.1">\n <metadata>\n  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n   <cc:Work>\n    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>\n    <dc:date>2024-10-12T17:33:29.993147</dc:date>\n    <dc:format>image/svg+xml</dc:format>\n    <dc:creator>\n     <cc:Agent>\n      <dc:title>Matplotlib v3.9.2, https://matplotlib.org/</dc:title>\n     </cc:Agent>\n    </dc:creator>\n   </cc:Work>\n  </rdf:RDF>\n </metadata>\n <defs>\n  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>\n </defs>\n <g id="figure_1">\n  <g id="axes_1">\n   <g id="patch_1">\n    <path d="M 46.33 637.2 \nL 75.6 637.2 \nL 75.6 10.8 \nL 46.33 10.8 \nz\n" style="fill: #ffffff"/>\n   </g>\n   <g id="matplotlib.axis_1">\n    <g id="xtick_1"/>\n    <g id="xtick_2"/>\n   </g>\n   <g id="matplotlib.axis_2">\n    <g id="ytick_1">\n     <g id="line2d_1">\n      <defs>\n       <path id="md7e0e34bde" d="M 0 0 \nL -3.5 0 \n" style="stroke: #000000; stroke-width: 0.8"/>\n      </defs>\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="600.545455" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_1">\n      <!-- 413.5 -->\n      <g transform="translate(10.701875 604.344673) scale(0.1 -0.1)">\n       <defs>\n        <path id="DejaVuSans-34" d="M 2419 4116 \nL 825 1625 \nL 2419 1625 \nL 2419 4116 \nz\nM 2253 4666 \nL 3047 4666 \nL 3047 1625 \nL 3713 1625 \nL 3713 1100 \nL 3047 1100 \nL 3047 0 \nL 2419 0 \nL 2419 1100 \nL 313 1100 \nL 313 1709 \nL 2253 4666 \nz\n" transform="scale(0.015625)"/>\n        <path id="DejaVuSans-31" d="M 794 531 \nL 1825 531 \nL 1825 4091 \nL 703 3866 \nL 703 4441 \nL 1819 4666 \nL 2450 4666 \nL 2450 531 \nL 3481 531 \nL 3481 0 \nL 794 0 \nL 794 531 \nz\n" transform="scale(0.015625)"/>\n        <path id="DejaVuSans-33" d="M 2597 2516 \nQ 3050 2419 3304 2112 \nQ 3559 1806 3559 1356 \nQ 3559 666 3084 287 \nQ 2609 -91 1734 -91 \nQ 1441 -91 1130 -33 \nQ 819 25 488 141 \nL 488 750 \nQ 750 597 1062 519 \nQ 1375 441 1716 441 \nQ 2309 441 2620 675 \nQ 2931 909 2931 1356 \nQ 2931 1769 2642 2001 \nQ 2353 2234 1838 2234 \nL 1294 2234 \nL 1294 2753 \nL 1863 2753 \nQ 2328 2753 2575 2939 \nQ 2822 3125 2822 3475 \nQ 2822 3834 2567 4026 \nQ 2313 4219 1838 4219 \nQ 1578 4219 1281 4162 \nQ 984 4106 628 3988 \nL 628 4550 \nQ 988 4650 1302 4700 \nQ 1616 4750 1894 4750 \nQ 2613 4750 3031 4423 \nQ 3450 4097 3450 3541 \nQ 3450 3153 3228 2886 \nQ 3006 2619 2597 2516 \nz\n" transform="scale(0.015625)"/>\n        <path id="DejaVuSans-2e" d="M 684 794 \nL 1344 794 \nL 1344 0 \nL 684 0 \nL 684 794 \nz\n" transform="scale(0.015625)"/>\n        <path id="DejaVuSans-35" d="M 691 4666 \nL 3169 4666 \nL 3169 4134 \nL 1269 4134 \nL 1269 2991 \nQ 1406 3038 1543 3061 \nQ 1681 3084 1819 3084 \nQ 2600 3084 3056 2656 \nQ 3513 2228 3513 1497 \nQ 3513 744 3044 326 \nQ 2575 -91 1722 -91 \nQ 1428 -91 1123 -41 \nQ 819 9 494 109 \nL 494 744 \nQ 775 591 1075 516 \nQ 1375 441 1709 441 \nQ 2250 441 2565 725 \nQ 2881 1009 2881 1497 \nQ 2881 1984 2565 2268 \nQ 2250 2553 1709 2553 \nQ 1456 2553 1204 2497 \nQ 953 2441 691 2322 \nL 691 4666 \nz\n" transform="scale(0.015625)"/>\n       </defs>\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-33" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-35" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_2">\n     <g id="line2d_2">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="518.727273" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_2">\n      <!-- 414.0 -->\n      <g transform="translate(10.701875 522.526491) scale(0.1 -0.1)">\n       <defs>\n        <path id="DejaVuSans-30" d="M 2034 4250 \nQ 1547 4250 1301 3770 \nQ 1056 3291 1056 2328 \nQ 1056 1369 1301 889 \nQ 1547 409 2034 409 \nQ 2525 409 2770 889 \nQ 3016 1369 3016 2328 \nQ 3016 3291 2770 3770 \nQ 2525 4250 2034 4250 \nz\nM 2034 4750 \nQ 2819 4750 3233 4129 \nQ 3647 3509 3647 2328 \nQ 3647 1150 3233 529 \nQ 2819 -91 2034 -91 \nQ 1250 -91 836 529 \nQ 422 1150 422 2328 \nQ 422 3509 836 4129 \nQ 1250 4750 2034 4750 \nz\n" transform="scale(0.015625)"/>\n       </defs>\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-34" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-30" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_3">\n     <g id="line2d_3">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="436.909091" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_3">\n      <!-- 414.5 -->\n      <g transform="translate(10.701875 440.70831) scale(0.1 -0.1)">\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-34" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-35" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_4">\n     <g id="line2d_4">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="355.090909" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_4">\n      <!-- 415.0 -->\n      <g transform="translate(10.701875 358.890128) scale(0.1 -0.1)">\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-35" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-30" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_5">\n     <g id="line2d_5">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="273.272727" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_5">\n      <!-- 415.5 -->\n      <g transform="translate(10.701875 277.071946) scale(0.1 -0.1)">\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-35" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-35" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_6">\n     <g id="line2d_6">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="191.454545" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_6">\n      <!-- 416.0 -->\n      <g transform="translate(10.701875 195.253764) scale(0.1 -0.1)">\n       <defs>\n        <path id="DejaVuSans-36" d="M 2113 2584 \nQ 1688 2584 1439 2293 \nQ 1191 2003 1191 1497 \nQ 1191 994 1439 701 \nQ 1688 409 2113 409 \nQ 2538 409 2786 701 \nQ 3034 994 3034 1497 \nQ 3034 2003 2786 2293 \nQ 2538 2584 2113 2584 \nz\nM 3366 4563 \nL 3366 3988 \nQ 3128 4100 2886 4159 \nQ 2644 4219 2406 4219 \nQ 1781 4219 1451 3797 \nQ 1122 3375 1075 2522 \nQ 1259 2794 1537 2939 \nQ 1816 3084 2150 3084 \nQ 2853 3084 3261 2657 \nQ 3669 2231 3669 1497 \nQ 3669 778 3244 343 \nQ 2819 -91 2113 -91 \nQ 1303 -91 875 529 \nQ 447 1150 447 2328 \nQ 447 3434 972 4092 \nQ 1497 4750 2381 4750 \nQ 2619 4750 2861 4703 \nQ 3103 4656 3366 4563 \nz\n" transform="scale(0.015625)"/>\n       </defs>\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-36" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-30" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_7">\n     <g id="line2d_7">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="109.636364" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_7">\n      <!-- 416.5 -->\n      <g transform="translate(10.701875 113.435582) scale(0.1 -0.1)">\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-36" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-35" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n    <g id="ytick_8">\n     <g id="line2d_8">\n      <g>\n       <use xlink:href="#md7e0e34bde" x="46.33" y="27.818182" style="stroke: #000000; stroke-width: 0.8"/>\n      </g>\n     </g>\n     <g id="text_8">\n      <!-- 417.0 -->\n      <g transform="translate(10.701875 31.617401) scale(0.1 -0.1)">\n       <defs>\n        <path id="DejaVuSans-37" d="M 525 4666 \nL 3525 4666 \nL 3525 4397 \nL 1831 0 \nL 1172 0 \nL 2766 4134 \nL 525 4134 \nL 525 4666 \nz\n" transform="scale(0.015625)"/>\n       </defs>\n       <use xlink:href="#DejaVuSans-34"/>\n       <use xlink:href="#DejaVuSans-31" x="63.623047"/>\n       <use xlink:href="#DejaVuSans-37" x="127.246094"/>\n       <use xlink:href="#DejaVuSans-2e" x="190.869141"/>\n       <use xlink:href="#DejaVuSans-30" x="222.65625"/>\n      </g>\n     </g>\n    </g>\n   </g>\n   <g id="line2d_9">\n    <path d="M 46.33 399.272727 \nL 46.33 189.818182 \nL 46.33 134.181818 \nL 46.33 103.909091 \nL 46.33 116.181818 \nL 46.33 47.454545 \nL 46.33 39.272727 \nL 46.33 94.909091 \nL 46.33 168.545455 \nL 46.33 304.363636 \nL 46.33 338.727273 \nL 46.33 285.545455 \nL 46.33 243 \nL 46.33 271.636364 \nL 46.33 291.272727 \nL 46.33 346.909091 \nL 46.33 340.363636 \nL 46.33 304.363636 \nL 46.33 260.181818 \nL 46.33 312.545455 \nL 46.33 211.909091 \nL 46.33 268.363636 \nL 46.33 279.818182 \nL 46.33 276.545455 \nL 46.33 338.727273 \nL 46.33 355.090909 \nL 46.33 428.727273 \nL 46.33 489.272727 \nL 46.33 598.909091 \nL 46.33 545.727273 \nL 46.33 526.090909 \nL 46.33 551.454545 \nL 46.33 558 \nL 46.33 553.090909 \nL 46.33 608.727273 \nL 46.33 465.545455 \nL 46.33 451.636364 \nL 46.33 468 \n" clip-path="url(#pfe4992d47d)" style="fill: none; stroke: #1f77b4; stroke-width: 1.5; stroke-linecap: square"/>\n   </g>\n   <g id="patch_2">\n    <path d="M 46.33 637.2 \nL 46.33 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_3">\n    <path d="M 75.6 637.2 \nL 75.6 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_4">\n    <path d="M 46.33 637.2 \nL 75.6 637.2 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_5">\n    <path d="M 46.33 10.8 \nL 75.6 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n  </g>\n </g>\n <defs>\n  <clipPath id="pfe4992d47d">\n   <rect x="46.33" y="10.8" width="29.27" height="626.4"/>\n  </clipPath>\n </defs>\n</svg>\n',
        "sentiment": '<?xml version="1.0" encoding="utf-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\n  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1152pt" height="648pt" viewBox="0 0 1152 648" xmlns="http://www.w3.org/2000/svg" version="1.1">\n <metadata>\n  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n   <cc:Work>\n    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>\n    <dc:date>2024-10-12T17:33:30.700468</dc:date>\n    <dc:format>image/svg+xml</dc:format>\n    <dc:creator>\n     <cc:Agent>\n      <dc:title>Matplotlib v3.9.2, https://matplotlib.org/</dc:title>\n     </cc:Agent>\n    </dc:creator>\n   </cc:Work>\n  </rdf:RDF>\n </metadata>\n <defs>\n  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>\n </defs>\n <g id="figure_1">\n  <g id="axes_1">\n   <g id="patch_1">\n    <path d="M 10.8 637.2 \nL 1141.2 637.2 \nL 1141.2 10.8 \nL 10.8 10.8 \nz\n" style="fill: #ffffff"/>\n   </g>\n   <g id="matplotlib.axis_1">\n    <g id="xtick_1"/>\n    <g id="xtick_2"/>\n    <g id="xtick_3"/>\n    <g id="xtick_4"/>\n    <g id="xtick_5"/>\n    <g id="xtick_6"/>\n    <g id="xtick_7"/>\n    <g id="xtick_8"/>\n    <g id="xtick_9"/>\n    <g id="xtick_10"/>\n    <g id="xtick_11"/>\n    <g id="xtick_12"/>\n    <g id="xtick_13"/>\n    <g id="xtick_14"/>\n    <g id="xtick_15"/>\n    <g id="xtick_16"/>\n    <g id="xtick_17"/>\n    <g id="xtick_18"/>\n    <g id="xtick_19"/>\n    <g id="xtick_20"/>\n    <g id="xtick_21"/>\n    <g id="xtick_22"/>\n    <g id="xtick_23"/>\n    <g id="xtick_24"/>\n    <g id="xtick_25"/>\n    <g id="xtick_26"/>\n    <g id="xtick_27"/>\n    <g id="xtick_28"/>\n    <g id="xtick_29"/>\n    <g id="xtick_30"/>\n    <g id="xtick_31"/>\n    <g id="xtick_32"/>\n    <g id="xtick_33"/>\n    <g id="xtick_34"/>\n    <g id="xtick_35"/>\n    <g id="xtick_36"/>\n    <g id="xtick_37"/>\n    <g id="xtick_38"/>\n   </g>\n   <g id="matplotlib.axis_2">\n    <g id="ytick_1"/>\n    <g id="ytick_2"/>\n    <g id="ytick_3"/>\n    <g id="ytick_4"/>\n    <g id="ytick_5"/>\n    <g id="ytick_6"/>\n    <g id="ytick_7"/>\n    <g id="ytick_8"/>\n   </g>\n   <g id="line2d_1">\n    <path d="M 62.181818 399.272727 \nL 89.955774 189.818182 \nL 117.72973 134.181818 \nL 145.503686 103.909091 \nL 173.277641 116.181818 \nL 201.051597 47.454545 \nL 228.825553 39.272727 \nL 256.599509 94.909091 \nL 284.373464 168.545455 \nL 312.14742 304.363636 \nL 339.921376 338.727273 \nL 367.695332 285.545455 \nL 395.469287 243 \nL 423.243243 271.636364 \nL 451.017199 291.272727 \nL 478.791155 346.909091 \nL 506.565111 340.363636 \nL 534.339066 304.363636 \nL 562.113022 260.181818 \nL 589.886978 312.545455 \nL 617.660934 211.909091 \nL 645.434889 268.363636 \nL 673.208845 279.818182 \nL 700.982801 276.545455 \nL 728.756757 338.727273 \nL 756.530713 355.090909 \nL 784.304668 428.727273 \nL 812.078624 489.272727 \nL 839.85258 598.909091 \nL 867.626536 545.727273 \nL 895.400491 526.090909 \nL 923.174447 551.454545 \nL 950.948403 558 \nL 978.722359 553.090909 \nL 1006.496315 608.727273 \nL 1034.27027 465.545455 \nL 1062.044226 451.636364 \nL 1089.818182 468 \n" clip-path="url(#pe720a714b3)" style="fill: none; stroke: #1f77b4; stroke-width: 1.5; stroke-linecap: square"/>\n   </g>\n   <g id="patch_2">\n    <path d="M 10.8 637.2 \nL 10.8 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_3">\n    <path d="M 1141.2 637.2 \nL 1141.2 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_4">\n    <path d="M 10.8 637.2 \nL 1141.2 637.2 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n   <g id="patch_5">\n    <path d="M 10.8 10.8 \nL 1141.2 10.8 \n" style="fill: none; stroke: #000000; stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/>\n   </g>\n  </g>\n </g>\n <defs>\n  <clipPath id="pe720a714b3">\n   <rect x="10.8" y="10.8" width="1130.4" height="626.4"/>\n  </clipPath>\n </defs>\n</svg>\n'
    } """
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