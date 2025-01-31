// import React, { useContext } from "react";
// import Sidebar from "./components/sidebar";
// import Player from "./components/player";
// import Display from "./components/Display";



// const App = () => {

//   const{audioRef,track} = useContext(PlayerContext)
//   return (
    
//       <div className="h-screen w-screen flex flex-col bg-black">
//         <div className="flex flex-grow">
//           <Sidebar />
//           <Display />
//         </div>
//         <Player />
//         <audio ref={audioRef} src={track.file } preload='auto'>

//         </audio>
//       </div>
    
//   );
// };

// export default App;

// import React, { useState, useEffect, useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/sidebar";
// import Player from "./components/player";
// import Display from "./components/Display";
// import { PlayerContext } from "./context/PlayerContext.jsx";
// import Login from "./components/Login";

// const App = () => {
//   const { audioRef, track } = useContext(PlayerContext);  // ✅ Using PlayerContext at top-level

//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setAuth(!!token);
//   }, []);

//   return (
//     <div className="h-screen w-screen flex flex-col bg-black">
//       <div className="flex flex-grow">
//         <Sidebar />
//         <Routes>
//           {/* Login Route */}
//           <Route path="/" element={!auth ? <Login setAuth={setAuth} /> : <Navigate to="/home" />} />

//           {/* Protected Home Route */}
//           <Route
//             path="/home"
//             element={auth ? <Display /> : <Navigate to="/" />} // ✅ Directly rendering Display
//           />
//         </Routes>
//       </div>
//       <Player />
//       <audio ref={audioRef} src={track.file} preload="auto"></audio>
//     </div>
//   );
// };

// export default App;





import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Player from "./components/player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerERContext.jsx";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";  // ✅ Correct import


const App = () => {
    const { audioRef, track } = useContext(PlayerContext);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setAuth(!!token);
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col bg-black">
            <div className="flex flex-grow">
                <Sidebar />
                <Routes>
                    <Route path="/" element={!auth ? <Login setAuth={setAuth} /> : <Navigate to="/home" />} />
                    <Route path="/home" element={auth ? <Display /> : <Navigate to="/" />} />
                </Routes>
            </div>
            <Player />
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
    );
};

export default App;
