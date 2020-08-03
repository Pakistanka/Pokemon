import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import s from './PokemonDetails.module.css'

class pokemonDetails extends Component {

    abilityClickHandler = (url) => {
        this.props.onAbilityClicked(url)
        this.props.history.push('/ability')
    }
    backClickhandler = () => {
        this.props.GoToListHandler()
        this.props.history.push('/');
    }


    render() {
        let pTypes = ''
        let pAbilities = ''
        let pName = null
        let pokemonImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.pId}.png`
        if (this.props.pName) {
            pName = <div className={s.pName}>{this.props.pName}</div>
        }
        if (this.props.pType) {
            pTypes = (this.props.pType).map(pType => (
                <div className={s.pTypes} key={pType.type.name}>{pType.type.name}</div>
            ))
        }
        if (this.props.pAbilities) {
            pAbilities = (this.props.pAbilities).map(pAbility => (
                <ul className={s.pTypes +' '+s.pAbilities} 
                    key={pAbility.ability.name}
                    onClick={() => this.abilityClickHandler(pAbility.ability.url)}>
                        {pAbility.ability.name}</ul>
            ))
        }


        return (
            <div>
                <div className={s.wrapper}>
                    <button onClick={this.backClickhandler} className={s.button}>Back</button>
                    <h3>{pName}</h3>
                    <img className={s.pokeImg} src={pokemonImageUrl} alt="PokeImg" />
                    <div className={s.types_wrapper}><span className={s.types_title}>Types:</span> {pTypes}</div>
                    <div>Weight: {this.props.pWeight} kg</div>
                    <div>Height: {this.props.pHeight} ft</div>
                    <div>Experience: {this.props.pExperience}</div>
                    <div className={s.types_wrapper}><span className={s.types_title}>Abilities:</span> {pAbilities}</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        pName: state.pokemonDetails.name,
        pWeight: state.pokemonDetails.weight,
        pHeight: state.pokemonDetails.height,
        pExperience: state.pokemonDetails.base_experience,
        pType: state.pokemonDetails.types,
        pAbilities: state.pokemonDetails.abilities,
        pId: state.pokemonDetails.id

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAbilityClicked: (url) => dispatch(actionTypes.initAbilityByUrl(url)),
        GoToListHandler: () => dispatch({ type: actionTypes.GO_TO_LIST_BACK })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(pokemonDetails)
