import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../fakebackend/auth'
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const AuthMiddleware = (props) => {
    
    const navigate = useNavigate();

    useEffect(()=>{
      //to do
    }, [])
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default AuthMiddleware;