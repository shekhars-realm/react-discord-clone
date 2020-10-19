import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css"
import { auth } from './firebase'
import { provider } from './firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from "./features/userSlice"

function Login() {

    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                //user logged in
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }))
            } else {
                 dispatch(logout())
            }
        })
    }, [dispatch])

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => {
          alert(error.message);
        });
    }
    return (
        <div class="login">
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
