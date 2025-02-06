import { useLocation } from "react-router";
import { Card, CardContent, Typography, Box } from "@mui/material";

const SearchResults = () => {
  const location = useLocation();
  const { flights } = location.state || { flights: [] };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        p: 3,
      }}
    >
      {flights.data.itineraries?.map((itinerary, index) => {
        const leg = itinerary.legs[0];
        const price = itinerary.price?.formatted || "N/A";

        return (
          <Card
            key={index}
            sx={{
              width: { xs: "300px", lg: "750px" },
              mx: "auto",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6">
                {leg.origin.name} → {leg.destination.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Departure: {new Date(leg.departure).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Arrival: {new Date(leg.arrival).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Duration: {Math.floor(leg.durationInMinutes / 60)}h{" "}
                {leg.durationInMinutes % 60}m
              </Typography>
              <Typography variant="h6" color="primary">
                Price: {price}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default SearchResults;
