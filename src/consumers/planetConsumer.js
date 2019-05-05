import React from 'react';
import { Contexto } from '../context/context';
import { Link } from 'react-router-dom';

export class PlanetConsumer extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return c.planetItem.map((item, i) => {
                        return(
                            <div className="card" key={i} style={{marginTop: '50px', display: 'inline-block', width: '300px', marginLeft: '20px', marginBottom: '20px'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Nombre: {item.name}</h5>
                                    <p className="card-text">Clima: {item.climate}</p>
                                    <a href="/" onClick={e => c.addItem(e, i)} className="btn btn-primary"><i className="fas fa-heart"></i></a>
                                    <button className="btn btn-success" style={{marginLeft: '10px'}}><Link to={'/singleplanet/' + (i + 1)}>ver mas</Link></button> 
                                </div>
                            </div>
                        );
                    })
                }}
            </Contexto.Consumer>
        );
    }
}