import React,{useState, useEffect} from "react";
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({name: "", password: "",});
    const loginDetails = JSON.parse(localStorage.getItem("registerDetails"));

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

        if(credentials?.name === loginDetails?.name && credentials?.password === loginDetails?.password){
            navigate("/mainView");
        }else {
            alert("Invalid Credenntials");
        }
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

export default Login;