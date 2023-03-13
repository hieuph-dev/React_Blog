import Home from "./Page/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./Page/Single/Single";
import Write from "./Page/Write/Write";
import Settings from "./Page/Settings/Settings";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
