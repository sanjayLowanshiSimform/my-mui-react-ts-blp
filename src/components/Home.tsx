// Home.tsx
import { Box } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box>
      <h1># MUI + React</h1>
      <p>
        Material-UI is a widely used UI framework for React applications,
        renowned for its rich collection of pre-designed components and robust
        theming capabilities. It is built upon Google's Material Design
        principles, offering developers a set of ready-to-use, customizable
        components that adhere to modern design standards. Key features and
        reasons for its popularity include:
      </p>
      <ul>
        <li>
          1. **Extensive Component Library**: Material-UI provides a
          comprehensive library of UI components ranging from basic elements
          like buttons and inputs to advanced components such as dialogs,
          tables, and data grids.
        </li>
        <li>
          2. **Customization and Theming**: One of the standout features of
          Material-UI is its powerful theming system, allowing developers to
          customize the look and feel of their applications effortlessly.
        </li>
        <li>
          3. **Responsive Design**: Material-UI promotes responsive design
          practices by providing a responsive grid system and breakpoints,
          enabling developers to create layouts that adapt seamlessly to
          different screen sizes and devices.
        </li>
        <li>
          4. **Community Support and Documentation**: Material-UI boasts a
          vibrant and active community of developers who contribute to its
          ongoing development and provide support through forums.
        </li>
        <li>
          5. **Integration with React Ecosystem**: As a framework specifically
          built for React, Material-UI integrates seamlessly with other React
          libraries and tools, enhancing the development experience.
        </li>
      </ul>
    </Box>
  );
};

export default Home;
