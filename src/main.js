import { Link } from "react-router-dom";
import "./main.css";

function main() {
  return (
    <div className="main">
      <button>
        <Link to="/app2">
          <p className="liP">누르면 페이지 이동합니다.</p>
        </Link>
      </button>
    </div>
  );
}

export default main;
