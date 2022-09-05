import { Link } from "react-router-dom";
import "./main.css";

function App2() {
  return (
    <div className="App2">
      <h1>페이지 이동 성공!!!!!!!!!!!!!!</h1>
      <button>
        <Link to="/app3">
          <p className="liP">누르면 두번째 페이지 이동합니다.</p>
        </Link>
      </button>
    </div>
  );
}

export default App2;
