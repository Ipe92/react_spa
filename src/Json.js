import React, { Component } from "react";
import data from "./data.json";

const url = "https://wiki.guildwars2.com/wiki/";

class Json extends Component {
    render() {
        return (
            <div>
                <h2>JSON datan esittäminen sivulla</h2>
                {
                    data.Pets.map((pet, i) => {
                        let petAddr2 = pet.name.replace(/\s/g, '_');
                        return (
                            <div key={i}>
                                <div className="card">
                                    <h1>{pet.name}</h1>
                                    <img src={pet.icon} alt={pet.name} style={{ width: '60%' }}></img>
                                    <p className="price">{pet.description} </p>
                                    <p><button type="submit"> <a href={url + petAddr2} target="_blank" rel="noreferrer" />Go to Wiki</button> </p>
                                </div>
                            </div>
                        );
                    })
                };
            </div >
        );
    }
}

export default Json;