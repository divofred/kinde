'use client';

import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useState } from 'react';
export default function Dasboard() {
  const [userState, setUserState] = useState(null);
  const { user, idToken } = useKindeBrowserClient();
  console.log('user', user);
  console.log('idToken', idToken);

  if (user && !userState) {
    setUserState(user);
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome, {userState?.given_name}</h2>

      <LogoutLink>Sign out</LogoutLink>
    </>
  );
}
