import React, { Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Productos } from '../pages/productos';
import { Contact } from '../pages/contact';
import { SinglePage } from '../pages/single';
import { SinglePlanet } from '../pages/singleplanet';
import { CarritoConsumer } from '../consumers/carritoConsumer';

export const NavBar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/home' className="navbar-brand">AppStarwars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/productos' className="nav-link">Productos <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contacto' className="nav-link">Contacto</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href='/'><CarritoConsumer /></a>
                    </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path='/productos' component= {Productos} />
                <Route exact path='/productos' component= {Productos} />
                <Route exact path='/single/:i' component= {SinglePage} />
                <Route exact path='/singleplanet/:i' component= {SinglePlanet} />
                <Route exact path='/contacto' component= {Contact} />
            </Switch>
        </Fragment>
    );
}