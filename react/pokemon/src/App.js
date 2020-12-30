import Pagination from './Pagination';
import PokemonList from './PokemonList';
import {useState, useEffect, useRef} from 'react';
function App() {
  const loaderRef = useRef('');
  const poksRef = useRef('');
  const [pokemons, setPokemons] = useState([])
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const xhr = new XMLHttpRequest();
  
  useEffect(()=>{
    xhr.open('GET', currentUrl)
    xhr.onload = ()=>{
      const response = JSON.parse(xhr.response)
      setPokemons(response.results)
      setNextUrl(response.next)
      setPrevUrl(response.previous)
      loaderRef.current.setAttribute('hidden', '')
      poksRef.current.removeAttribute('hidden')
    }
    xhr.abort()
    xhr.send()
    poksRef.current.setAttribute('hidden', '')
    loaderRef.current.removeAttribute("hidden")
  }, [currentUrl])

  return (
    <>
    <div ref={loaderRef}>LOADING...</div>
    <PokemonList poksRef={poksRef} pokemons={pokemons}/>
    <Pagination onPreviousClick={()=>setCurrentUrl(prevUrl ? prevUrl:currentUrl)} onNextClick={()=>setCurrentUrl(nextUrl?nextUrl:currentUrl)}/>
    </>
  );
}

export default App;
