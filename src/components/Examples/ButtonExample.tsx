import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const ButtonExample = () => {
  return (
    <>
      <Typography
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          padding: "16px",
        }}
        gutterBottom
        variant="h3"
      >
        Button Variants
      </Typography>
      {/* contained Buttons */}
      <Typography variant="h4">Contained</Typography>
      <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
      {/* Outlined Buttons */}
      <Typography variant="h4">Outlined</Typography>
      <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      {/* Text Buttons */}
      <Typography variant="h4">Text</Typography>
      <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
      </Stack>
      {/* Sizes */}
      <Typography variant="h4">Sizes</Typography>
      <Stack>
        <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
          <Button variant="contained" size="large" color="primary">
            Large
          </Button>
          <Button variant="contained" size="large" color="secondary">
            Large
          </Button>
          <Button variant="contained" size="large" color="info">
            Large
          </Button>
          <Button variant="contained" size="large" color="success">
            Large
          </Button>
          <Button variant="contained" size="large" color="warning">
            Large
          </Button>
          <Button variant="contained" size="large" color="error">
            Large
          </Button>
        </Stack>
        <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
          <Button variant="contained" size="medium" color="primary">
            medium
          </Button>
          <Button variant="contained" size="medium" color="secondary">
            medium
          </Button>
          <Button variant="contained" size="medium" color="info">
            medium
          </Button>
          <Button variant="contained" size="medium" color="success">
            medium
          </Button>
          <Button variant="contained" size="medium" color="warning">
            medium
          </Button>
          <Button variant="contained" size="medium" color="error">
            medium
          </Button>
        </Stack>
        <Stack spacing={2} paddingY={3} direction="row" justifyContent="center">
          <Button variant="contained" size="small" color="primary">
            Small
          </Button>
          <Button variant="contained" size="small" color="secondary">
            Small
          </Button>
          <Button variant="contained" size="small" color="info">
            Small
          </Button>
          <Button variant="contained" size="small" color="success">
            Small
          </Button>
          <Button variant="contained" size="small" color="warning">
            Small
          </Button>
          <Button variant="contained" size="small" color="error">
            Small
          </Button>
        </Stack>
      </Stack>
      {/* Buttons with Label */}
      <Typography variant="h4">Buttons with Label</Typography>
      <Stack spacing={2} paddingY={2} direction="row" justifyContent="center">
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </>
  );
};

export default ButtonExample;
