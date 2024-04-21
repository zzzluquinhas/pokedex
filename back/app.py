from flask import Flask, request, jsonify
import firebase_admin
from classes import User, Pokemon
from firebase_admin import credentials, firestore

app = Flask(__name__)

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
users_ref = db.collection('users')
pokemon_ref = db.collection('pokemon')

#Criar usuário
@app.route('/createUser', methods=['POST'])
def create_user():
    user_data = request.json

    query = users_ref.where('login', '==', user_data['login']).limit(1).get()

    if query:
        return jsonify({'error': 'User already exists'}), 400   #TODO user versus password error
    
    new_user_ref = users_ref.document()
    new_user_ref.set({
        'login': user_data['login'],
        'password': user_data['password'],
    })

    return jsonify({'message': 'User created successfully'}), 201

#Retornar usuário
@app.route('/getUser', methods=['GET'])
def get_user():
    login = request.args.get('login')
    password = request.args.get('password')

    query = users_ref.where('login', '==', login).where('password', '==', password).limit(1).get()

    if query:
        user_data = query[0].to_dict()
        return jsonify(user_data), 200
    else:
        return jsonify({'error': 'User not found'}), 404

#Adicionar Pokemon
@app.route('/createPokemon', methods=['POST'])
def create_pokemon():
    pokemon_data = request.json

    new_pokemon_ref = pokemon_ref.document()
    new_pokemon_ref.set({   #TODO verificar se usuário existe e está logado
        'user': pokemon_data['user'],   # usuário deve estar logado (e com token válido?)
        'pokemonNumber': pokemon_data['pokemonNumber'],
        'name': pokemon_data['name'],
        'nickname': pokemon_data['nickname'],
    })

    return jsonify({'message': 'Pokemon saved successfully'}), 201

#Retornar pokemon de um usuário
@app.route('/getPokemons', methods=['GET'])
def get_user_pokemon():
    user_id = request.args.get('user_id')

    query = pokemon_ref.where('user', '==', user_id).get()

    pokemon_list = []

    for pokemon in query:
        pokemon_data = pokemon.to_dict()
        pokemon_list.append(pokemon_data)

    return jsonify(pokemon_list), 200

if __name__ == '__main__':
    app.run(debug=True)
