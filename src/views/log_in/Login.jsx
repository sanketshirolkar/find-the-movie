import React,{useState} from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({name: "", password: "",});

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log(credentials);
        navigate("/mainView");
    }
    
  return (
    <div className="login_container">
        <div>
            <div className="title_container">
                Login
            </div>
            <div className="input_container">
                <Input type="text" name="name" placeholder="Name" value={credentials?.name} onChange={handleOnChange}/>
                <Input type="password" name="password" placeholder="Password" value={credentials?.password} onChange={handleOnChange}/>  
            </div>
            <div className="button_container">
                <Button text={"Login"} onPress={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default Login