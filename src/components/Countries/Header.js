import React from 'react';
//import {FaRegMoon} from 'react-icons/fa';

class Header extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        //console.log(selectedTheme);
        return(
            <div className={selectedTheme === "light" ? "countries-dashboard-nav-light-mode" :
                "countries-dashboard-nav-dark-mode"}>
                <div>Where in the World?</div>
                <button onClick={onChangeTheme}  className={selectedTheme === "light" ?
                "button-text-light-mode" : "button-text-dark-mode"}><FaRegMoon />
                <div>&nbsp;{ selectedTheme === "light" ? "Light Mode" : "Dark Mode"}</div>
                </button>
            </div>
            );
    }
}
//"button-text-light-mode" : "button-text-dark-mode"}><FaRegMoon />
export default Header;
