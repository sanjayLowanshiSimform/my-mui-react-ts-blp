import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Theming: React.FC = () => {
  return (
    <>
      <Box mb={3}>
        <Typography color="primary" gutterBottom variant="h1">
          Theming
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Customize Material UI with your theme. You can change the colors, the
          typography and much more.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Theme provider
        </Typography>
        <Typography gutterBottom>
          If you wish to customize the theme, you need to use the ThemeProvider
          component in order to inject a theme into your application. However,
          this is optional; Material UI components come with a default theme.
        </Typography>
        <Typography gutterBottom mb={2}>
          ThemeProvider relies on the context feature of React to pass the theme
          down to the components, so you need to make sure that ThemeProvider is
          a parent of the components you are trying to customize. You can learn
          more about this in the API section.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Theme configuration variables
        </Typography>
        <Typography>
          Changing the theme configuration variables is the most effective way
          to match Material UI to your needs. The following sections cover the
          most important theme variables:
        </Typography>
        <List>
          <ListItem divider>
            <ListItemButton >palette</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Typography</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Spacing</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Breakpoints</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Z-Index</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Transition</ListItemButton >
          </ListItem>
          <ListItem divider>
            <ListItemButton >Components</ListItemButton >
          </ListItem>
        </List>
      </Box>
        <Typography gutterBottom variant="h3">
          Typography
        </Typography>
      <Paper elevation={3} square={false}>
      <Stack>
        <Typography paddingX={2} paddingY={1} variant="h1">
          h1, 2.5rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="h2">
          h2, 2.25rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="h3">
          h3, 2rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="h4">
          h4, 1.75rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="h5">
          h5, 1.5rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="h6">
          h6, 1.25rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="subtitle1">
          subtitle, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="subtitle2">
          subtitle2, 0.875rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="body1">
          body1, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="body2">
          body2, 0.875rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="button">
          button, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="caption">
          caption, 0.75rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography paddingX={2} paddingY={1} variant="overline">
          overline, 0.625rem | The quick brown fox
        </Typography>
      </Stack>
      </Paper>
    </>
  );
};

export default Theming;
