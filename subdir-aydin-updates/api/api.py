from flask import Flask, jsonify
from flask_cors import CORS

title = input("What do you want the title to be? ")


app = Flask(__name__)
CORS(app)

@app.route('/api/do-something', methods=['GET'])
def do_something():
    response = {
        'school_name': title
    }
    return jsonify(response)



if __name__ == '__main__':
    app.run(debug=True)

