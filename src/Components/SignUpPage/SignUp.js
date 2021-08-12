import React, { useRef, useState } from 'react'
import classes from './SignUp.module.css'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
const SignUpPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(emailRef.current.value, passwordRef.current.value)
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/Calculator')
        } catch (error) {
            setError(error.message)
        }

        setLoading(false)

    }

    return (
        <div className={classes.box}>
            {error && <Alert variant="danger">{error}</Alert>}
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter Email" ref={emailRef} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef} />
                </div>
                <div className={classes.dashboard}>

                    <button onClick={handleSubmit} disabled={loading} type="submit" className="btn btn-primary btn-block" >Sign Up</button>

                </div>
                <div className={classes.back}>
                    <Link to="/">
                        <p className={classes.color}>Back?</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage
