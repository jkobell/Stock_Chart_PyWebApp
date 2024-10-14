import requests
import datetime
import time
import calendar

def get_candlestick_historical(ticker, begin_datetime, resolution):
    FH_API_TOKEN = 'crdqtppr01qmh2aq9ecgcrdqtppr01qmh2aq9ed0'
    GRAPH_TICK_SIZE = 35
    begin_epoch_time = None
    end_epoch_time = None
    data_resolution = None
    if begin_datetime is not None:
        gmt_time = time.strptime(begin_datetime, "%Y-%m-%dT%H:%M:%S")
        begin_epoch_time = calendar.timegm(gmt_time)
    if resolution is not None:
        match resolution:
            case '1 day':
                relative_resolution = 1
                data_resolution = 'D'
                datetime_object = datetime.datetime.fromtimestamp(begin_epoch_time)
                new_datetime_object = datetime_object + datetime.timedelta(days=relative_resolution*GRAPH_TICK_SIZE)
                end_epoch_time = int(new_datetime_object.timestamp())
            case '60 minutes':
                data_resolution = 60
                datetime_object = datetime.datetime.fromtimestamp(begin_epoch_time)
                new_datetime_object = datetime_object + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_epoch_time = int(new_datetime_object.timestamp())
            case '5 minutes':
                data_resolution = 5
                datetime_object = datetime.datetime.fromtimestamp(begin_epoch_time)
                new_datetime_object = datetime_object + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_epoch_time = int(new_datetime_object.timestamp())
            case '1 minute':
                data_resolution = 1
                datetime_object = datetime.datetime.fromtimestamp(begin_epoch_time)
                new_datetime_object = datetime_object + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_epoch_time = int(new_datetime_object.timestamp())
    if data_resolution and begin_epoch_time and end_epoch_time and ticker:
        json_api_response = requests.get(f"https://finnhub.io/api/v1/stock/candle?symbol={ticker}&resolution={data_resolution}&from={begin_epoch_time}&to={end_epoch_time}&token={FH_API_TOKEN}")
        return json_api_response.text

def get_sentiment_historical(ticker, begin_datetime, resolution):
    GRAPH_TICK_SIZE = 36
    token = '4IOkEwgfNlssKmQS9eWs2WM5DF59yQyL'
    headers = {'Token': f'{token}'}
    end_datetime = None
    data_resolution = None
    if begin_datetime is not None:
        gmt_time = datetime.datetime.strptime(begin_datetime, "%Y-%m-%dT%H:%M:%S").replace(tzinfo=datetime.timezone.utc)
    if resolution is not None:
        match resolution:
            case '1 day':
                data_resolution = 1
                api_data_resolution = '1d'
                new_datetime_object = gmt_time + datetime.timedelta(days=data_resolution*GRAPH_TICK_SIZE)
                end_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
            case '60 minutes':
                data_resolution = 60
                api_data_resolution = '1h'
                new_datetime_object = gmt_time + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")            
            case '5 minutes':
                data_resolution = 5
                api_data_resolution = '5m'
                new_datetime_object = gmt_time + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
            case '1 minute':
                data_resolution = 1
                api_data_resolution = '1m'
                new_datetime_object = gmt_time + datetime.timedelta(minutes=data_resolution*GRAPH_TICK_SIZE)
                end_datetime = new_datetime_object.strftime("%Y-%m-%dT%H:%M:%S")
    json_api_response = requests.get(f"https://api.stockgeist.ai/stock/us/hist/message-metrics?symbols={ticker}&start={begin_datetime}&end={end_datetime}&timeframe={api_data_resolution}", headers=headers)
    return json_api_response.text