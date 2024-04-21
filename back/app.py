from flask import Flask, request, jsonify
import firebase_admin
from classes import User, Pokemon
from firebase_admin import credentials, firestore

app = Flask(__name__)

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
usersReference = db.collection('users')

#Criar usuário
@app.route('/createUser', methods=['POST'])
def createNewUser():
	userData = request.json

	query = usersReference.document(userData['login']).get()

	if query.exists:
		return {'error': 'User already exists'}, 400
	
	newUserReference = usersReference.document(userData['login'])
	newUserReference.set({
		'password': userData['password'],
	})

	return {'message': 'User created successfully'}, 201

#Retornar usuário
@app.route('/getUser', methods=['GET'])
def checkUserCredentials():
	login = request.args.get('login')
	password = request.args.get('password')

	userDoc = usersReference.document(login).get()
	
	if not userDoc.exists:
		return {'error': 'User not found'}, 404
	
	userData = userDoc.to_dict()

	if userData['password'] == password:
		return {'message': 'User logged in successfully'}, 200
	else:
		return {'error': 'Invalid password'}, 401

#Adicionar Pokemon
@app.route('/createPokemon', methods=['POST'])
def addPokemonToList():
	pokemonData = request.json

	pokemonList = usersReference.document(pokemonData['user']).collection('pokemonList')

	newPokemonReference = pokemonList.document()
	newPokemonReference.set({
		'pokemonID': pokemonData['pokemonID'],
	})

	return {'message': 'Pokemon saved successfully'}, 201

#Retornar pokemon de um usuário
@app.route('/getPokemons', methods=['GET'])
def getUserPokemons():
	userId = request.args.get('userId')

	query = usersReference.document(userId).collection('pokemonList').get()

	if query:
		userData = [pokemon.to_dict() for pokemon in query]
		return userData, 200
	else:
		return {'error': 'User not found'}, 404

#Mudar o nickname do Pokémon
@app.route('/renamePokemon', methods=['POST'])
def renamePokemon():
	pokemonData = request.json

	pokemonReference = usersReference.document(pokemonData['user']).collection('pokemonList').document(pokemonData['pokemonID'])

	if pokemonReference.get().exists:
		pokemonReference.update({
			'nickname': pokemonData['nickname'],
		})
		return {'message': 'Nickname updated successfully'}, 200
	else:
		return {'error': 'Pokemon not found'}, 404


if __name__ == '__main__':
	app.run(debug=True)
