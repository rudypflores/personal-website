import React from 'react';
import './repository.css';
import './stackrecette.css';
import StackRecetteIcon from '../../images/stackrecette.jpg'


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
            </React.Fragment> 
        );
    }
}

export class ProjectPrototype extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Project Prototype</p>
            </React.Fragment> 
        );
    }
}

export class Transposer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Transposer</p>
            </React.Fragment> 
        );
    }
}