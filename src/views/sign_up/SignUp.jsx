import React,{useState} from 'react'
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import "./signup.css";

const SignUp = () => {
 
    const navigate = useNavigate();
    const [registerDetails, setRegisterDetails] = useState({
        name: "",
        password: "",
        email: "",
        phoneNumber: "",
    });

    const handleOnChange = (e) => {
        setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        localStorage.setItem("registerDetails",  JSON.stringify(registerDetails));
        navigate("/login");
    }


  return (
    <div className="signup_container">
        <div>
            <div className="title_container">
                Sign_up
            </div>
            <div className="input_container">
                <Input type="text" name="name" placeholder="Name" value={registerDetails?.name} onChange={handleOnChange}/>
                <Input type="password" name="password" placeholder="Password" value={registerDetails?.password} onChange={handleOnChange}/>
                <Input type="email" name="email" placeholder="E-Mail" value={registerDetails?.email} onChange={handleOnChange}/>
                <Input type="tel" name="phoneNumber" placeholder="Phone Number" value={registerDetails?.phoneNumber} onChange={handleOnChange}/>  
            </div>
            <div className="button_container">
                <Button text={"Sign_up"} onPress={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default SignUp;