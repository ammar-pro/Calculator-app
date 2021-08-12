import React, { useContext, useState, } from 'react'
import { auth } from '../Firebase/Firebase'
const AuthContext = React.createContext()

export function useAuth() {
    return (
        useContext(AuthContext)
    )
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // useEffect(() => {
    //     const unsubscribes = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //     })
    // })

    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })

    const value = {
        currentUser,
        login,
        signup
    }

    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}