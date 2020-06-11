import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PList from './components/pokemonList/PokemonsList'
import PDetails from './components/pokemonDetails/PokemonDetails'
import PAbility from './components/pokemonAbilities/PokemonAbilities'
import Search from './components/search/Search'



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Search} />
        <Route exact path='/' component={PList} />
        <Route exact path='/details' component={PDetails} />
        <Route exact path='/ability' component={PAbility} />
        <Redirect to='/' />
      </div>
    );
  }
}

export default App;
