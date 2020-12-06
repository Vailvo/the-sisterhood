import React from 'react';
import './styles.scss';
import sisterhoodLogo from "./../../assets/sisterhoodLogo.png"; 

const Header = props => {
    return (
        <header className = "header">
            <div className = "wrap">
                <div className = "logo">
                    <img src = {sisterhoodLogo} alt = "sisterhood Logo"/> 
                </div>

            </div>
        </header>
    );

};


export default Header; 