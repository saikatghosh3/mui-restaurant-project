
import { Box, Typography} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'center', bgcolor:"#1A1A19", color: 'white', p: 3}}>
     {/* icons  */}
     <Box
     sx={{
        my:3,
        "& svg":{
            fontSize: "60px",
            cursor:"pointer",
            mr: 2, 
        },
        "& svg:hover":{
            color: "goldenrod",
            transform: "translateX(5px)", 
            transition: "all 400ms",
        },
     }}
     >
     <InstagramIcon/>
     <YouTubeIcon/>
     <GitHubIcon/>
     <FacebookIcon/>
     </Box>
  <Typography variant='h5' sx={{"@media (max-width:600px)":{
    fontSize:"1rem",
  }}}>
    All Rights Reserved &copy: Saikat Ghsoh
  </Typography>

      </Box>
    </div>
  )
}

export default Footer
