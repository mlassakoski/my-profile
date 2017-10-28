import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import '../css/Skills.css';
import skills from '../utils/skills.json';
import pokemons from '../utils/pokemons.json';
import { Radar } from 'react-pathjs-chart';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pokemonActive: false,
            fixedShake: true,
            radarData: [
                {
                    "Study": 83,
                    "Sleep": 65,
                    "Code": 87,
                    "Flexibility": 68,
                    "Agility": 80,
                    "endurance": 29
                }
            ],
            chartOptions: {
                width: 300,
                height: 300,
                margin: { top: 20, left: 20, right: 20, bottom: 20 },
                r: 150,
                max: 150,
                fill: "#2980B9",
                stroke: "#2980B9",
                animate: {
                    type: 'oneByOne',
                    duration: 200
                },
                label: {
                    fontFamily: 'Arial',
                    fontSize: 14,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
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
                {/* <a className="waves-effect waves-light btn" onClick={this.removePokemons.bind(this)}>Remove Pokémons</a> */}

                <div className="row">
                    <div className="col s6 radar-chart-box">
                        <Radar data={this.state.radarData} options={this.state.chartOptions} />
                    </div>

                    <div className="col s6 radar-chart-box">
                        <Radar data={this.state.radarData} options={this.state.chartOptions} />
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <TagCloud minSize={12}
                            maxSize={35}
                            tags={this.state.data}
                            onClick={tag => alert(`'${tag.value}' was selected!`)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
