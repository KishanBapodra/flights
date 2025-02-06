import Navbar from "./Navbar";
import { Container } from "@mui/material";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ paddingX: { xs: 0, md: 4 } }} maxWidth="xl">
        {children}
      </Container>
    </>
  );
};

export default Layout;
