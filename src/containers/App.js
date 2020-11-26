import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './app.css';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchvalue: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearch } = this.props;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (!robots.length) {
            return <h1 className='tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='tc f-5'>RoboFriends</h1>
                    <SearchBox change={onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filtered}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);