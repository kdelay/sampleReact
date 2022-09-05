import { Link } from "react-router-dom";

function App3() {
  return (
    <div className="App3">
      <h1>페이지 두번째 이동 성공!!!!!!!!!!!!!!</h1>

      <button>
        <Link to="/">
          <div>첫 번째 페이지로 이동합니다.</div>
        </Link>
      </button>
    </div>
  );
}

export default App3;
