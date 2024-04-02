# **Mapeamento de Classes/Entidades**

Listagem de entidades no banco de dados e seus respectivos campos. Os nomes dos campos devem se manter atualizados para evitar conflitos no processo de desenvolvimento. 


## Pokemon

Todos os pokémon disponíveis como resposta da PokeAPI devem ser armazenados com os seguintes campos: 

- **name**
	> Nome do pokémon
	
- **pokedex**
	> Número na pokédex (id único)

- **type**

	>Tipos do pokémon

 - **abilities**

	>Habilidades do pokémon  

 - **stats**

	>Estatísticas do pokémon (Hp, Attack, Defense, Special-attack, Special-defense, Speed)

 - **moves**

	>Todos os movimentos que o Pokémon pode aprender e usar.

 - **sprite**

	>URL da imagem do pokémon (padrão/frente)

 - **shiny**

	>URL da imagem do pokémon shiny (padrão/frente)

## MyPokemon

Representa um pokémon que pertence a um usuário. Possui um apelido como campo para ser o nome escolhido pelo usuário.

 - **user**

	>Identificador do usuário a qual o pokémon pertence (referente a entidade User)

 - **pokemon**

	>Espécie do pokémon (referente a entidade Pokémon)

 - **nickname**

	>Apelido do pokemón
