import React from 'react';
import './App.css';

let name: string;
let age: number | string ;
let isStudent: boolean ;
let hobbies: string[];
let role:[number, string];// tuple
name = "Abhishek";
age=21;
age="anup";

isStudent=true;
hobbies=["Coding", "Swimming"];
role=[5,"Abhishek"];

// declaring obects: we have 2 ways to declare objects
// method 1
let person1: Object;

// method 2

type Person = {
  name: String;
  age?: number;
}

let person2: Person={
  name: "Abhishek",
}

function App() {
  return (
    <div className="App">
      <h1>Hello {name}, Welcome! </h1>
      <h2>Age: {age},  Student: {isStudent}, hobbies: {hobbies},  role: {role}</h2>
    </div>
  );
}

export default App;
