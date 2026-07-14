import { useEffect } from "react";

function PageTitle({ title }) {

  useEffect(() => {

    document.title = `${title} | FurniHome`;

  }, [title]);

  return null;

}

export default PageTitle;