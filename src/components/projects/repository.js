import React from 'react';
import './repository.css';
import './stackrecette.css';
import StackRecetteIcon from '../../images/stackrecette.jpg';
import MaterialPokedexIcon from '../../images/materialpokedex.png';
import ProjectPrototypeIcon from '../../images/projectprototype.png';
import TranposerIcon from '../../images/transposer.png';

export class StackRecette extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">StackRecette</p>
                <img src={StackRecetteIcon} alt="app sample" className="sr-sample"/>
                <p className="sr-description">
                Android/IOS application with the purpose of giving people the fastest and easiest
                way to find a recipe from the user's ingredients.
                </p>

                <p className="projects-subtitle">Built With</p>
                <ul className="tech">
                    <li>Java</li>
                    <li>Android Studio</li>
                    <li>Swift</li>
                    <li>XCode</li>
                </ul>
                <a href="https://www.github.com/rudypflores/StackRecette" target="_blank" rel="noopener noreferrer" className="sr-link">
                    Find out more!
                </a>
            </React.Fragment> 
        );
    }
}

export class MaterialPokedex extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Material Pokédex</p>
                <img src={MaterialPokedexIcon} alt="app sample" className="sr-sample"/>
                <p className="sr-description">
                A web application that simulates the Pokédex from the popular
                Pokémon series through the use of the PokéAPI.
                </p>
                <p className="projects-subtitle">Built With</p>
                <ul className="tech">
                    <li>Material Design</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                </ul>
                <a href="https://github.com/rudypflores/MaterialPokedex" target="_blank" rel="noopener noreferrer" className="sr-link">
                    Find out more!
                </a>
            </React.Fragment> 
        );
    }
}

export class ProjectPrototype extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Project Prototype</p>
                <img src={ProjectPrototypeIcon} alt="app sample" className="sr-sample"/>
                <p className="sr-description">
                An ongoing turn-based RPG project based on the famous 
                JRPG named "Persona" from Atlus.
                </p>
                <p className="projects-subtitle">Built With</p>
                <ul className="tech">
                    <li>GameMaker Studio 1.4</li>
                    <li>Game Maker Language (GML)</li>
                    <li>Aseprite</li>
                </ul>
                <a href="https://github.com/rudypflores/MaterialPokedex" target="_blank" rel="noopener noreferrer" className="sr-link">
                    Find out more!
                </a>
            </React.Fragment> 
        );
    }
}

export class Transposer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Transposer</p>
                <img src={TranposerIcon} alt="app sample" className="sr-sample"/>
                <p className="sr-description">
                A minimalistic transposer console application that transposes 
                major and minor musical chords!
                </p>
                <p className="projects-subtitle">Built With</p>
                <ul className="tech">
                    <li>Java</li>
                </ul>
                <a href="https://github.com/rudypflores/Tranposer" target="_blank" rel="noopener noreferrer" className="sr-link">
                    Find out more!
                </a>
            </React.Fragment> 
        );
    }
}