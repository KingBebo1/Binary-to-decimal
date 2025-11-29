import { useState } from "react";
import "./App.css"

function BinaryToDecimal(){
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);

    function handleRefresh(){
        window.location.reload(true);
    }

    function convertToDecimal(){
        const cleanInput = inputValue.replace(/\s+/g, "");

        let decimal = 0;
        let power = 1;


        for(let i = cleanInput.length - 1; i >= 0; i--){
            if(Number(cleanInput[i]) === 1 || Number(cleanInput[i]) === 0){
                decimal += Number(cleanInput[i]) * power;
                power *= 2;
            }
            else{
                window.alert("You have entered something that is not a binary number")
                handleRefresh();
                break;
            }
        }

        setResult(decimal);
    }

    return(
        <div id="container">
            <h1>Binary to Decimal convertor</h1>
            <input value={inputValue} placeholder="Enter Binary here" onChange={(e) => setInputValue(e.target.value)} />
            <br /><br />

            <button onClick={convertToDecimal}>Convert</button>
            <p>Result: {result}</p>
        </div>
    )
}

export default BinaryToDecimal