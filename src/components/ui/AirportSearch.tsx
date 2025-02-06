import { useState, useEffect, useCallback } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

const API_HOST = import.meta.env.VITE_API_HOST;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_AIRPORT_URL;

interface AirportSearchProps {
  setAirport: (airport: {
    entityId: string;
    skyId: string;
    name: string;
  }) => void;
}

interface Options {
  skyId: string;
  entityId: string;
  name: string;
}

const AirportSearch = ({ setAirport }: AirportSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Options[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAirports = useCallback(async (query: string) => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?query=${query}&locale=en-US`, {
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY,
        },
      });
      const jsonData = await response.json();
      const suggestions: Options[] = jsonData.data.map((item: any) => ({
        skyId: item.skyId,
        entityId: item.entityId,
        name: item.navigation.relevantHotelParams.localizedName,
      }));
      if (suggestions.length > 0) {
        setOptions(suggestions);
      }
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue) {
        fetchAirports(inputValue);
      } else {
        setOptions([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, fetchAirports]);

  const handleOptionSelect = (
    _: React.SyntheticEvent,
    value: string | Options | null
  ) => {
    if (value && typeof value !== "string") {
      setAirport(value);
    }
  };

  return (
    <Autocomplete
      sx={{ width: { xs: "100%", lg: 250 } }}
      options={options}
      onChange={handleOptionSelect}
      getOptionLabel={(option: string | Options) =>
        typeof option === "string" ? option : `${option.name} (${option.skyId})`
      }
      onInputChange={(_, newValue) => setInputValue(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Airport"
          variant="outlined"
          sx={{ width: { xs: "100%", lg: 250 } }}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <li key={key} {...optionProps}>
            {option.name} ({option.skyId})
          </li>
        );
      }}
    />
  );
};

export default AirportSearch;
