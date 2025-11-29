import { useState } from "react";

function BinaryToDecimal(){
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);

    function handleRefresh(){
        window.location.reload(true);
    }

    function convertToDecimal(){
        let decimal = 0;
        let power = 1;


        for(let i = inputValue.length - 1; i >= 0; i--){
            if(Number(inputValue[i]) === 1 || Number(inputValue[i]) === 0){
                decimal += Number(inputValue[i]) * power;
                power *= 2;
            }
            else{
                window.alert("You have entered something that is not a binary number")
                handleRefresh();
                break
            }
        }

        setResult(decimal);
    }

    return(
        <div>
            <input value={inputValue} placeholder="Enter Binary here" onChange={(e) => setInputValue(e.target.value)} />

            <button onClick={convertToDecimal}>Convert</button>
            <p>Result: {result}</p>
        </div>
    )
}

export default BinaryToDecimal