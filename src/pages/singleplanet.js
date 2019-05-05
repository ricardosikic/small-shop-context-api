import React from 'react';

export class SinglePlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: []
        }
    }
    
    componentDidMount() {
        this.getSinglePlanet(this.props.match.params.i);
    }

    getSinglePlanet(i) {
        fetch('https://swapi.co/api/planets/' + i)
        .then(resp => {
            // ingreso al status de esta peticion
            console.log(resp.status);
            return resp.json();
        })
        .then(datos => {
            console.log('valor planeta: ', datos)
            this.setState({
                planet: datos
            })
        })
    }

    render() {
        return(
            <div>
                <h1>id: {this.props.match.params.i}</h1>
                <p>nombre planeta: {this.state.planet.name}</p>
            </div>
        );
    }
}