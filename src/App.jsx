import React, { useEffect, useState } from "react";
import fire from "./fire";
import LoginAndLogout from "./components/LoginAndLogout";
import "./style/App.scss";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const clear = () => {
    setEmail("");
    setPw("");
    setErrMsg("");
  };

  // 회원가입
  const logonHandler = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pw)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log("회원가입 성공");
      })
      .catch((e) => {
        console.log("error");
        setErrMsg(e.message);
      });
  };

  //   로그인
  const loginHandler = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, pw)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((e) => {
        setErrMsg(e.message);
      });
  };

  //   로그아웃
  const signoutHandler = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    clear();
  }, [isLoginMode, user]);

  return (
    <>
      <header>
        <div className="header__logo">logo</div>
        <nav className="header__nav">
          <ul className="header__navlist">
            <li>home</li>
            <li>board</li>
            <li>my</li>
          </ul>
          {user ? (
            <span
              onClick={() => {
                signoutHandler();
              }}
            >
              로그아웃
            </span>
          ) : null}
        </nav>
      </header>
      <main>
        {user ? (
          <h1>Welcome!</h1>
        ) : (
          <LoginAndLogout
            email={email}
            setEmail={setEmail}
            pw={pw}
            setPw={setPw}
            errMsg={errMsg}
            loginHandler={loginHandler}
            logonHandler={logonHandler}
            isLoginMode={isLoginMode}
            setIsLoginMode={setIsLoginMode}
          />
        )}
      </main>
    </>
  );
};

export default App;
