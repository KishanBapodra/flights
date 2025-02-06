import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { NavLink } from "react-router";

interface TripProps {
  destination: string;
  image: string;
  dateRange: string;
  flightDetails: string;
  price: number;
  href: string;
}

const TripCard = ({
  destination,
  image,
  dateRange,
  flightDetails,
  price,
  href,
}: TripProps) => {
  return (
    <Link component={NavLink} to={href} underline="none" rel="noopener">
      <Card sx={{ boxShadow: 0, display: "flex", height: "100%" }}>
        <CardMedia
          component="img"
          height="134px"
          sx={{
            width: { xs: 152, lg: 192 },
            objectFit: "cover",
            borderRadius: 5,
          }}
          src={image}
          alt={destination}
        />
        <CardContent sx={{ flex: 1, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "2px",
            }}
          >
            <Typography fontWeight={600}>{destination}</Typography>
            <Typography fontWeight={600}>AED {price}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb="2px">
            {dateRange}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {flightDetails}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TripCard;
