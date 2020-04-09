import React from 'react';
import {withRouter} from 'react-router-dom';
//import {CountryDetails} from './CountryDetails.js';
 
class CountryCard extends React.Component{
    
    navigateToCountryDetailsPage = () =>{
      const {history,countries}=this.props;
      const {countryDetail} = this.props;
     // console.log(countries,countryDetail);
      history.push({
          state:{country:countryDetail,countries},
          pathname:`/country-dashboard-app/details/${countryDetail.alpha3Code}`
      });   
    }

    render(){
        const {countryDetail} = this.props;
        const {selectedTheme} = this.props;
        return(
            
            <div className={selectedTheme === "light" ? "country-card-light-mode" : "country-card-dark-mode"} onClick={this.navigateToCountryDetailsPage}>
                <img className="flag-img" src={countryDetail.flag} alt="not found" />
                <div>
                <div className="country-detail-name"><b>{countryDetail.name}</b></div>
                <div className="country-detail"><b>Population: </b>{countryDetail.population}</div>
                <div className="country-detail"><b>Region: </b>{countryDetail.region}</div>
                <div className="country-detail"><b>Capital: </b>{countryDetail.capital}</div>
                </div>
            </div>
            );    
    }
}

export default withRouter (CountryCard);