import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import { Button } from 'react-bootstrap';

function App() {

    return (
        <div>
            <Navbar />
            <Button>Click me</Button>
        </div>
    );
}

export default App;