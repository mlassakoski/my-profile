import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import '../css/Skills.css';
import skills from '../utils/skills.json';
import pokemons from '../utils/pokemons.json';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pokemonActive: false,
            fixedShake: true
        };
    }

    componentDidMount() {
        const data = skills.concat(pokemons);

        this.setState({
            data: data
        })
    }

    removePokemons() {
        let data;
        const pokemonActive = this.state.pokemonActive

        if (pokemonActive) {
            data = skills.concat(pokemons);
        } else {
            data = skills;
        }

        this.setState({
            data: data,
            pokemonActive: !pokemonActive
        })
    }

    render() {
        return (
            <div className="panel-body">
                <a className="waves-effect waves-light btn" onClick={this.removePokemons.bind(this)}>Remove Pokémons</a>

                <TagCloud minSize={12}
                            maxSize={35}
                            tags={this.state.data}
                            onClick={tag => alert(`'${tag.value}' was selected!`)} />
            </div>
        );
    }
}

export default Skills;
