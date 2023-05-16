import {signInWithPopupGoogle, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUp from '../../components/sign-up-form/sign-up.components.jsx'
import Button from '../../components/button/button.component'




const SignIn =  () =>{

  const logGoogleUser = async()=>{
    const {user} = await signInWithPopupGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
   return (
     <div>
      <h1>SigIn Page</h1>  
      <SignUp />
      <Button onClick={logGoogleUser}>
        Sign in With Google pop up!
      </Button>
    </div> 
   ) 
   }
 
 export default SignIn;