import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/header/nav';
import Form from './components/form/Form';

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
      <Form/>
    </div>
  );
}

export default App;