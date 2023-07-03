import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './style.js';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Button from './components/Button.jsx';
import Stats from './components/Stats.jsx';
import Test from './components/Test.jsx';
import Foot from './components/Foot.jsx';
import Signin from './Pages/Signin.jsx';
import SocialProof from './components/SocialProof.jsx';

const App = () => {
  return (
   
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
           
            
          </div>
        </div>

        <Route path="/" exact component={Hero} />
        

        <div className={`bg-secondary ${styles.flexStart}`} id="stats-bg">
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <SocialProof/>
            

          </div>
        </div>
        <div className={`bg-secondary ${styles.flexStart}`} id="test-bg">
          <div className={`${styles.boxWidth}`}>
            <Test />
            <Foot />
          </div>
        </div>
      </div>
    
  );
};

export default App;
