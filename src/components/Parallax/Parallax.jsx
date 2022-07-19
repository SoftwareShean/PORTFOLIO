// import React, { useRef } from "react";
// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import "./Parallax.scss";
// import Pts from "../Cards/Pts";
// import Cc from "../Cards/Cc";
// import Cura from "../Cards/Cura";
// import Covid from "../Cards/Covid";
// import ScrollIntoView from "../Animations/ScrollIntoView";

// export default function Parallax() {
//   const ref = useRef(null);

//   const handleClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });

//   return (
//     <div>
//       <div className="section">
//         <div className="landing">
//           <h1>SOFTWARE SHEAN</h1>
//           <h2>SAAF-TWEHR SHH-IAN</h2>
//           <button onClick={handleClick}>view projects</button>
//         </div>
//       </div>
//       <div className="section" ref={ref}>
//         <div className="projects">
//             <Pts />
//           <Cc />
//           <Cura />
//           <Covid />
//         </div>
//       </div>
//       <div className="section">
//         <div className="fixed mission">
//           <h2>
//             I am committed to making a positive impact. At my root, I am a
//             builder and creator. My work experience is diverse and varied which
//             provides me with a unique skillset. I am action oriented and
//             independent, organized, creative, and most importantly, deeply
//             passionate about my work and the things I create.
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }
