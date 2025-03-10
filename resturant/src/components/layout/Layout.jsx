
// import Header from './Header'
// const Layout = ({ children }) => {
//   return (
//     <>
//     <Header />
//     <div>
//       {children}
//     </div>
//     </>
//   )
// }

// export default Layout
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        {children}
      </div>
      <Footer/>
    </>
  );
};

// Define PropTypes for type checking
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
