import React,{useState} from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import "./signup.css";

const SignUp = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }; 

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    

    const handleSubmit = (e) => {
        console.log(name);
        console.log(password);
        console.log(email);
        console.log(phoneNumber);
        navigate("/login");
    }


  return (
    <div className="signup_container">
        <div>
            <div className="title_container">
                Sign_up
            </div>
            <div className="input_container">
                <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <Input type="email" placeholder="E-Mail" value={email} onChange={handleEmailChange}/>
                <Input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange}/>  
            </div>
            <div className="button_container">
                <Button text={"Sign_up"} onPress={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default SignUp;