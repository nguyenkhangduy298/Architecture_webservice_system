import requests
import json
from requests.exceptions import Timeout
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--post", help="post from URL")

args = parser.parse_args()

class UserGenerator:
    def __init__(self):
        # super().__init__()
        self.name = ""
        self.email = ""
        self.password = ""
        self.image = ""

    def get_response(self):
        try:
            response = requests.get('https://randomuser.me/api/', timeout = 1)
            response = response.json()
            response = response['results'][0]

            self.name = "{} {}".format(
                response['name']['first'],
                response['name']['last']
            )

            self.email = response["email"]
            self.password = response['login']['password']
            self.image = response["picture"]["thumbnail"]
        
        except Timeout:
            print('The request timed out')
        except ValueError:
            print('Skip parse')
            return None
        else:
            print('The request did not time out')

        return (self.name, self.email, self.password, self.image)

    def post_request(self, role = "student"):
        result = self.get_response()
        if result is None:
            return 
        
        post = requests.post(
            'http://localhost:8080/user',
            headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            json = {
                "name" : self.name,
                "email" : self.email,
                "password" : self.password,
                "image" : self.image, 
                "role" : role
            }
        )

        return post

if __name__ == "__main__":
    generator = UserGenerator()
    if args.post:
        for n in range(int(args.post)):
            post = generator.post_request()
            print("[Request] Number of users:", n)
    




        
