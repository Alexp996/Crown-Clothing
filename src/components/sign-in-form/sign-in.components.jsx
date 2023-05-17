import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import Button from '../button/button.component'
import {signInWithPopupGoogle,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'






const defaultFormFields = {
  password: '',
  email: '',
}


const SignInForm = () =>{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  
  const onChangeHandler = (e) =>{
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
  }
const resetFormFields = () =>{
  setFormFields(defaultFormFields)
}
const onSubmitHandler = async(event)=>{
    event.preventDefault();
  try{
    const response = await signInAuthUserWithEmailAndPassword(email, password);
    console.log('response', response);
    resetFormFields();
  }catch(error){
    switch(error.code){
      case 'auth/wrong-password':
        alert("Wrong password")
        break;
      case 'auth/user-not-found':
        alert("User not found!!") 
        break;
      default:
        console.log(error)
    }
    console.log(error);
  }
}
const signInWithGoogle = async()=>{
  const {user} = await signInWithPopupGoogle();
  await createUserDocumentFromAuth(user);
}

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password!</span>
      <form onSubmit={onSubmitHandler}>
  
        <FormInput
            label='Email'
            type="email" 
            required 
            onChange={onChangeHandler}
/** In momentul in care dam click pe Email, functia onChange este declansata, iar functia onChangeHandler este apelata.
 *  In setFormFields({}), [name] va fi email(deoarece e.target.name = primeste numele name-ului pe care il dam noi in input), dupa cum name='email', 
 *  Iar VALUE, care reprezinta e.target.value,
 *  Acest VALUE va primi valoarea de la linia de mai jos unde avem value={email}, email fiind key din obiectul defaultFormFields.
 */ 
            name="email"
            value={email} />
          <FormInput
            label='Password'
            type="password" 
            required 
            onChange={onChangeHandler}
            name="password"
            value={password}/>
          <br />
          <div className="buttons-container">

            <Button 
              type='submit'>
              Sign In!
            </Button>
            <Button type='button' buttonType='google' onClick={signInWithGoogle}>
              Google Sign In!
            </Button>
          </div>
      </form>
    </div>
  )
}

export default SignInForm;