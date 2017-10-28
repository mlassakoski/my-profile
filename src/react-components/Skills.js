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
            selfSkills: [
                {
                    "Communication": 70,
                    "Flexibillity": 72,
                    "Self-taught": 97,
                    "Intrapreneurship": 85,
                    "Creativity": 78,
                    "Team Work": 92,
                    "Self motivation": 73
                }
            ],
            professionalSkills: [
                {
                    "Java": 90,
                    "TDD": 75,
                    "Typescript": 87,
                    "Database": 60,
                    "Scrum": 90,
                    "Linux": 40
                }
            ],
            chartOptions: {
                width: 200,
                height: 200,
                margin: { top: 20, left: 20, right: 20, bottom: 20 },
                r: 85,
                max: 150,
                fill: "#2bbbad",
                stroke: "#2bbbad",
                label: {
                    fontFamily: 'Arial',
                    fontSize: 14,
                    fontWeight: true,
                    fill: '#fff'
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
                    <div className="col s12 m6 radar-chart-box">
                        <Radar data={this.state.selfSkills} options={this.state.chartOptions} />
                    </div>

                    <div className="col s12 m6 radar-chart-box">
                        <Radar data={this.state.professionalSkills} options={this.state.chartOptions} />
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
