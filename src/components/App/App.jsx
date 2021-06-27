import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: "What's the name?",
            expandedHeader: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            expandedHeader: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} expandedHeader={this.state.expandedHeader} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;