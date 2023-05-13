import {signInWithPopupGoogle} from '../../utils/firebase/firebase.utils'
 
 const SignIn = () =>{
  const logGoogleUser = async()=>{
    const response = await signInWithPopupGoogle();
    console.log(response);
  }
   return (
     <div>
      <h1>SigIn Page</h1>  
      <button onClick={logGoogleUser}>
        Sign In With Google!
      </button>
    </div> 
   ) 
   }
 
 export default SignIn;