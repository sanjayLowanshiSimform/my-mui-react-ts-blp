import { Box } from "@mui/material";
import { themes } from "../../theme/themes";

interface GridItemsProps {
  desc: string;
}

const GridItems: React.FC<GridItemsProps> = ({ desc }) => {
  return (
    <Box
      sx={{
        padding: "8px 6px",
        borderRadius: "8px",
        bgcolor: `rgb(${themes.dark["info-700"]})`,
        color: `rgb(${themes.dark["textColor-500"]})`,
        textAlign: "center",
      }}
    >
      {desc}
    </Box>
  );
};

export default GridItems;
