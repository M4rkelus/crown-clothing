import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/farebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-from.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
