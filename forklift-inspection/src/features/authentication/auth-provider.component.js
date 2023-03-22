import React, { useState } from 'react';
import { fakeAuthProvider } from './fake-auth.provider';
import { AuthContext } from './authentication.context';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (newUser, callback) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
