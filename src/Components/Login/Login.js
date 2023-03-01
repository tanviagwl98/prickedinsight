import React from 'react';
import { auth, googleAuthProvider } from './firebase';

const Login = () => {
  const handleGoogleLogin = async () => {
    try{
      const result = await auth.signInWithPopup(googleAuthProvider);
      return result;
    }
    catch(error) {
    //
    }
  }
 
  return(
     <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}


export default Login;
