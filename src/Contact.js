import React, { useState } from 'react';

class Contact extends React.Component
{
render(){ 
    return (
        <div>
            <h1>Contact</h1>
            <input placeholder="회사명" />
            <input placeholder="메시지" />
            <button>전송</button>
            <div style={{display: "flex",background: "rgba(0, 0, 0, 1)",textAlign:'center',verticalAlign:'center', height:300,width:'100%',top:0}}>
                <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Email : hojin529ho@gmail.com </h3>
                <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> KakaoTalk : hj529ho </h3>
                <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Something: hj529ho </h3>
                <h3 style={{color:"#ccc",textAlign:"center",verticalAlign:"center",margin:"auto"}}> Anything: hj529ho </h3>
            </div>
        </div>
        
        );
    }
}
export default Contact;