import { Stack } from "@mui/material";
import SuggestedFlights from "./suggested/SuggestedFlights";
import FlightSearch from "./FlightSearch";

const Sections = () => {
  return (
    <Stack paddingX={{ xs: 0, md: 8, lg: 16, xl: 28 }} gap={6}>
      <FlightSearch />
      <SuggestedFlights />
    </Stack>
  );
};

export default Sections;
