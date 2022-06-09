import React, { createContext, useState } from "react";

const PageContext = createContext("");

function PageProvider({ children }) {
  const [page, setPage] = useState("http");
  const obj = { page: page, setPage: setPage };
  return <PageContext.Provider value={obj}>{children}</PageContext.Provider>;
}

export default PageProvider;
export { PageContext };
