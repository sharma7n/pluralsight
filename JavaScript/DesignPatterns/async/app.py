from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('page.html')

@app.route("/data")
def data():
    return jsonify([
        {"value": "blah"} for _ in range(1000000)])

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8080,
        debug=True)