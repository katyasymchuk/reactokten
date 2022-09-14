import logo from './logo.svg';
import './App.css';
import {simpsons} from "./data";
import Simpson from "./components/simpson/Simpson";

import Characters from "./components/characters/Characters";
import Character from "./components/character/Character";

function App() {

  return (
      <div className = "Main">
          <div className="Title">
              <h1>S<span className="ColorText">i</span>m<span className="ColorText">p</span>s<span
                  className="ColorText">o</span>n</h1> </div>
              <div className="SimpsonFamily">
                  {
                      simpsons.map(simpson => (<Simpson item={simpson}/>))}
              </div>
          <div className="Title">
              <h1>R<span className="ColorText">i</span>c<span className="ColorText">k</span> & <span
                  className="ColorText">M</span>o<span className="ColorText">r</span>t<span className="ColorText">y</span></h1> </div>

       <Characters/>

      </div>



  );
}

export default App;
