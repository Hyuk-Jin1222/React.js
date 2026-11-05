import "./Main.css";

const Main = () => {
  const user = {
    name: "홍길동",
    isLoggedIn: true,
  };
  return (
    <>
      {user.isLoggedIn ? (
        <div className="logout">
          <h1>{user.name}님 환영합니다.</h1>
          <button>로그아웃</button>
        </div>
      ) : (
        <div className="login">
          <h1>로그인이 필요합니다.</h1>
          <button>로그인</button>
        </div>
      )}
    </>
  );
};
export default Main;
