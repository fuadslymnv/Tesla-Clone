import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        const ref = doc(db, "users", result.user.uid);
        // localStorage.setItem("user-id", result.user.uid);
        await setDoc(ref, { email, inventory: [] })
          .then((e) => console.log(e, "works"))
          .catch((e) => console.log(e.message));
      }
    );
  };
  const logout = () => {
    return signOut(auth);
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/inventory");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "user-cur");
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
