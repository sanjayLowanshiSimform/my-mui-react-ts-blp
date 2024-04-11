import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const Introduction: React.FC = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h1" color="primary">
        MUI + React
      </Typography>
      <Typography variant="body1">
        Material-UI is a widely used UI framework for React applications,
        renowned for its rich collection of pre-designed components and robust
        theming capabilities. It is built upon Google's Material Design
        principles, offering developers a set of ready-to-use, customizable
        components that adhere to modern design standards. Key features and
        reasons for its popularity include:
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
          <strong>Extensive Component Library:</strong> Material-UI provides a comprehensive
            library of UI components ranging from basic elements like buttons
            and inputs to advanced components such as dialogs, tables, and data
            grids.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <strong>Customization and Theming:</strong> One of the standout features of
            Material-UI is its powerful theming system, allowing developers to
            customize the look and feel of their applications effortlessly.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <strong>Responsive Design:</strong> Material-UI promotes responsive design practices
            by providing a responsive grid system and breakpoints, enabling
            developers to create layouts that adapt seamlessly to different
            screen sizes and devices.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <strong>Community Support and Documentation:</strong> Material-UI boasts a vibrant
            and active community of developers who contribute to its ongoing
            development and provide support through forums.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <strong>Integration with React Ecosystem:</strong> As a framework specifically built
            for React, Material-UI integrates seamlessly with other React
            libraries and tools, enhancing the development experience.
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Introduction;
