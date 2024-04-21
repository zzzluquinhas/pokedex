import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
users_ref = db.collection('users')

def createNewUser(user_data):

	query = users_ref.document(user_data['login']).get()

	if query:
		return {'error': 'User already exists'}, 400
	
	new_user_ref = users_ref.document(user_data['login'])
	new_user_ref.set({
		'password': user_data['password'],
	})

	return {'message': 'User created successfully'}, 201

def checkUserCredentials(login, password):

	user_doc = users_ref.document(login).get()
	
	if not user_doc.exists:
		return {'error': 'User not found'}, 404
	
	user_data = user_doc.to_dict()

	if user_data['password'] == password:
		return {'message': 'User logged in successfully'}, 200
	else:
		return {'error': 'Invalid password'}, 401

	
def addPokemonToList(pokemon_data):
	pokemonList = users_ref.document(pokemon_data['user']).collection('pokemonList')

	new_pokemon_ref = pokemonList.document(pokemon_data['pokemonID'])
	new_pokemon_ref.set({
		'pokemonID': int(pokemon_data['pokemonID']),
	})

	return {'message': 'Pokemon saved successfully'}, 201

def getUserPokemons(login):
	query = users_ref.document(login).collection('pokemonList').get()

	if query:
		user_data = [pokemon.to_dict() for pokemon in query]
		return user_data, 200
	else:
		return {'error': 'User not found'}, 404
	
def renamePokemon(pokemon_data):
	pokemon_ref = users_ref.document(pokemon_data['user']).collection('pokemonList').document(pokemon_data['pokemonID'])

	if pokemon_ref.get().exists:
		pokemon_ref.update({
			'nickname': pokemon_data['nickname'],
		})
		return {'message': 'Nickname updated successfully'}, 200
	else:
		return {'error': 'Pokemon not found'}, 404
	
def menu():
	print('1 - Sign Up')
	print('2 - Login')
	print('3 - Add Pokemon')
	print('4 - Get Pokemon')
	print('5 - Update Nickname')
	print('6 - Exit')

	input_option = input('Choose an option: ')

	if input_option == '1':
		login = input('Login: ')
		password = input('Password: ')
		log = createNewUser({'login': login, 'password': password})
	elif input_option == '2':
		login = input('Login: ')
		password = input('Password: ')
		log = checkUserCredentials(login, password)
	elif input_option == '3':
		pokemonID = input('PokemonID: ')
		user = input('User: ')
		log = addPokemonToList({'pokemonID': pokemonID, 'user': user})
	elif input_option == '4':
		login = input('Login: ')
		log = getUserPokemons(login)
	elif input_option == '5':
		pokemonID = input('PokemonID: ')
		user = input('User: ')
		nickname = input('Nickname: ')
		log = renamePokemon({'pokemonID': pokemonID, 'user': user, 'nickname': nickname})
	elif input_option == '6':
		return
	
	print(log)
	
	menu()

menu()