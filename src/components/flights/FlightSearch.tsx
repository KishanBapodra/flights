import { Stack } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import FlightSearchForm from "./form/FlightSearchForm";

const FlightSearch = () => {
  return (
    <Stack marginTop={4}>
      <FlightSearchForm />
      <Breadcrumb />
    </Stack>
  );
};

export default FlightSearch;
