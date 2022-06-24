import React, { Component} from 'react';
import Axios from 'axios';



export default class App extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        Axios.get('https://raw.githubusercontent.com/Agasta04/APIweb/main/Deskripsi.json')
        .then(res => {
            const movies = res.data.movies;
            this.setState({ movies });
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        })
    }

    render() {
        return ( 
            <ul class="text-black text-center ">
                {this.state.movies.map(movies => <li class="text-black text-center">{movies.title}</li>)}
            </ul>
        );
    }
}