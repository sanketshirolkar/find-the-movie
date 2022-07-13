import React,{useState} from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }; 

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
        console.log(name);
    };


    const handleSubmit = (e) => {
        console.log(name);
        console.log(password); 
        navigate("/mainView");
    }
  return (
    <div className="login_container">
        <div>
            <div className="title_container">
                Login
            </div>
            <div className="input_container">
                <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>  
            </div>
            <div className="button_container">
                <Button text={"Login"} onPress={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default Login