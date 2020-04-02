import React from 'react';
import CountryCard from './CountryCard.js';   
import Loading from './Loading.js';
class Countries extends React.Component{

    renderCountries = () => {
        const {countries} = this.props;
        const {selectedTheme} = this.props;
        return countries.map((eachCountry) => 
        <CountryCard countryDetail={eachCountry} key={eachCountry.name} selectedTheme={selectedTheme}/>);
    }
    
    render(){
        const {countries} = this.props;
        return(
            <div className="countries">
            {
               (countries.length===0) && 
               <Loading />
            }
               {this.renderCountries()} 
            </div>
            );
    }
    
}

export default Countries;