import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/farebase.utils';

import './sign-in-form.styles.scss';

const defaultFormsFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formsFields, setFormFields] = useState(defaultFormsFields);
  const { email, password } = formsFields;

  const resetFormFields = () => {
    setFormFields(defaultFormsFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log('response', response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.error('User sign in encounter an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formsFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2 className='title'>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          lable='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />

        <div className='buttons-container'>
          <Button buttonOptions={{ type: 'submit' }}>Sign In</Button>
          <Button
            buttonType='google'
            buttonOptions={{ type: 'button', onClick: signInWithGoogle }}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
