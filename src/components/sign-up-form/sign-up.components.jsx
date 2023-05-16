import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'
import Button from '../button/button.component'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUp = () =>{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
  console.log(formFields);
  
  const onChangeHandler = (e) =>{
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
  }
const resetFormFields = () =>{
  setFormFields(defaultFormFields)
}
const onSubmitHandler = async(event)=>{
    event.preventDefault();
  if(password !== confirmPassword) {
    alert("Password don't match!")
    return
  }try{
    const {user} = await createAuthUserWithEmailAndPassword(email, password)
    await createUserDocumentFromAuth(user, {displayName})
    resetFormFields();
  }catch(error){
    if (error.code === 'auth/email-already-in-use') {
      alert('Email already in use!');
    } else {
      console.log("Error from auth with email and password", error)
    }
  }
}

  return (
    <div className='sign-up-container'>
      <h2>Don't you have an account?</h2>
      <span>Sign up with your email and password!</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
            label='Name'
            type="text" 
            required 
            onChange={onChangeHandler}
            name="displayName"
            value={displayName}/>
        
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
          <FormInput
            label='Confirm Password'
            type="password" 
            required 
            onChange={onChangeHandler}
            name="confirmPassword"
            value={confirmPassword}/>
          <br />
          <Button 
            type='submit'>
            Sign up!
          </Button>
      </form>
    </div>
  )
}

export default SignUp;