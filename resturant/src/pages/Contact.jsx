
import Layout from '../components/layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb:2 }} } >
       <Typography variant='h4'  > Contanct my resturant</Typography>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Neque tempora maiores dolor incidunt pariatur perferendis 
          consequatur quasi explicabo ipsum eveniet, 
          odio iure vero, architecto earum itaque? Nisi vero suscipit
           dignissimos est sint nesciunt illum dolorem omnis sunt
            consequuntur facilis, officia fugiat ad voluptates
             repudiandae hic sequi earum sit excepturi exercitationem.
             </p>
       
       </Box>
       <TableContainer component={Paper}>
        <Table aria-label = "contact table">
          <TableHead>
            <TableRow>
              <TableCell>
                Contanct Details
              </TableCell>
            </TableRow>
            </TableHead> 
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon/> 123456767 (toroll free)
                </TableCell>
              </TableRow>
            </TableBody>

        </Table>

       </TableContainer>
    </Layout>
  )
}

export default Contact
