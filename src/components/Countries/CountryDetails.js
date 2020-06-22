import React from 'react';
import Header from './Header.js';
import {withRouter} from 'react-router-dom';
//import {TiArrowLeft} from 'react-icons/ti';
                                                
class CountryDetails extends React.Component{
    state={
        countryDetail : this.props.history.location.state.country,
        countries : this.props.history.location.state.countries
    }
    
    navigateBack = () => {
         this.props.history.goBack();
    }
    
    handleOnClick = (countryDetails) => {
        //console.log(event);
        this.countryDetail=countryDetails;
        //console.log(countryDetails);
        //this.render();
    }
   
    render(){
        //console.log(this.props.history);
        const {countries,countryDetail} = this.state; 
        const {selectedTheme,onChangeTheme}=this.props;
        console.log(this.state);
        //console.log(this.state.selectedCountryDetail);
        //let {selectedCountryDetail} = this.state;
        //let borderCountries = countries.filter(eachCountry => countryDetail.borders.includes(eachCountry.alpha3Code));
        
        return(
            {/*<div className={selectedTheme === "light" ? "country-details-button-light-mode" : "country-details-button-dark-mode"}>
            
            <Header selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>    
            
              <button type="button" onClick={this.navigateBack}><TiArrowLeft />&nbsp;Back</button>
              <div className="country-page">
                <img className="country-click-image" src={countryDetail.flag} alt="not found" />
              <div>
               <div className="country-details-page"><b>{countryDetail.name}</b></div>
                <div className="country-details-page-display">
                <div>
                <div className="country-details-page"><b>Native Name: </b>{countryDetail.nativeName}</div>
                <div className="country-details-page"><b>Population: </b>{countryDetail.population}</div>
                <div className="country-details-page"><b>Region: </b>{countryDetail.region}</div>
                <div className="country-details-page"><b>Sub Region: </b>{countryDetail.subregion}</div>
                <div className="country-details-page"><b>Capital: </b>{countryDetail.capital}</div>
                </div>
                <div>
                <div className="country-details-page"><b>Top Level Domain: </b>{countryDetail.topLevelDomain}</div>
                <div className="country-details-page"><b>Currencies: </b>{countryDetail.currencies[0].name}</div>
                <div className="country-details-page"><b>Languages: </b>{countryDetail.languages.map((item) => item.name).join(", ")}</div>
                </div>
                </div>
                <div className="country-details-page"><b>Border Countries: </b></div>
                <div className="country-details-page border-button">{borderCountries.map((item,key) =>
                <button onClick={event => this.handleOnClick(item)} key={item}>{item}</button>)}</div>
               </div>
              </div>
            </div>*/}
            );
    }
}
//<div className="country-details-page border-button">{borderCountries.map((item,key) => <button onClick={event => this.handleOnClick(item)} key={item}>{item}</button>)}</div>
export default withRouter (CountryDetails);