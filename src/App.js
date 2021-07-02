import React from 'react';
import Header from "./Header";
import About from "./About";
import './body.css';
import Contact from "./Contact";
import Project from "./Project"
class App extends React.Component
{
  render()
  {
    return(
      <>
      <main>
        <Header/>
        <section className="image">
        <div className="darkimage">
          <div className="maintext">안녕하세요 개발자 정호진입니다.</div>
        </div>
        </section>
        <About/>
        <Project/>
        <Contact/>
      </main>
    </>
    );
  }
}
export default App; 
