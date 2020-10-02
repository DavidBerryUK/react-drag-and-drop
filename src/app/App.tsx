import React from 'react';
import './App.css';
import DraggableElement from '../draggableElement/DraggableElement';
import DemoContainer from '../demoContainer/DemoContainer';

function App() {

  return (
    <div className="App">
      <DemoContainer>
        <DraggableElement boxId={1} />
        <DraggableElement boxId={2} />
        <DraggableElement boxId={3} />
        <DraggableElement boxId={4} />
        <DraggableElement boxId={5} />
        <DraggableElement boxId={6} />
      </DemoContainer>
    </div>
  );
}

export default App;
