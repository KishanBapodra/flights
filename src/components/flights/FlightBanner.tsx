import { Box, Stack, Typography } from "@mui/material";

const FlightBanner = () => {
  return (
    <Stack
      component="section"
      alignItems="center"
      gap={0}
      sx={{
        minHeight: "100px",
        maxHeight: "300px",
      }}
    >
      <Box
        component="img"
        sx={{ maxHeight: "260px" }}
        src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
      />
      <Typography
        sx={{
          position: "relative",
          top: "-4vw",
        }}
        variant="h1"
        fontSize={{ xs: 36, md: 56 }}
        fontWeight={500}
      >
        Flights
      </Typography>
    </Stack>
  );
};

export default FlightBanner;
