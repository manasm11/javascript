export default function PokemonList({pokemons, poksRef}){
    return(
        <div ref={poksRef}>
        {pokemons.map(pokemon => <div key={pokemon.name}>{pokemon.name}</div>)}
        </div>
    )

}