import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () =>{

    const [name1 , setname1] = useState('');
    const [name2 , setname2] = useState('');
    const [value , setvalue] = useState('');
  

    function calculateRelationship(){
       if(name1 == "" || name2 == ""){
        alert("pls enter all the fields")
        return
       }

      for(let i = 0; i < name1.length; i++){
        
        for(let j = 0; j < name2.length; j++){
           
            if(name1[i] == name2[j]){
                name1.slice(i);
                name2.slice(j);
            }

        }

      }

    const nameSum = (name1.length + name2.length) % 6;
    if(nameSum == 0){
        return setvalue("Siblings");
    }
    else if(nameSum == 1){
        return setvalue("Friends");
    }
    else if(nameSum == 2){
        return setvalue("Love");
    }
    else if(nameSum == 3){
        return setvalue("Affection");
    }
    else if(nameSum == 4){
        return setvalue("Marriage");
    }
    else{
        return setvalue("Enemy")
    }
    

    }

    function  clearState(){
      
        setname1("")
        setname2("");
        setvalue("");

    }

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input value={name1} onChange={(e)=>{return(setname1(e.target.value))}} type="text" placeholder="First Name" data-testid="input1"/>
               <input value={name2} onChange={(e)=>{return(setname2(e.target.value))}} type="text" placeholder="Second Name" data-testid="input2"/>

               <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>

               <button onClick={clearState} data-testid="clear">Clear</button>

               {
                value && <h3>{value}</h3>
               }
               
            </div>
        )
    }



export default App;
