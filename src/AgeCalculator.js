import React from 'react'
import { useState } from 'react';
import "./CalculatorStyling.css";

const AgeCalculator = ({calculateAge}) => {
    const [birthDate,setBirthDate]  = useState("");
    const handleChangeDate = (e) => {
        setBirthDate(e.target.value);
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        calculateAge(birthDate);

    }
  return (
    <form onSubmit={handleSubmit}>
        <input value = {birthDate} type="date" onChange={handleChangeDate}/> <br/> <br/>
        <button type="submit" className="btn1" >Calculate Age</button>
    </form>
  )
}

export default AgeCalculator

