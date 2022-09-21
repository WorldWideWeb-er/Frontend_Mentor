import { React, Form } from 'react-bootstrap';
import './App.css';

import { Card, Attribution} from "./components"

function App() {
  return (
    <div className="App">
      <div className='container-fluid' id='challange-info'>
        <Card />
        <Attribution />
      </div>
    </div>
  );
}

export default App;
