import { useEffect } from "react";
import { preLoaderAnim } from "../Animations";
import "./Styles/Preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;

// import motion from "framer-motion"
// import "./Styles/Preloader.css"
// export const  Preloader = () => {
//     const transition = {
//         duration: 1.4,
//         ease: [0.6, 0.01, -0.05, 0.9],
//       };
//   return (

//     <motion.div
//           data-scroll
//           data-scroll-sticky
//           data-scroll-target="#menu-target"
//           animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
//           className="preloader"
//         >
//           <div className="preloader__wrapper">
//             <motion.div
//               initial={{ x: -10, opacity: 0 }}
//               animate={{ x: 0, opacity: 1, transition: { ...transition } }}
//               className="preloader__left"
//             >
//               <img src="svg/adeola-logo-left.svg" alt="adeola logo" />
//             </motion.div>
//             <motion.div
//               initial={{ x: 10, opacity: 0 }}
//               animate={{ x: 0, opacity: 1, transition: { ...transition } }}
//               className="preloader__right"
//             >
//               <p className="preloader__text">HTML</p>
//               <p className="preloader__text">CSS/SCSS</p>
//               <p className="preloader__text">JAVASCRIPT</p>
//               <p className="preloader__text">TYPESCRIPT</p>
//               <p className="preloader__text">REACT JS</p>
//               <p className="preloader__text">NEXT JS</p>
//               <p className="preloader__text">FRAMER MOTION</p>
//             </motion.div>
//           </div>
//         </motion.div>

//   )
// }