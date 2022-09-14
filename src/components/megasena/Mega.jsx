import React, { useState } from "react";
import './Mega.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [amount, setAmount] = useState(6)
    const [numbers, setNumbers] = useState(Array(props.qtd || 6).fill(0))

    function whenChanged(e) {
        setAmount(e.target.value)
        setNumbers(generateNumbers(amount))
    }

    function generateNumbers(qtd) {

        if (qtd < 6) {
            return Array(6).fill(0)
        }

        let uniquesNumbers = new Set()
    
        while (uniquesNumbers.size < qtd) {
    
            const number = Math.floor(Math.random() * 60) + 1
            
            uniquesNumbers.add(number)
        }
    
        return Array.from(uniquesNumbers).sort((a, b) => a - b)
     }

    return (
        <div className="Mega">
            <h2>Mega Sena</h2>
            <div>
                <label>Quantidade:</label>
                <input 
                    type="number" 
                    min="6" 
                    max="15" 
                    value={amount}
                    onChange={whenChanged}/>
            </div>
            <button onClick={_ => setNumbers(generateNumbers(amount))}>Gerar</button>
            <h3>{numbers.join('-')}</h3>
        </div>
    )
}