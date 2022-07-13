import React,{useState} from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import "./signup.css";

const SignUp = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }; 

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
        console.log(name);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(name);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        console.log(name);
    };

    

    const handleSubmit = (e) => {
        console.log(name);
        console.log(password);
        console.log(email);
        console.log(phoneNumber);
    }


  return (
    <div className="signup_container">
        <div>
            <div className="title_container">
                Sign Up
            </div>
            <div className="input_container">
                <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <Input type="email" placeholder="E-Mail" value={email} onChange={handleEmailChange}/>
                <Input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange}/>  
            </div>
            <div className="button_container">
                <Button text={"Sign Up"} onPress={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}

export default SignUp;