/*global fetch*/
import React from 'react'
import Header from './Header.js'
import CountriesFilterBar from './CountriesFilterBar.js'
import Countries from './Countries.js'

class CountriesDashBoardApp extends React.Component {
   state = {
      countries: [],
      selectedCountries: [],
      region: 'All'
   }

   componentDidMount = () => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(response => response.json())
         .then(findresponse => {
            this.getCountries(findresponse)
         })
   }

   getCountries = event => {
      this.setState({
         countries: event,
         selectedCountries: event
      })
   }

   filterCountriesBySelectedRegion = selectedRegion => {
      //console.log(selectedRegion);
      const { countries } = this.state
      if (selectedRegion === 'All') {
         this.setState({
            selectedCountries: countries,
            region: 'All'
         })
      } else {
         let filterSelectedRegionOption = countries.filter(eachCountry => {
            return eachCountry.region.search(selectedRegion) !== -1
         })
         this.setState({
            selectedCountries: filterSelectedRegionOption,
            region: selectedRegion
         })
      }
   }

   filterCountriesBySearchText = searchText => {
      //console.log(searchText);
      const { countries } = this.state
      searchText = searchText.toLowerCase()
      if (this.state.region === 'All') {
         let selectedCountryByName = countries.filter(eachCountry => {
            return eachCountry.name.toLowerCase().search(searchText) !== -1
         })
         this.setState({
            selectedCountries: selectedCountryByName
         })
      } else {
         let selectedCountryByName = countries.filter(eachCountry => {
            return (
               eachCountry.name.toLowerCase().search(searchText) !== -1 &&
               eachCountry.region === this.state.region
            )
         })
         this.setState({
            selectedCountries: selectedCountryByName
         })
      }
   }

   render() {
      const { selectedCountries } = this.state
      const { selectedTheme, onChangeTheme } = this.props
      //console.log(countries);
      return (
         <div
            className={
               selectedTheme === 'light'
                  ? 'countries-dashboard-body-light-mode'
                  : 'countries-dashboard-body-dark-mode'
            }
         >
            <Header
               selectedTheme={selectedTheme}
               onChangeTheme={onChangeTheme}
            />
            <div>
               <CountriesFilterBar
                  filterCountriesBySearchText={this.filterCountriesBySearchText}
                  filterCountriesBySelectedRegion={
                     this.filterCountriesBySelectedRegion
                  }
                  selectedTheme={selectedTheme}
               />
               <Countries
                  countries={selectedCountries}
                  selectedTheme={selectedTheme}
               />
            </div>
         </div>
      )
   }
}

export default CountriesDashBoardApp
