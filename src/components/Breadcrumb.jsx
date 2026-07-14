import { Link } from "react-router-dom";
import "../css/Breadcrumb.css";

function Breadcrumb({ current }) {

  return (

    <div className="breadcrumb">

      <Link to="/">Home</Link>

      {current !== "Home" && (
        <>
          <span> &gt; </span>
          <span>{current}</span>
        </>
      )}

    </div>

  );

}

export default Breadcrumb;