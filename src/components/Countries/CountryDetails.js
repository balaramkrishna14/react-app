import React from 'react';
import Header from './Header.js';
import {withRouter} from 'react-router-dom';
import {TiArrowLeft} from 'react-icons/ti';
                                                
class CountryDetails extends React.Component{
    constructor(props){
        super(props);
        this.countryDetail=this.props.location.state;
    }
    
    navigateBack = () => {
         this.props.history.goBack();
    }
   
    render(){
        const {selectedTheme,onChangeTheme}=this.props;
        //console.log(this.state.selectedCountryDetail);
        //let {selectedCountryDetail} = this.state;
        return(
            <div className={selectedTheme === "light" ? "country-details-button-light-mode" : "country-details-button-dark-mode"}>
            
            <Header selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>    
            
              <button type="button" onClick={this.navigateBack}><TiArrowLeft />&nbsp;Back</button>
              <div className="country-page">
                <img className="country-click-image" src={this.countryDetail.flag} alt="not found" />
              <div>
               <div className="country-details-page"><b>{this.countryDetail.name}</b></div>
                <div className="country-details-page-display">
                <div>
                <div className="country-details-page"><b>Native Name: </b>{this.countryDetail.nativeName}</div>
                <div className="country-details-page"><b>Population: </b>{this.countryDetail.population}</div>
                <div className="country-details-page"><b>Region: </b>{this.countryDetail.region}</div>
                <div className="country-details-page"><b>Sub Region: </b>{this.countryDetail.subregion}</div>
                <div className="country-details-page"><b>Capital: </b>{this.countryDetail.capital}</div>
                </div>
                <div>
                <div className="country-details-page"><b>Top Level Domain: </b>{this.countryDetail.topLevelDomain}</div>
                <div className="country-details-page"><b>Currencies: </b>{this.countryDetail.currencies[0].name}</div>
                <div className="country-details-page"><b>Languages: </b>{this.countryDetail.languages.map((item) => item.name).join(", ")}</div>
                </div>
                </div>
                <div className="country-details-page"><b>Border Countries: </b></div>
                <div className="country-details-page border-button">{this.countryDetail.borders.map((item,key) => <button key={item}>{item}</button>)}</div>
               </div>
              </div>
            </div>
            );
    }
}
           
export default withRouter (CountryDetails);