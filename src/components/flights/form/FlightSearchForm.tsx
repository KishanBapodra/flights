import { useMemo, useState } from "react";
import {
  Card,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { SwapHoriz, Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";
import { grey } from "@mui/material/colors";
import dayjs, { Dayjs } from "dayjs";

interface FlightOptionProps {
  tripType: "RoundTrip" | "OneWay";
  passengers: {
    adults: number;
    children: number;
  };
  flightClass: "Economy" | "Business" | "FirstClass";
  origin: string;
  destination: string;
  departureDate: Dayjs;
  returnDate?: Dayjs | null;
}

const FlightSearchForm = () => {
  const [flightOptions, setFlightOptions] = useState<FlightOptionProps>({
    tripType: "RoundTrip",
    passengers: {
      adults: 1,
      children: 0,
    },
    flightClass: "Economy",
    origin: "",
    destination: "",
    departureDate: dayjs(),
    returnDate: null,
  });

  const handleSwapLocations = () => {
    setFlightOptions((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  const totalPassengers = useMemo(
    () => flightOptions.passengers.adults + flightOptions.passengers.children,
    [flightOptions.passengers]
  );

  const handleSearch = () => {};

  console.log(flightOptions);
  console.log(flightOptions.departureDate.format("YYYY-MM-DD"));
  return (
    <Card elevation={6} sx={{ overflow: "visible" }}>
      <Box p={3} pb={6}>
        <Stack spacing={3}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Select
              size="small"
              variant="standard"
              value={flightOptions.tripType}
              onChange={(e) =>
                setFlightOptions((prev) => ({
                  ...prev,
                  tripType: e.target.value as FlightOptionProps["tripType"],
                }))
              }
              sx={{
                paddingTop: 1,
                paddingX: 1,
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <MenuItem value="RoundTrip">Round Trip</MenuItem>
              <MenuItem value="OneWay">One Way</MenuItem>
            </Select>
            <TextField
              value={totalPassengers}
              sx={{ width: 75, alignItems: "center" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                  sx: { height: 37, minWidth: 25 },
                },
              }}
              variant="standard"
              onChange={(e) =>
                setFlightOptions((prev) => ({
                  ...prev,
                  passengers: {
                    ...prev.passengers,
                    adults: Number(e.target.value),
                  },
                }))
              }
            />
            <Select
              size="small"
              variant="standard"
              value={flightOptions.flightClass}
              onChange={(e) =>
                setFlightOptions((prev) => ({
                  ...prev,
                  flightClass: e.target
                    .value as FlightOptionProps["flightClass"],
                }))
              }
              sx={{
                paddingTop: 1,
                paddingX: 1,
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="FirstClass">First Class</MenuItem>
            </Select>
          </Stack>

          <Stack
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, xl: 0 },
            }}
            flexWrap="nowrap"
          >
            <Box alignItems="center" display="flex">
              <TextField
                label="From"
                sx={{ width: { xs: "100%", lg: 250 } }}
                value={flightOptions.origin}
                onChange={(e) =>
                  setFlightOptions((prev) => ({
                    ...prev,
                    origin: e.target.value,
                  }))
                }
              />
              <IconButton onClick={handleSwapLocations}>
                <SwapHoriz />
              </IconButton>
              <TextField
                label="To"
                sx={{ width: { xs: "100%", lg: 250 } }}
                value={flightOptions.destination}
                onChange={(e) =>
                  setFlightOptions((prev) => ({
                    ...prev,
                    destination: e.target.value,
                  }))
                }
              />
            </Box>
            <Box
              sx={{ width: "100%", ml: { xs: 0, xl: 2 } }}
              display="flex"
              gap={2}
              flexWrap="nowrap"
            >
              <DatePicker
                disablePast
                sx={{ width: "100%" }}
                label="Departure"
                value={flightOptions.departureDate}
                onChange={(date) =>
                  date &&
                  setFlightOptions((prev) => ({
                    ...prev,
                    departureDate: date,
                  }))
                }
              />
              {flightOptions.tripType === "RoundTrip" && (
                <DatePicker
                  disablePast
                  minDate={flightOptions.departureDate}
                  sx={{ width: "100%" }}
                  label="Return"
                  value={flightOptions.returnDate}
                  onChange={(date) =>
                    date &&
                    setFlightOptions((prev) => ({
                      ...prev,
                      returnDate: date,
                    }))
                  }
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box position="relative" display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            borderRadius: 6,
            height: "40px",
            bottom: "-20px",
            position: "absolute",
            textTransform: "none",
          }}
          size="large"
          onClick={handleSearch}
        >
          <SearchIcon />
          <Typography>Search</Typography>
        </Button>
      </Box>
    </Card>
  );
};

export default FlightSearchForm;
