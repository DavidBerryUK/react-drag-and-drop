import React from 'react';
import './App.css';
import DraggableBox from '../draggableBox/DraggableBox';
import DraggableManager from '../draggableManager/DraggableManager';

function App() {

  return (
    <div className="App">
      <DraggableManager>
        <DraggableBox boxNumber={1} />
        <DraggableBox boxNumber={2} />
        <DraggableBox boxNumber={3} />
        <DraggableBox boxNumber={4} />
        <DraggableBox boxNumber={5} />
        <DraggableBox boxNumber={6} />
      </DraggableManager>
    </div>
  );
}

export default App;
