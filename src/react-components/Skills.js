import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import '../css/Skills.css';
import skills from '../utils/skills.json';
import pokemons from '../utils/pokemons.json';

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 10;

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

                <WordCloud
                    data={this.state.data}
                    fontSizeMapper={fontSizeMapper}
                    rotate={rotate}
                    padding={10}
                />
            </div>
        );
    }
}

export default Skills;