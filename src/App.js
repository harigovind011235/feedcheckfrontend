import logo from './logo.svg';
import './App.css';

import { Container } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes'

function App() {
  return (
    <div className="App">
      <Container>
        <RouterProvider router={routes}/>
      </Container>
    </div>
  );
}

export default App;
