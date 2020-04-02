import React from 'react';
import {IoIosSearch} from 'react-icons/io';

class SearchCountry extends React.Component{
    state={
        searchText:'',
    }
    
    onChangeSearchText = (text) => {
        const textTarget=text.target.value;
        this.setState({
            searchText:textTarget
        });
        this.props.filterCountriesBySearchText(textTarget);
    }
    
    render(){
        const {selectedTheme} = this.props;
        return(
            <div className={selectedTheme === "light" ? "boxing-light-mode" : "boxing-dark-mode"}>
            <div><IoIosSearch className="search-icon"/></div>
            <input onChange={this.onChangeSearchText} className={selectedTheme === "light" ? "country-search-input-light-mode" : "country-search-input-dark-mode"} type="text" placeholder="Search for a Country..."/>
            </div>
            );
    }
}

export default SearchCountry;