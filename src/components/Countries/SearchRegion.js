import React from 'react';

class SearchRegion extends React.Component{
   state={
       selectedRegion:'All',
   }
   
   onChangeSelectedRegion = (event) => {
       const textTarget = event.target.value;
       this.setState=({
           selectedRegion: textTarget
       });
       this.props.filterCountriesBySelectedRegion(textTarget);
   }
   
    render(){
        const {selectedTheme} = this.props;
       return(
           <div>
              <select onChange={this.onChangeSelectedRegion} className={selectedTheme === "light" ? "select-region-light-mode" : "select-region-dark-mode"}>
                <option>All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
           </div>
           );
   } 
}

export default SearchRegion;