import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AgeCalculator from './AgeCalculator';
import AgeCalculatorResult from "./AgeCalculatorResult";
function App() {
  const [age, setAge] = useState(null);
  const calculateAge = (birthDate) => {

    const today = new Date();
    const  birthDateObj = new Date(birthDate);
    const  ageYears =    today.getFullYear() - birthDateObj.getFullYear() -1;
    setAge({
      years : ageYears,
    });

  }

  return (
    <div className="app"> 
    <div>
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <AgeCalculator calculateAge = {calculateAge} />
      {age && <AgeCalculatorResult age={age}/>}
    </div>
    </div>

  );
}

export default App;
