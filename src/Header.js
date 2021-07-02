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
        <div style={{background: "rgba(0, 0, 0, 0.8)",position:"fixed",borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px', height:60,width:'100%',top:0,zIndex:1000}}>
            <div className="HeaderText"> Home </div>
            <div className="HeaderText"> About me </div>
            <div className="HeaderText"> Project </div>
            <div className="HeaderText"> Contact </div>
        </div>
     </>
    );
  }
}
export default Header; 
