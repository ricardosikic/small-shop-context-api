import React from 'react';
import { Contexto } from '../context/context';
import { ModalFeed } from './modalFeed';

export class CarritoConsumer extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return (
                    <div>
                        <i className="fas fa-cart-arrow-down" onClick={e => c.openModal(e)} style={{marginLeft: '0px'}}>{c.carroItem.length}</i>

                            <div className="modal" ref={c.modal} tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Favoritos</h5>
                                        <button type="button" className="close" ref={c.closeButton} onClick={e => c.closeModal(e)} data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                      <ol>
                                        <ModalFeed />
                                      </ol> 
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    );
                }}
            </Contexto.Consumer>
        );
    }
}