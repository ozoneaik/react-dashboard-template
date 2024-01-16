import './App.css'
import {Link} from "react-router-dom";

function App() {

    return (
        <div>
            <Link to={'/dashboard'} className={'btn btn-primary'}>go to dashboard</Link>
        </div>
    )
}

export default App
