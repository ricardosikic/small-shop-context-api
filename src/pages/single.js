import React from 'react';

export class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    
    componentDidMount() {
        this.getSingleInfo(this.props.match.params.i);
    }


    getSingleInfo(i) {
        fetch('https://swapi.co/api/people/' + i)
        .then(resp => {
            console.log(resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('valor data: ', data);
            this.setState({
                user: data
            })
        })
    }


    render() {
        return(
            <div>
                <h1>id:{this.props.match.params.i}</h1>
                <p>nombre: {this.state.user.name}</p>
            </div>
        );
    }
}