
import SignUp from '../../components/sign-up-form/sign-up.components.jsx'
import SignIn from '../../components/sign-in-form/sign-in.components.jsx'
import './authentication.styles.scss'




const Authentication =  () =>{


   return (
     <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div> 
   ) 
   }
 
 export default Authentication;