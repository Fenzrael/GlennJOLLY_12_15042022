import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Community from "./pages/Community";
import User from './pages/User/User';
import Error from "./pages/Error";

/**
 * Router Creation with React Router Dom
 * @returns Different Path possibilities
 */

function App() {
  // exemple requete fetch
  /* async function request (id) {
    const response = await fetch (`http://localhost:3000/user/${id}` );
    const data = await response.json();
    console.log(data);
  }
  request(18); */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
