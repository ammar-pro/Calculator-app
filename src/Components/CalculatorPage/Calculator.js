import React, { useState } from 'react'
import classes from './Calculator.module.css'
import { Link } from 'react-router-dom'
const Calculator = () => {
    const [result, setResult] = useState("");
    const [showResult, setShowResult] = useState("")

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
        console.log(e.target.value, result)
    }

    const clear = () => {
        setResult("")
    }

    const backspace = () => {
        setResult(result.slice(0, -1))
    }

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString())

        } catch (err) {
            setResult("Error")
        }

    }

    const predict = (e) => {

        setResult(result.concat(e.target.name))
        // eslint-disable-next-line no-eval


    }

    return (
        <>
            <div className={classes.box}>

                <form >
                    <input onChange={predict} className={classes.font} type="text" value={result} />
                </form>
                <p className={classes.result}>{showResult || result}</p>
                <div className={classes.keypad}>
                    <button className={classes.highlighter}
                        onClick={clear} id="clear">Clear</button>
                    <button className={classes.highlight}
                        onClick={backspace} id="backspace">C</button>
                    <button className={classes.highlight}
                        name="/" onClick={predict}>&divide;</button>
                    <button className={classes.button} name="7" onClick={handleClick}>7</button>
                    <button className={classes.button} name="8" onClick={handleClick}>8</button>
                    <button className={classes.button} name="9" onClick={handleClick}>9</button>
                    <button className={classes.highlight} name="*"
                        onClick={predict}>&times;</button>
                    <button className={classes.button} name="4" onClick={handleClick}>4</button>
                    <button className={classes.button} name="5" onClick={handleClick}>5</button>
                    <button className={classes.button} name="6" onClick={handleClick}>6</button>
                    <button className={classes.highlight} name="-"
                        onClick={predict}>&ndash;</button>
                    <button className={classes.button} name="1" onClick={handleClick}>1</button>
                    <button className={classes.button} name="2" onClick={handleClick}>2</button>
                    <button className={classes.button} name="3" onClick={handleClick}>3</button>
                    <button className={classes.highlight} name="+"
                        onClick={predict}>+</button>
                    <button className={classes.button} name="0" onClick={handleClick}>0</button>
                    <button className={classes.button} name="." onClick={handleClick}>.</button>
                    <button className={classes.highlighting} onClick
                        ={calculate} id="result">=</button>
                </div>

            </div>
            <div className={classes.logout}>
                <Link to="/">
                    <button className={classes.blog}>Log Out</button>
                </Link>
            </div>
        </>
    )
}

export default Calculator
