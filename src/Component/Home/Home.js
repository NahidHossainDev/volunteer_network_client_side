import React, { useContext } from 'react';
import { Container } from "@material-ui/core";
import { ContextElement } from '../../App';
import ShowEvents from './ShowEvents';


const Home = () => {
  const [nav, setNav] = useContext(ContextElement);
  setNav(true);
  
    return (
      <div className="home">
        <Container maxWidth="lg" className="homeContainer">
            <h1>I grow by helping people in need.</h1>
            <div className="searchCont">
              <input type="text" placeholder="Search here"/>
              <button className="srcBtn">Search</button>
          </div>
          <ShowEvents/>
        </Container>
      </div>
    );
};

export default Home;