import { Box, Button, Stack, Typography } from "@mui/material";
import { deepOrange, pink } from "@mui/material/colors";

const SXProps = () => {
  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h1">
        SX Props
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The sx prop is a shortcut for defining custom styles that has access to
        the theme.
      </Typography>
      <Typography paragraph>
        The sx prop lets you work with a superset of CSS that packages all of
        the style functions exposed in @mui/system. You can specify any valid
        CSS using this prop, as well as many theme-aware properties that are
        unique to MUI System.
      </Typography>
      <Typography>
        It's like inline html styling but it eventually it gets converted into
        css classes. It's also provides features such as shorthands, theme
        access, breakpoints pseudo-selectors etc.
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        padding="16px 0"
        sx={{ minHeight: '300px' }}
      >
        {/* Button component with SX Prop example */}
        <Button
          variant="contained"
          sx={{
            bgcolor: pink[800],
            textTransform: "uppercase",
            borderRadius: "16px",
            "&:hover": {
              bgcolor: deepOrange[600],
              transform: "scale(1.2)",
            },
          }}
        >
          Button
        </Button>
      </Stack>
    </Box>
  );
};

export default SXProps;
