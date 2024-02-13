import Image from 'next/image';
import {
  RegisterLink,
  LoginLink
} from '@kinde-oss/kinde-auth-nextjs/components';

export default function Home() {
  return (
    <>
      <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
      <RegisterLink postLoginRedirectURL="/dashboard">Sign up</RegisterLink>
    </>
  );
}
