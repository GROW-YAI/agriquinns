// import React, { useState } from 'react';
// import logo from '../assets/images/logo.jpg';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full z-10 flex justify-between py-4 px-4 bg-gray-200 text-green-700 md:px-10">
//         <img src={logo} alt="Agriquinns Logo" className="w-24 h-10 mr-4 md:w-36 md:h-16"></img>
//         <div className="flex items-center md:hidden">
//           <button
//             className="text-green-700 hover:text-black"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <svg
//                 xmlns="(link unavailable)"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="(link unavailable)"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`flex flex-col items-center md:flex-nowrap md:space-x-8 p-4 text-lg md:text-xl ${
//             menuOpen ? 'block' : 'hidden'
//           }`}
//         >
//           <li className="mb-4">
//             <Link to="/" className="hover:text-black font-bold"> Home </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/about" className="hover:text-black font-bold"> About Us </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/products" className="hover:text-black font-bold"> Products </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/testimonials" className="hover:text-black font-bold"> Testimonials </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/blog" className="hover:text-black font-bold"> Blog </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-black font-bold"> Contact Us </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-10 flex justify-between py-4 px-4 bg-gray-200 text-green-700 md:px-10">
        <img src={logo} alt="Agriquinns Logo" className="w-24 h-10 mr-4 md:w-36 md:h-16"></img>
        <div className="flex items-center md:hidden">
          <button
            className="text-green-700 hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="(link unavailable)"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="(link unavailable)"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`hidden md:flex md:space-x-8 p-4 text-lg md:text-xl lg:text-2xl xl:text-3xl`}
        >
          <li className="mb-4 md:mb-0">
            <Link to="/" className="hover:text-black font-bold" > Home </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link to="/about" className="hover:text-black font-bold"> About Us </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link to="/products" className="hover:text-black font-bold"> Products </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link to="/testimonials" className="hover:text-black font-bold"> Testimonials </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link to="/blog" className="hover:text-black font-bold"> Blog </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black font-bold"> Contact Us </Link>
          </li>
        </ul>
        <ul
          className={`flex flex-col items-center md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        >
          <li className="mb-4">
            <Link to="/" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> Home </Link>
          </li>
          <li className="mb-4">
            <Link to="/about" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> About Us </Link>
          </li>
          <li className="mb-4">
            <Link to="/products" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> Products </Link>
          </li>
          <li className="mb-4">
            <Link to="/testimonials" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> Testimonials </Link>
          </li>
          <li className="mb-4">
            <Link to="/blog" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> Blog </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black font-bold" onClick={() => setMenuOpen(!menuOpen)}> Contact Us </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
