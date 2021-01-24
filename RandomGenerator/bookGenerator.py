import requests
import json
from requests.exceptions import Timeout
import csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--get", help="get from URL")
parser.add_argument("--post", help="post from URL")
parser.add_argument("--file", help="specified csv")
parser.add_argument('-option', help="Do you want to write to csv?")

args = parser.parse_args()

class BookGenerator:
    def __init__(self):
        # super().__init__()
        self.isbn = ""
        self.title = ""
        self.field = ""
        self.author = ""
        self.publish = ""
        self.description = ""
        self.url = ""

    def get_response(self, url):
        data = []
        try:
            response = requests.get(url, timeout = 1)
            response = response.json()
            size = len(response["records"])

            for n in range(size):
                print("Inner num:",n)

                res = response['records'][n]

                self.title = res["fields"]["Title"]
                self.author = res["fields"]["Author"]
                self.publish = res["createdTime"]
                self.url = res["fields"]["Amazon_Link"]

                # title = response["fields"]["Title"]
                # author = response["fields"]["Author"]
                # publish = response["createdTime"]
                # url = response["fields"]["Amazon_Link"]

                data.append([
                    self.isbn,
                    self.title,
                    self.field,
                    self.author,
                    self.publish,
                    self.description,
                    self.url
                ])
        
        except Timeout:
            print('The request timed out')
        except ValueError:
            print('Skip parse')
            return None
        else:
            print('The request did not time out')

        return data

    def post_request(self, record):
        post = requests.post(
            'http://localhost:8080/book',
            headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            json = {
                "isbn" : record[0],
                "title" : record[1],
                "field" : record[2],
                "author" : record[3],
                "publish" : record[4],
                "description" :record[5],
                "url" : record[6]
            }
        )

        return post

    def to_csv(self, data=[], path = "book.csv"):
        with open(path, mode='w') as write_file:
            writer = csv.writer(write_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            for record in data:
                writer.writerow(record)

    def read_csv(self):
        data = []
        with open('book.csv', mode = 'r') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            for record in csv_reader:
                # print(record[3])
                data.append(record)
        
        return data

 
if __name__ == "__main__":
    generator = BookGenerator()
    url = "https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr"

    data = []

    if args.get:
        for n in range(int(args.get)):
            print("Outer num:",n)
            records = generator.get_response(url)

            # print(record, type(record))
            for record in records:
                data.append(record)
            # print(data)
    
        if args.option == "write":
            generator.to_csv(data)
            
    if args.post == 'run':
        reader = generator.read_csv()
        for record in reader:
            response = generator.post_request(record)
            print(response.json())




        
