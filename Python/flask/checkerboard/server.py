from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', x=4, y=4)


@app.route('/4')
def four():
    return render_template('index.html', x=2, y=4)


@app.route('/<int:x>/<int:y>')
def dynamic(x, y):
    return render_template('index.html', x=x, y=y)


if __name__ == "__main__":
    app.run(debug=True)
