
import Layout from '../components/layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
const Contact = () => {
  return (
    <Layout>
       <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb:2 }} } >
       <Typography variant='h4'  > Contanct my resturant</Typography>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Neque tempora maiores dolor incidunt pariatur perferendis 
          consequatur quasi explicabo ipsum eveniet, 
          odio iure vero, architecto earum itaque? Nisi vero suscipit
           dignissimos est sint nesciunt illum dolorem omnis sunt
            consequuntur facilis, officia fugiat ad voluptates
             repudiandae hic sequi earum sit excepturi exercitationem.
             </p>
       
       </Box  >
       <Box  sx={{m:3, width:"600px", ml:10, "@media(max-width:600px)":{
        width:"300px"
       }}}>
       <TableContainer component={Paper}>
        <Table aria-label = "contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'black', color:'white', }} align='center'>
                Contanct Details
              </TableCell>
            </TableRow>
            </TableHead> 
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon sx={{color: 'red', pt:1}}/> 123456767 (toll free)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                 <MailIcon sx={{color: 'skyblue  ', pt:1}}/> help@gmail.com
                </TableCell>
              </TableRow>
                <TableRow>
                <TableCell>
                 <PhoneCallbackIcon sx={{color: 'green ', pt:1}}/> help@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>

        </Table>

       </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact
