import FlightBanner from "./components/flights/FlightBanner";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Layout from "./layout/Layout";
import Sections from "./components/flights/Sections";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>
          <Stack pb={4}>
            <FlightBanner />
            <Sections />
          </Stack>
        </Layout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
