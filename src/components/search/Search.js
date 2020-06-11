import React, { Component } from 'react'

import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'

import s from './Search.module.css'


class search extends Component {

    searchHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/')
        this.props.onInitSearchPokemon(this.props.searchText);
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push('/')
            this.props.onInitSearchPokemon(this.props.searchText);
        }
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.No}>
                    <input
                        className={s.input}
                        placeholder="Filter by name..." type="text"
                        value={this.props.searchText}
                        onChange={this.props.newSearch}
                        onKeyDown={this._handleKeyDown} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        searchText: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newSearch: (e) => {
            dispatch({ type: actionTypes.SEARCH_BY_VALUE, text: e.target.value })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(search)