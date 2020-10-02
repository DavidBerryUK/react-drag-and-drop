import React from 'react';
import './App.css';
import DraggableElement from '../draggableElement/DraggableElement';
import DraggableManager from '../draggableManager/DraggableManager';

function App() {

  return (
    <div className="App">
      <DraggableManager>
        <DraggableElement boxId={1} />
        <DraggableElement boxId={2} />
        <DraggableElement boxId={3} />
        <DraggableElement boxId={4} />
        <DraggableElement boxId={5} />
        <DraggableElement boxId={6} />
      </DraggableManager>
    </div>
  );
}

export default App;
