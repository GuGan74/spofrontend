import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://spotify-3-btol.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.data); 
        setAuth(true);
        navigate("/home"); 
      } else {
        alert(data.message || "Invalid Credentials!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Try again!");
    }
  };

  return (<>
  <div style={{height:"100vh" , width:"500px" , backgroundColor:"black" ,position:"relative" , left:"-140px"}} className="cover"></div>
    <div style={{marginR:"50px"  ,width:"4000px"}} className="flex items-center justify-center h-screen bg-gray-100">
      
      <div  className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;
