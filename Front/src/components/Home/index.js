/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// import headerbackgroundData from 'src/headerbackground';
import balkan from '../../assets/images/Balkan.svg';
import logo from '../../assets/images/Logo_FAT.svg';
import main from '../../assets/images/Main.svg';
import phono from '../../assets/images/Phono.svg';
import tigre from '../../assets/images/Tigre.svg';

// Styles
import './home.scss';
/**
 * Code
 */

const Home = () => (
  <div className="home" id="home">
    <img className="home-logo" src={logo} alt="bannière" />
    <div className="home-flexlogo">
      <img className="home-circle" src={main} alt="badge" />
      <img className="home-circle" src={balkan} alt="badge" />
      <img className="home-circle" src={tigre} alt="badge" />
      <img className="home-circle" src={phono} alt="badge" />
    </div>
  </div>
);


// const Home = () => {
//   const {
//     backgroundTigre,
//     backgroundPhono,
//     backgroundLogo,
//     backgroundMain,
//     backgroundBalkan,
//   } = headerbackgroundData;

//   return (
//     <div className="home" id="home">
//       <img className="home-logo" src={`${backgroundLogo}`} alt="bannière" />
//       <div className="home-flexlogo">
//         <img className="home-circle" src={`${backgroundTigre}`} alt="badge" />
//         <img className="home-circle" src={`${backgroundPhono}`} alt="badge" />
//         <img className="home-circle" src={`${backgroundMain}`} alt="badge" />
//         <img className="home-circle" src={`${backgroundBalkan}`} alt="badge" />
//       </div>
//     </div>
//   );
// };

/**
 * Export
 */
export default Home;
