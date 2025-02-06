import { Box, Grid2, Typography } from "@mui/material";
import dubai from "../../../assets/dubai.avif";
import TripCard from "../../ui/TripCard";

const dummyTrip = {
  destination: "Istanbul",
  image: dubai,
  dateRange: "Jun 14 — Jun 20",
  flightDetails: "Nonstop · 5 hr 5 min · AJet",
  price: 489,
  href: "/",
};

const PopularTrips = () => {
  return (
    <Box mt={4}>
      <Typography
        fontSize={20}
        fontWeight={600}
        component="h1"
        sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
      >
        Popular trips from Dubai
      </Typography>
      <Grid2 container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((_, item) => (
          <Grid2 key={item} size={{ xs: 12, md: 6 }}>
            <TripCard {...dummyTrip} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default PopularTrips;
