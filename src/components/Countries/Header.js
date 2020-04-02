import React from 'react';
import {FaRegMoon} from 'react-icons/fa';

class Header extends React.Component{
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        console.log(selectedTheme);
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

export default Header;
//export default withRouter (Header);

/*state={
           selectedTheme:'lightMode',
           innerText:'Light Mode',
           className:'countries-dashboard-nav-light-mode',
           appbodyclassname:'countries-dashboard-body-light-mode'
        };
    
    onChangeTheme = () => {
        if(this.state.selectedTheme === 'lightMode'){
            this.setState({
            selectedTheme:'darkmode',
            innerText:'Dark Mode',
            className:'countries-dashboard-nav-dark-mode',
            appbodyclassname:'countries-dashboard-body-dark-mode'
            });    
        }
        else{
            this.setState({
            selectedTheme:'lightmode',
            innerText:'Light Mode',
            className:'countries-dashboard-nav-light-mode',
            appbodyclassname:'countries-dashboard-body-light-mode'
            });
        }
    }*/