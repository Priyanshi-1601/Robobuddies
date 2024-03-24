import React, { Component } from "react";
import Cards from "../Components/Cards";
import SearchBox from '../Components/SearchBox';
import { robots } from "./robots";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value}) //It changes the search field everytime
                                                          //and it gets reflected in the filtered robots
        
    }
    //State in parent is passed as prop to child

    render() {
        const {robots} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !robots.length?
            <h1>Loading!</h1> :
            (
                <div className="tc">
                    <h1 className="f2">Robobuddies</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cards robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll> 
                </div>
            );
        
    }
}

export default App;