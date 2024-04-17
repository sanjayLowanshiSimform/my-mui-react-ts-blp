import { Typography } from "@mui/material"

const BestPractice = () => {
  return(<>
        <Typography gutterBottom variant="h1">
        Best Practice?
        </Typography>
        <Typography gutterBottom variant="body1">
        if you already have a theme, style-guide provided by client's end, then start with a theme and add some style overrides and default props that you want all instances of these component to have like we did with button example.
        </Typography>
        <Typography  gutterBottom variant="body1">
        then you can add this custom styled component anywhere you want and if there is any scenario where some tweaking is needed, you can use SX prop there.
        </Typography>
        </>
  )
}

export default BestPractice