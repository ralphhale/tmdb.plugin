import requests
from pprint import pprint

# Structure payload.
payload = {
   'source': 'amazon'
}

# Get response.
response = requests.request(
    'POST',
    'https://realtime.oxylabs.io/v1/queries',
    auth=('ralphhale@gmail.com', 'Code##383'), #Your credentials go here
    json=payload,
)

# Instead of response with job status and results url, this will return the
# JSON response with results.
pprint(response.json())