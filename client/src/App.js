import { useState, useEffect } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./auth";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function ScrollToTop() {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState();
  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };
    fetchData().catch((err) => {
      console.error(err);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:5000/login">
            Log into Spotify
          </a>
        ) : (
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path="/top-tracks">
                <h1>Top Tracks</h1>
              </Route>
              <Route path="/">
                <>
                  <button onClick={logout}>Log Out</button>

                  {profile && (
                    <div>
                      <h1>{profile.display_name}</h1>
                      <p>{profile.followers.total} Followers</p>
                      {profile.images.length && profile.images[0].url && (
                        <img src={profile.images[0].url} alt="Avatar" />
                      )}
                    </div>
                  )}
                </>
              </Route>
            </Switch>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
