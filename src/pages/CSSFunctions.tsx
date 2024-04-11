/* eslint-disable react/react-in-jsx -- Unware of jsxImportSource */
/* @jsxImportSource @emotion/react */
import { Box, Button, Stack, Typography} from "@mui/material";
import { pink } from "@mui/material/colors";
import { css } from "@emotion/react"

const CSSFunctions = () => {
  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h1">
        CSS Functions
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        padding="16px 0"
        sx={{ minHeight: '300px' }}
      >
        {/* Button component with CSS Functions example */}
        <Button
          variant="contained"
          css={css`
              background-color: ${pink[500]};
              border-radius: 0;
              :hover{
                border-radius: 8px;
                background-color: #fff;
                border: 1px solid ${pink[500]};
                color: ${pink[500]};
                box-shadow: 4px 6px 1px 2px ${pink[500]};
              }
            `}
        >
          Click me!
        </Button>
      </Stack>
    </Box>
  );
};

export default CSSFunctions;
