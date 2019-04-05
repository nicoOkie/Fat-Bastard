

/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Discoscreen from 'src/components/Discography/Discoscreen';

// Action Creators


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
// const mapStateToProps = (state) => {
//   const {
//     sectionDisco,
//     discoPics,
//   } = state;
//   const unitedDiscos = [];
//   let i = 0;
//   for (i = 0; i < sectionDisco.length; i += 1) {
//     const unitedDisco = {
//       Discodata: sectionDisco[i],
//       Discopics: discoPics[i],
//     };
//     unitedDiscos.push(unitedDisco);
//   }


//   return ({
//     unitedDiscos,
//   });
// };

const mapStateToProps = state => ({
  discoImages: state.discoPics,
  discoDatas: state.sectionDisco,
});


/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
const DiscoContainerScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discoscreen);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default DiscoContainerScreen;
