import Navbar from "./Navbar";
import { Container } from "@mui/material";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;
