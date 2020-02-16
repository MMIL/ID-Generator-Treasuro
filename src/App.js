import React, {Component} from 'react';
import './App.css';
import Logo from './TICKET DESIGN.png';
import {URL} from './URL'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            ids:["xxxxxxxxxx","xxxxxxxxxx"]
        }
    }
    componentDidMount() {
        fetch(URL)
            .then(res=>res.json())
            .then(data => this.setState({
                ids: data
            }))
    }

    render() {
    return (
        <div className="App">
            {
                this.state.ids && this.state.ids.map(id =>
                    <div className="ticket">
                        <img className="header" src={Logo} />
                        <h1 className="id">{id.id*999999}</h1>
                    </div>
                )
            }
        </div>
    );
  }
}

export default App;
