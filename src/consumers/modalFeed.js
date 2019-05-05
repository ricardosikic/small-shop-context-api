import React from 'react';
import { Contexto } from '../context/context';

export class ModalFeed extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return c.carroItem.map((u, i) => {
                        return(
                            <div key={i}>
                                <li style={{marginBottom: '20px'}} onClick={e => c.deleteItem(i, e)}>{u}<button ref={c.deleteButton} type="button" style={{float: 'right'}} className="btn btn-danger">Delete</button></li>
                            </div>
                        );
                    })
                }}
            </Contexto.Consumer>
            
        );
    }
}