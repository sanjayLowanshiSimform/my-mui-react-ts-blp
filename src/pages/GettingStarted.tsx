// GettingStarted.tsx
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CodeTab from "../components/Tab";
import ButtonExample from "../components/Examples/ButtonExample";

const GettingStarted: React.FC = () => {

  const codeTab1 = [
    {
      label: "NPM",
      content: "$ npm create vite@latest",
    },
    {
      label: "Yarn",
      content: "$ yarn create vite",
    },
    {
      label: "PNPM",
      content: "$ pnpm create vite",
    },
    {
      label: "Bun",
      content: "$ bun create vite",
    },
  ];
  const codeTab2 = [
    {
      label: "NPM",
      content: "npm install @mui/material @emotion/react @emotion/styled",
    },
    {
      label: "Yarn",
      content: "yarn add @mui/material @emotion/react @emotion/styled",
    },
    {
      label: "PNPM",
      content: "pnpm add @mui/material @emotion/react @emotion/styled",
    },
  ];
  const codeTab3 = [
    {
      label: "NPM",
      content: "npm install @mui/icons-material",
    },
    {
      label: "Yarn",
      content: "yarn add @mui/icons-material",
    },
    {
      label: "PNPM",
      content: "pnpm add @mui/icons-material",
    },
  ];

  return (
    <>
      <Box>
        <Typography gutterBottom variant="h1" color="primary">
          Getting Started
        </Typography>
        <Typography sx={{ marginBottom: "16px" }} variant="subtitle1">
          For installing MUI, react and react-dom are peer dependencies, meaning
          you should ensure they are installed before installing Material UI.We
          will use Vite for installing this dependencies. Vite is a build tool
          that aims to provide a faster and leaner development experience for
          modern web projects
        </Typography>
        <CodeTab tabs={codeTab1} />
        <Divider variant="fullWidth"></Divider>
        <Typography gutterBottom variant="h3">Default installation</Typography>
        <Typography variant="subtitle1">
        Run one of the following commands to add Material UI to your project:
        </Typography>
        <CodeTab tabs={codeTab2} />
        <Divider variant="fullWidth"></Divider>
        <Typography gutterBottom variant="h3">Icons</Typography>
        <Typography variant="subtitle1">
        To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN.
        </Typography>
        <CodeTab tabs={codeTab3} />
        <Divider variant="fullWidth"></Divider>
        <ButtonExample />
      </Box>
    </>
  );
};

export default GettingStarted;
