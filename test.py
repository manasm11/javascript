import requests
import json
print(json.dumps(requests.get("http://localhost:8000/tweets/").json(), indent=2))