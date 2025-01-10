
import { Box, Typography } from '@mui/material'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout>
        <Box
        sx={{
          my:15,
          textAlign:'center',
          p: 2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
          },
          "& p":{
            textAlign:"justify",
          },
          "@media(max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize: '1.5rem',
            },
          },
        }}
        >
          <Typography variant='h4'>
            Welcome to My resturant
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse, enim! Libero cupiditate repudiandae nam, quibusdam molestiae 
             neque quod incidunt exercitationem nulla ex nobis quam
              numquam quaerat ducimus eum illum veritatis consectetur 
              obcaecati labore impedit? Soluta aperiam omnis eaque deleniti 
              consectetur asperiores, culpa consequatur labore voluptatum,
               consequuntur repellendus iste, tempora ducimus aut tempore 
               aliquam facere amet ad quasi? Itaque nam nemo corporis iusto, 
               ipsam tempora praesentium? Ut, laudantium ad quos, 
               aut qui debitis facere blanditiis sint magnam nam illum ratione.
                Laudantium molestiae libero eligendi nihil laborum, assumenda ea quos
                 enim eum tempora iure vel reiciendis tenetur, 
                 placeat optio quam suscipit quas.
                 </p>
                 <br/>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Modi eos assumenda nobis ad officiis voluptatibus fugiat
                   perferendis numquam doloribus aperiam culpa deleniti rem,
                    soluta harum, ducimus iure voluptatem corrupti molestiae 
                    velit voluptas, odit et libero est! Eum optio repudiandae
                     aliquid voluptates! Ex delectus, perferendis inventore
                      eaque laborum quae consequuntur modi tempora aspernatur 
                      deleniti vero cumque facere accusantium perspiciatis
                       sequi culpa fugit laboriosam! Velit, quo laborum?
                        Dolorum voluptatum amet natus optio facilis hic 
                        consectetur consequatur? Modi nam vel sapiente 
                        natus molestiae quidem laboriosam quis magni quae
                         quasi dolorem ut error, saepe cupiditate officiis! 
                         Labore fugit blanditiis ullam sint nesciunt qui debitis?
                         </p>
        </Box>
    </Layout>
  )
}

export default About
