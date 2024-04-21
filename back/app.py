from flask import Flask, request, jsonify
import firebase_admin
from classes import User, Pokemon
from firebase_admin import credentials, firestore
from database import createNewUser, checkUserCredentials, addPokemonToList, getUserPokemons, renamePokemon

app = Flask(__name__)

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
users_ref = db.collection('users')

#Criar usuário
@app.route('/createUser', methods=['POST'])
def createNewUser():
	user_data = request.json

	query = users_ref.document(user_data['login']).get()

	if query.exists:
		return {'error': 'User already exists'}, 400
	
	new_user_ref = users_ref.document(user_data['login'])
	new_user_ref.set({
		'password': user_data['password'],
	})

	return {'message': 'User created successfully'}, 201

#Retornar usuário
@app.route('/getUser', methods=['GET'])
def checkUserCredentials():
	login = request.args.get('login')
	password = request.args.get('password')

	user_doc = users_ref.document(login).get()
	
	if not user_doc.exists:
		return {'error': 'User not found'}, 404
	
	user_data = user_doc.to_dict()

	if user_data['password'] == password:
		return {'message': 'User logged in successfully'}, 200
	else:
		return {'error': 'Invalid password'}, 401

#Adicionar Pokemon
@app.route('/createPokemon', methods=['POST'])
def addPokemonToList():
	pokemon_data = request.json

	pokemonList = users_ref.document(pokemon_data['user']).collection('pokemonList')

	new_pokemon_ref = pokemonList.document()
	new_pokemon_ref.set({
		'pokemonID': pokemon_data['pokemonID'],
	})

	return {'message': 'Pokemon saved successfully'}, 201

#Retornar pokemon de um usuário
@app.route('/getPokemons', methods=['GET'])
def getUserPokemons():
	user_id = request.args.get('user_id')

	query = users_ref.document(user_id).collection('pokemonList').get()

	if query:
		user_data = [pokemon.to_dict() for pokemon in query]
		return user_data, 200
	else:
		return {'error': 'User not found'}, 404

#Mudar o nickname do Pokémon
@app.route('/renamePokemon', methods=['POST'])
def renamePokemon():
	pokemon_data = request.json

	pokemon_ref = users_ref.document(pokemon_data['user']).collection('pokemonList').document(pokemon_data['pokemonID'])

	if pokemon_ref.get().exists:
		pokemon_ref.update({
			'nickname': pokemon_data['nickname'],
		})
		return {'message': 'Nickname updated successfully'}, 200
	else:
		return {'error': 'Pokemon not found'}, 404


if __name__ == '__main__':
	app.run(debug=True)
