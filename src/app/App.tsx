import React from 'react';
import './App.css';
import DemoContainerWidget from '../components/demoContainer/DemoContainerWidget';
import { CssBaseline } from '@material-ui/core';
import ToolbarWidget from '../components/toolbar/ToolbarWidget';


function App() {

  return (
    <div>
      <CssBaseline />
      <ToolbarWidget/>
      <DemoContainerWidget />
    </div>
  );
}

export default App;
