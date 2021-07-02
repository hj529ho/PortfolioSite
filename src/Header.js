import { Fragment } from "react";
import React from 'react';
import './body.css';
import './core.css';
class Header extends React.Component
{
  render()
  {
    return(
      <> 
        <nav className="HeaderLine">
        <div className="HeaderText"> Hojin's Portfolio </div>
        <div className="HeaderAlign">
            <div className="HeaderText"> 
                    <span>Home</span>
                    <span>About</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
            </div>
        </nav>
     </>
    );
  }
}
export default Header; 
