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
            <div className="input_container">
                <form>
                    <div className="title_container">
                        Signup
                    </div>
                    <Input type="text" name="name" placeholder="Name" value={registerDetails?.name} onChange={handleOnChange}/>
                    <Input type="password" name="password" placeholder="Password" value={registerDetails?.password} onChange={handleOnChange}/>
                    <Input type="email" name="email" placeholder="E-Mail" value={registerDetails?.email} onChange={handleOnChange} />
                    <Input type="tel" name="phoneNumber" placeholder="Phone Number" value={registerDetails?.phoneNumber} onChange={handleOnChange}/>
                    <button className="button_container" onClick={handleSubmit}>Sign Up</button>    
                </form>
            </div>
    </div>
  )
}

export default SignUp;