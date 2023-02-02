import React, {useState, setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    const [photo, setPhoto] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [dob,setDob] = useState(null);
    const [address,setAddress] = useState(null);
    const [university,setUniversity] = useState(null);
    const [classs,setClasss] = useState(null);
    const [number,setNumber] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "photo"){
            setPhoto(value);
        }
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "dob"){
            setDob(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "university"){
            setUniversity(value);
        }
        if(id === "classs"){
            setClasss(value);
        }
        if(id === "number"){
            setNumber(value);
        }

    }

    const handleSubmit  = () => {
        console.log(photo,firstName,lastName,email,address,dob,university,classs,number);
    }

    return(
        
        <div className="form">
            <div className="form-body">
                <div className="photo">
                    <label className="form__label" for="firstName">Profile Photo </label>
                    <input className="form__photo" type="photo" value={photo} onChange = {(e) => handleInputChange(e)} id="photo" placeholder=""/>
                </div>
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="dob">
                    <label className="form__label" for="dob">Date of Birth</label>
                    <input className="form__dob" type="dob" id="dob" value={dob} onChange = {(e) => handleInputChange(e)} placeholder="Day/Month/Year"/>
                </div>
                <div className="address">
                    <label className="form__label" for="address">Permanent Address </label>
                    <input className="form__address" type="address"  id="address" value={address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
                <div className="university">
                    <label className="form__label" for="university">University</label>
                    <input className="form__university" type="university" id="university" value={university} onChange = {(e) => handleInputChange(e)} placeholder="Name of your Institute"/>
                </div>
                <div className="class">
                    <label className="form__label" for="classs">Class</label>
                    <input className="form__classs" type="classs" id="classs" value={classs} onChange = {(e) => handleInputChange(e)} placeholder="Sem/Year"/>
                </div>
                <div className="number">
                    <label className="form__label" for="number">Mobile Number</label>
                    <input className="form__input" type="number" id="number" value={number} onChange = {(e) => handleInputChange(e)} placeholder="Mob. Number"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm