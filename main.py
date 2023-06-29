import requests
#api-endpoint
URL = "http://api.weatherapi.com/v1/current.json"

#geographic location from user
location = input()

PARAMS = {'q':location, 'key':'9b525023668444deb97211507232006'}

r = requests.get(url = URL, params = PARAMS)

data = r.json()

locationData = data['location']
currentData = data['current']
conditionData = data['condition']



print(locationData['name'] + conditionData['condition'])



