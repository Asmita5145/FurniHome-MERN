import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "../css/BackToTop.css";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    function toggleVisibility() {

      if (window.scrollY > 300) {

        setVisible(true);

      } else {

        setVisible(false);

      }

    }

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  function scrollTop() {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  }

  return (

    visible && (

      <button
        className="back-top"
        onClick={scrollTop}
      >

        <ArrowUp size={22} />

      </button>

    )

  );

}

export default BackToTop;