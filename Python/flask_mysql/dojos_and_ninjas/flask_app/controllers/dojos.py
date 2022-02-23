from ast import Return
from flask import render_template, request, redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
from flask_app import app


@app.route("/")
def index():
	dojos = Dojo.get_all_dojo()
	return render_template('dojos.html', dojos = dojos)

@app.route("/create_dojo", methods=["POST"])
def create_dojo():
	Dojo.add_dojo(request.form)
	return redirect('/')

@app.route("/addninja")
def addninja():
	dojos = Dojo.get_all_dojo()
	return render_template('ninjas.html', dojos = dojos)


@app.route("/create_ninja", methods=["POST"])
def create_ninja():
	Ninja.add_ninja(request.form)
	return redirect('/')

@app.route('/dojos/<int:dojo_id>')
def get_ninja(dojo_id):
	data = {
		'dojo_id':dojo_id
	}
	ninjas = Ninja.get_ninja_dojo(data)
	dojos = Dojo.get_one_dojo(data)
	return render_template('showninjas.html', ninjas = ninjas, dojos = dojos)