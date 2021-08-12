import React, { useRef, useState } from 'react'
import classes from './Login.module.css'
import { Alert } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            console.log(emailRef.current.value)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/Calculator')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }

        setLoading(false)

    }

    return (
        <div className={classes.box}>
            {error && <Alert variant="danger">{error}</Alert>}
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter Email" ref={emailRef} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef} />
                </div>
                <div className={classes.dashboard}>

                    <button onClick={handleSubmit} disabled={loading} type="submit" className="btn btn-primary btn-block" >Log In</button>

                </div>
                <div className={classes.back}>
                    <Link to="/Signup">
                        <p className={classes.color}>Register?</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage