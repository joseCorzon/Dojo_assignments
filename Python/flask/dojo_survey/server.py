from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def main():
    return render_template("index.html")


@app.route('/formResult', methods=["POST"])
def formResult():
    session["person"] = request.form
    return redirect("/result")


@app.route('/result')
def result():
    name = session["person"]["name"]
    location = session["person"]["location"]
    language = session["person"]["language"]
    text = session["person"]["text"]
    return render_template("second.html", name=name, location=location, language=language, text=text)


if __name__ == "__main__":
    app.run(debug=True)
