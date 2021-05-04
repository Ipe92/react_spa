import React, { Component } from "react";
import styled from 'styled-components';
import githubJpg from './resources/images/github.jpg'
import githubPng from './resources/images/github.png'
import githubSvg, { ReactComponent as GithubSvgComponent } from './resources/images/github.svg'

const IconImg = styled.img`
    width: 64px;
    height: 64px;
`;

const SafeGithubLogo = styled.div`
    width: 64px;
    height: 64px;
    background-image: url(${githubPng});
    background-size: contain;
`;

const StyledGithubSvgComponent = styled(GithubSvgComponent)`
    width: 64px;
    height: 64px;
    &:hover path {
	fill: green;
}
`;

class Koti extends Component {
    render() {
        return (
            <div>
                <h2>Moikka</h2>
                <p>Jpg kuva public kansiosta</p>
                <IconImg src="/images/github.jpg" alt="github kissa" />
                <p>Jpg kuva importtattuna</p>
                <IconImg src={githubJpg} alt="github kissa" />
                <p>PNG kuva importtattuna</p>
                <IconImg src={githubPng} alt="github kissa" />
                <p>SVG kuva importtattuna</p>
                <IconImg src={githubSvg} alt="github kissa" />
                <p>SVG kuva importtattuna komponentiksi</p>
                <StyledGithubSvgComponent />
                <p>PNG taustana</p>
                <SafeGithubLogo />
            </div>
        );
    }
}

export default Koti;