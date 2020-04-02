import React from 'react';

import SearchCountry from './SearchCountry.js';
import SearchRegion from './SearchRegion.js';

class CountriesFilterBar extends React.Component{
   render(){
       const {selectedTheme} = this.props;
       return(
           <form className="searching-body">
            <SearchCountry filterCountriesBySearchText={this.props.filterCountriesBySearchText} selectedTheme={selectedTheme}/>                    
            <SearchRegion filterCountriesBySelectedRegion={this.props.filterCountriesBySelectedRegion} selectedTheme={selectedTheme}/>
           </form>
           );
   } 
}

export default CountriesFilterBar;