import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokeArray: [],
    search: ""
  }
  
  
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokeArray: pokemons}))
  }


  changeHandler = (searchString) => {
    this.setState({search: searchString})
    this.filterPokemon
  }

  filterPokemon = () => {
    return this.state.pokeArray.filter(poke => poke.name.toLowerCase().includes(this.state.search))
  }
  
  render() {
    console.log("state", this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search changeHandler={this.changeHandler}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
