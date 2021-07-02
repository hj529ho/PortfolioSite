import React, { useState } from 'react';

class Project extends React.Component
{
render(){ 
    return (
        <div style={{display: "flex",background: "rgba(200,200,200, 1)",textAlign:'center',verticalAlign:'center', height:300,width:'100%',top:0}}>
            <h1>Project</h1>
            <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Unty3D </h3>
            <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Python/Django </h3>
            <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> React </h3>
            <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Somthing </h3>
        </div> 
        );
    }
}
export default Project;