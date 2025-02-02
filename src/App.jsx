

import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Player from "./components/player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerERContext.jsx";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";  


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
