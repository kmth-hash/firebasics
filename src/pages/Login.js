import React from "react";
import Layout from "../components/Layout";
import "firebase/auth";
import { firebaseConfig } from "../fireconf";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const userLoggedInFn = ()=>{
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async() => {
        try {
            const res = await signInWithPopup(auth , googleProvider);
            const user = res.user ;
            
        }
        catch(error)
        {

        }
    }

}

function Login() {
  let userName = "Not logged In";
  return (
    <Layout>
      <h3>Login with Google</h3>
      <button className="btn btn-light">Login</button>
      <br />
      <br />
      <h5>{userName}</h5>
    </Layout>
  );
}

export default Login;
