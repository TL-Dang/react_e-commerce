import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utility/firebase/firebase.utility';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
