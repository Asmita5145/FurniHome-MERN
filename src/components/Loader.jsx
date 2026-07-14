import { TailSpin } from "react-loader-spinner";
import "../css/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <TailSpin
        height={70}
        width={70}
        color="#b88e2f"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;