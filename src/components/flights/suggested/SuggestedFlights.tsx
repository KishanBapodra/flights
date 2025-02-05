import { Stack, Typography } from "@mui/material";
import PopularTrips from "./PopularTrips";

const SuggestedFlights = () => {
  return (
    <Stack>
      <Typography variant="h1" fontSize={24} fontWeight={600}>
        Cheap Flights from Dubai
      </Typography>
      <PopularTrips />
    </Stack>
  );
};

export default SuggestedFlights;
