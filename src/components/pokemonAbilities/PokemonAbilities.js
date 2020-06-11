import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './PokemonAbilities.module.css'
import * as actionTypes from '../../store/actions'


class pokemonAbilities extends Component {

    backClickhandler = () => {
        this.props.GoToDetailsHandler()
        this.props.history.push('/details');
    }

    render() {
        let aDetails = ''
        if (this.props.aDetails) {
            aDetails = (this.props.aDetails).slice(1).map(aDetail => (
                <div className={s.pTypes} key={aDetail.effect}>{aDetail.effect}</div>
            ))
        }

        return (
            <div className={s.ability_wrapper}>
                <button className={s.ability_button} onClick={this.backClickhandler}>Back</button>
                <div className={s.ability_name}>{this.props.aName}</div>
                <div className={s.ability_details}>{aDetails}</div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        aName: state.abilityDetails.name,
        aDetails: state.abilityDetails.effect_entries
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        GoToDetailsHandler: () => dispatch({ type: actionTypes.GO_TO_DETAILS_BACK })
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(pokemonAbilities)
