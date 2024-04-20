#Arquivo para consulta do nome dos campos (manter os nomes dos atributos iguais aos usados no firebase)

class User:
    def __init__(self, id, login, password, pokemon=[], teams=[]):
        self.id = id
        self.login = login
        self.password = password
        self.pokemon = pokemon
        self.teams = teams

    def to_dict(self):
        return {
            'id': self.id,
            'login': self.login,
            'password': self.password,
            'pokemons': [pokemon.to_dict() for pokemon in self.pokemon],
            'teams': [team.to_dict() for team in self.teams]
        }

class Pokemon:
    def __init__(self, id, name, nickname, pokedex, user=None):
        self.id = id
        self.name = name
        self.nickname = nickname
        self.pokedex = pokedex
        self.user = user

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'nickname': self.nickname,
            'pokedex': self.pokedex,
            'user': self.user.to_dict() if self.user else None
        }

class Team:
    def __init__(self, id, nome, user=None, members=[]):
        self.id = id
        self.nome = nome
        self.user = user
        self.members = members

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'user': self.user.to_dict() if self.user else None,
            'members': [member.to_dict() for member in self.members]
        }