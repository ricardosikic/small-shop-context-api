import React from 'react';

export const Contexto = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          // accedo al elemento
          modal: React.createRef(),
          closeButton: React.createRef(),
          addButton: React.createRef(),
          // arrays
          listItem: [],
          carroItem: [],
          planetItem: [],
          //eventos
          openModal: this.openModal,
          closeModal: this.closeModal,
          addItem: this.addItem,
          addPlanet: this.addPlanet,
          deleteItem: this.deleteItem
      }
  }
  
  componentDidMount() {
      this.getInfo();
      this.getPlanet();
  }

  getInfo = () => {
      fetch('https://swapi.co/api/people/')
      .then(resp => {
          console.log(resp.status);
          return resp.json();
      })
      .then(data => {
          console.log('valor data: ', data);
          this.setState({
              listItem: data.results
          })
      })
  }

  getPlanet = () => {
    fetch('https://swapi.co/api/planets/')
    .then(resp => {
        console.log(resp.status);
        return resp.json();
    })
    .then(data => {
        console.log('valor data planeta: ', data);
        this.setState({
            planetItem: data.results
        })
    })
  }

  openModal = (e) => {
      e.preventDefault();
      const modal = this.state.modal.current;
      modal.style.display = 'block';
  }

  closeModal = (e) => {
      e.preventDefault();
      const closeButton = this.state.closeButton.current;
      const modal = this.state.modal.current;

      if(closeButton.className === 'close') {
          modal.style.display = 'none';
      }
  }

  addItem = (e, i) =>{
      e.preventDefault();
      const elemento = this.state.listItem[i];
      this.setState({
        carroItem: this.state.carroItem.concat(elemento.name)
      })
  }
  addPlanet = (e, i) =>{
    e.preventDefault();
    const planeta = this.state.planetItem[i];
    this.setState({
      carroItem: this.state.carroItem.concat(planeta.name)
    })
  }


  deleteItem = (i, e) => {
      e.preventDefault();

      const itemDel = this.state.carroItem;
      itemDel.splice(i, 1);
      this.setState({
        itemDel
      })
      if(this.state.carroItem.length === 1) {
          alert('Estas seguro de eliminar el producto?');
      }
  }


  render() {
      return(
        <Contexto.Provider value={this.state}>
         {this.props.children}
        </Contexto.Provider>
      );
  }
  
}