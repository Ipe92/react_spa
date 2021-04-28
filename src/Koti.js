import React, { Component } from "react";
import githubJpg from './resources/images/github.jpg'
import githubPng from './resources/images/github.png'
import githubSvg from './resources/images/github.ai'


class Koti extends Component {
    render() {
        return (
            <div>
                <h2>Moikka</h2>
                <p>Jpg kuva public kansiosta</p>
                <img class="sample-icon" src="/images/github.jpg" alt="github kissa" />
                <p>Jpg kuva importtattuna</p>
                <img class="sample-icon" src={githubJpg} alt="github kissa" />
                <p>PNG kuva importtattuna</p>
                <img class="sample-icon" src={githubPng} alt="github kissa" />
                <p>SVG kuva importtattuna</p>
                <img class="sample-icon" src={githubSvg} alt="github kissa" />

            </div>
        );
    }
}

export default Koti;