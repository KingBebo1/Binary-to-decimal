import { useState } from "react"

function DecimalToBinary(){
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);

   

    function convertToBinary(){
        let num = Number(inputValue);
       
        if(isNaN(num)){
            window.alert("This is not a valid number");
            return;
        }

        setResult(num.toString(2));


    }


    return(
        <div id="container">
            <h1>Decimal to Binary convertor</h1>
            <input type="number" value={inputValue} placeholder="Enter Decimal/Number here" onChange={(e) => setInputValue(e.target.value)} />
            <br /><br />

            <button onClick={convertToBinary}>Convert</button>
            <p>Result: {result}</p>
        </div>
    )
}

export default DecimalToBinary