import React from "react";

const LoginAndLogout = (props) => {
  const {
    email,
    setEmail,
    pw,
    setPw,
    errMsg,
    loginHandler,
    logonHandler,
    isLoginMode,
    setIsLoginMode,
  } = props;

  return (
    <div className="main__loginAndLogonArea">
      <div className="main__inputArea">
        <div className="email">
          <label>이메일</label>
          <input
            type="text"
            required
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="password">
          <label>비밀번호</label>
          <input
            type="password"
            required
            onChange={(e) => {
              setPw(e.target.value);
            }}
            value={pw}
          />
        </div>
        <p className="errMsg">{errMsg}</p>
      </div>
      {isLoginMode ? (
        <button
          onClick={() => {
            loginHandler();
          }}
        >
          로그인
        </button>
      ) : (
        <button
          onClick={() => {
            logonHandler();
          }}
        >
          회원가입
        </button>
      )}

      {isLoginMode ? (
        <>
          <div>
            <p className="question">아직 계정이 없으신가요? </p>
            <span
              onClick={() => {
                setIsLoginMode(!isLoginMode);
              }}
            >
              회원가입
            </span>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="question">이미 계정이 있으신가요? </p>
            <span
              onClick={() => {
                setIsLoginMode(!isLoginMode);
              }}
            >
              로그인
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginAndLogout;
