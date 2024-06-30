import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/Firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export function Navbar() {
  const [user] = useAuthState(auth);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
        <button onClick={signOutUser}>Cerrar Sesion</button>
        <button>Perfil</button>
        </div>
      ) : (
        <button onClick={signIn}>Iniciar sesion con google</button>
      )}
    </div>
  );
}