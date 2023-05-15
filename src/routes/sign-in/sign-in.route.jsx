import {signInWithPopupGoogle, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
 
 const SignIn = () =>{
  const logGoogleUser = async()=>{
    const {user} = await signInWithPopupGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
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