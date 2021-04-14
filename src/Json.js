import React, { Component } from "react";
import data from "./data.json";


class Json extends Component {
    render() {
        return (
            <div>
                <h2>JSON datan esittäminen sivulla</h2>
                {
                    data.Pets.map((pet, i) => {
                        return (
                            <div key={i}>
                                <div className="card">
                                    <h1>{pet.name}</h1>
                                    <img src={pet.icon} alt={pet.name} style={{ width: '60%' }}></img>
                                    <p className="price">{pet.description} </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Json;