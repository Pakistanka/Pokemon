import React, { Component } from 'react'
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'

import s from './PokemonList.module.css'

class pokemonsList extends Component {
    componentDidMount() {
        if (this.props.pokemons === null) {
            this.props.onInitPokemons();
        }
    }

    pokemonClickHandler = (url) => {
        this.props.onPokemonClicked(url)
        this.props.history.push('/details');
    }


    render() {
        let pokemonList = <div>Loading...</div>
        
        let search = this.props.search
        
        let displayPokemons = this.props.pokemons

        if (search){
            displayPokemons = this.props.pokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(search.toLowerCase());
            })
        }
       
        if (this.props.pokemons) {
            pokemonList = displayPokemons.map(pokemon => {
                return <div
                    className={s.pCard}
                    key={pokemon.name}
                    onClick={() => this.pokemonClickHandler(pokemon.url)}>
                    <div className={s.pName}>{pokemon.name}</div>
                </div>
            });
        }

        return (
            <div>
                <div className={s.wrapper}>
                    {pokemonList}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        search: state.search

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPokemons: () => dispatch(actionTypes.initPokemons()),
        onPokemonClicked: (url) => dispatch(actionTypes.initPokemonByUrl(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(pokemonsList)