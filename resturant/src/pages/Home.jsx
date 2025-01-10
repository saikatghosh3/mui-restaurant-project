
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Banner from '../images/banner.jpeg';
import './../style/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage: `url(${Banner})`}}>
          <div className="headContainer">
            <h1>Food Website</h1>
            <p>Best Food in Bangladesh</p>
            <Link to = "/menu">
            <button> Order Now</button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home
