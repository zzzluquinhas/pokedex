#Arquivo para consulta do nome dos campos (manter os nomes dos atributos iguais aos usados no firebase)

class User:
    def __init__(self, login, password, pokemonList=[]):
        self.login = login
        self.password = password
        self.pokemonList = pokemonList

class Pokemon:
    def __init__(self, pokemonID, nickname):
        self.pokemonID = pokemonID
        self.nickname = nickname