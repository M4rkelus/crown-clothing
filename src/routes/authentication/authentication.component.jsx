import SignUpForm from '../../components/sign-up-form/sign-up-from.component';
import SignInForm from '../../components/sign-in-form/sign-in-from.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
