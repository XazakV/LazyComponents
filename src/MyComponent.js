import { Box, IconButton } from "@material-ui/core";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function MyComponent() {
  return (
    <Box>
      <IconButton>
        <AutoGraphIcon />
      </IconButton>
      <IconButton>
        <AutorenewIcon />
      </IconButton>
    </Box>
  );
}
