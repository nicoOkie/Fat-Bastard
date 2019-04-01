/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import coverdata from 'src/coverdata';


// Styles
import './discography.scss';
/**
 * Code
 */

const Discoscreen = () => (
  <div className="discoscreen">
    {coverdata.map(coverlarge => (
      <div key={coverlarge.id} className="discoscreen-section">
        <img src={coverlarge.cover} className="discoscreen-pic" alt={`cover-${coverlarge.name}`} />
        <p className="discoscreen-text">{coverlarge.name}</p>
      </div>
    ))}
  </div>
);

/**
 * Export
 */
export default Discoscreen;

// class Discoscreen extends React.Component {
//   state = {
//     img: '',
//   }

//   render() {
//     return (
//       <div className="discoscreen">
//         {coverdata.map(coverlarge => (
//           <div key={coverlarge.id} className="discoscreen-section">
//             {() => {
//               this.setState({
//                 img: coverlarge.cover,
//               })
//             }}
//             <img
//               src={this.state.img}
//               onMouseEnter={() => {
//                 this.setState({
//                   img: coverlarge.overcover,
//                 })
//               }}
