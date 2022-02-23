from flask import render_template, request, redirect
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
from flask_app import app

# @app.route("/create_ninja", methods=["POST"])
# def create_ninja():
# 	Ninja.add_ninja(request.form)
# 	return redirect('/addninja')

# @app.route('/dojo/<int:dojo_id>')
# def get_ninja(dojo_id):
# 	return render_template('showninjas.html')