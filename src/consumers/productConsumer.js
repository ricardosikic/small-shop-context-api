import React from 'react';
import { Contexto } from '../context/context';

export class ProductConsumer extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return c.listItem.map((item, i) => {
                        return(
                            <div className="card" key={i} style={{marginTop: '50px', display: 'inline-block', width: '300px', marginLeft: '20px', marginBottom: '20px'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Nombre: {item.name}</h5>
                                    <p className="card-text">Color de ojos: {item.eye_color}</p>
                                    <a href="/" onClick={e => c.addItem(e, i)} className="btn btn-primary"><i className="fas fa-heart"></i></a>
                                    <button className="btn btn-success" style={{marginLeft: '10px'}}>ver mas</button> 
                                </div>
                            </div>
                        );
                    })
                }}
            </Contexto.Consumer>
        );
    }
}