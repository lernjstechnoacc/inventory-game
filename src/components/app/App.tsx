import { useState } from 'react';
import GameScreen from '../game-screen/GameScreen';
import HelloScreen from '../hello-screen/HelloScreen';

import './App.scss';

const App = () =>{
  
  const [isReadHelloScreen, setIsReadHelloScreen] = useState<boolean>(false);
  
  return (
    <div className="App">
      {!isReadHelloScreen ? 
        <HelloScreen setIsReadHelloScreen={setIsReadHelloScreen}/> : 
        <GameScreen/>}
    </div>
  );
}

export default App;
