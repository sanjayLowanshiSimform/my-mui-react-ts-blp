import { Box, Button, Stack, Typography } from "@mui/material";

const ComponentProps = () => {
  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h1">
        Component Props(API)
      </Typography>
      <Typography paragraph>
        Material-UI components are highly customizable, and they allow
        developers to quickly build sleek and modern user interfaces. The
        Material-UI Component API is well-documented and provides developers
        with a wide range of components for various UI needs, including buttons,
        forms, navigation elements, dialogs, cards, and more.
        Component API is available for every component provided by MUI. You can change how components look and feel with predefined props.
        So, Before you dive deep into css, just take a quick look into Component API.
      </Typography>

      <Stack direction="row" justifyContent='center' alignItems='center' gap={2} padding="16px 0" sx={{ minHeight: '300px' }}>


      {/* Button component with API examples */}
      <Button variant="contained" disableElevation>
        Component API
      </Button>
      <Button variant="outlined" disableElevation disableRipple>
        Component API
      </Button>
      </Stack>


    </Box>
  );
};

export default ComponentProps;
