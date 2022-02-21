from flask import render_template, request, redirect
from flask_app.models.usermodel import User
from flask_app import app



@app.route("/")
def index():
    return redirect ("/users")


@app.route("/users")
def users():
    users = User.get_all()
    return render_template("users.html", users = users)

@app.route("/users/<int:id>")
def show_user(id):
    return render_template("user_info.html", user = User.get_one({'id':id}))

@app.route("/users/<int:id>/edit")
def edit_user(id):
    return render_template("edit_user.html", user = User.get_one({'id':id}))

@app.route("/users/edit/post", methods = ['POST'])
def edit_process():
    User.edit_user(request.form)
    return redirect(f'/users/{request.form["id"]}')


@app.route("/new_user")
def new_user():
    return render_template("new_user.html")

@app.route("/new_user/post", methods = ['POST'])
def process_new_user():
    return redirect(f"/users/{User.add_user(request.form)}")

@app.route("/users/delete_post", methods = ['POST'])
def delete_user():
    User.delete_user(request.form)
    return redirect('/users')


