import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './views/log_in/Login';
import SignUp from './views/sign_up/SignUp';
import MainView from './views/mainView/MainView';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<SignUp/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainView" element={<MainView/>} />
        </Routes>
    </div>
  );
}

export default App;
