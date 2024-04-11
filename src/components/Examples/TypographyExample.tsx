import { Divider, Stack, Typography } from "@mui/material"

const TypographyExample = () => {
  return(
    <>
    <Stack paddingY={2}>
        <Typography variant="h1">h1, 2.5rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="h2">h2, 2.25rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="h3">h3, 2rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="h4">h4, 1.75rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="h5">h5, 1.5rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="h6">h6, 1.25rem | The quick brown fox</Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="subtitle1">
          subtitle, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="subtitle2">
          subtitle2, 0.875rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="body1">
          body1, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="body2">
          body2, 0.875rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="button">
          button, 1rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="caption">
          caption, 0.75rem | The quick brown fox
        </Typography>
        <Divider textAlign="center"></Divider>
        <Typography variant="overline">
          overline, 0.625rem | The quick brown fox
        </Typography>
      </Stack>
      </>
  )
}

export default TypographyExample