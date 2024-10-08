import requests
import datetime
import time
import calendar

def get_candlestick_historical(ticker, begin_datetime, resolution):
    fh_api_token = 'crdqtppr01qmh2aq9ecgcrdqtppr01qmh2aq9ed0'
    begin_epoch_time = None
    end_epoch_time = None
    data_resolution = None
    json_api_response = None
    if begin_datetime is not None:
        gmt_time = time.strptime(begin_datetime, "%Y-%m-%dT%H:%M:%S")
        begin_epoch_time = calendar.timegm(gmt_time)
    if resolution is not None:
        match resolution:
            case '15 minutes':
                data_resolution = 15
                datetime_object = datetime.datetime.fromtimestamp(begin_epoch_time)
                new_datetime_object = datetime_object + datetime.timedelta(minutes=15*37)
                end_epoch_time = int(new_datetime_object.timestamp()) 
            case _:
                data_resolution = 60
    if data_resolution and begin_epoch_time and end_epoch_time and ticker:
        json_api_response = requests.get(f"https://finnhub.io/api/v1/stock/candle?symbol={ticker}&resolution={data_resolution}&from={begin_epoch_time}&to={end_epoch_time}&token={fh_api_token}")
        #json_api_response = requests.get('https://finnhub.io/api/v1/stock/candle?symbol=NVDA&resolution=1&from=1725629400&to=1725658200&token=crdqtppr01qmh2aq9ecgcrdqtppr01qmh2aq9ed0')
        return json_api_response.text