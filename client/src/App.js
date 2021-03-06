import { useState, useEffect } from "react";
import { accessToken, logout } from "./auth";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { TopTracks } from "./pages";
import { GlobalStyle } from "./styles";

import logo from "./moviefy-logo.png";
import icon from "./Spotify_Icon_RGB_White.png";

const StyledLoginButton = styled.a`
  background-color: var(--green);
  color: white;
  padding: 15px 20px 10px 20px;
  display: inline-block;
  margin: 20px auto;
  border-radius: 30px;
`;

const StyledLogoutBtn = styled.a`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
  cursor: pointer;
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000/login'
    : 'https://fierce-plains-34115.herokuapp.com/login';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(accessToken);
  }, []);
  return (
    <div className="App" id="App">
      <GlobalStyle />
      <div className="page-wrapper">
        <section className="intro">
          <header role="banner">
            <img src={logo} className="logo" alt="logo" />
          </header>

          <div className="summary">
            <p>
              This website will create a movie soundtrack album cover using your
              most listened tracks on Spotify.
            </p>
          </div>

          <div className="login-area">
            {!token ? (
              <>
                <h3>Let's go!</h3>
                <p>
                  Are you ready to turn your most listened tracks into a movie
                  soundtrack album cover?
                </p>
                <StyledLoginButton href={LOGIN_URI}>
                  <img src={icon} alt="icon" className="icon" /> OPEN SPOTIFY
                </StyledLoginButton>
              </>
            ) : (
              <>
                <StyledLogoutBtn onClick={logout}>Log Out</StyledLogoutBtn>
                <Router>
                  <Switch>
                    <Route path="/">
                      <TopTracks />
                    </Route>
                  </Switch>
                </Router>
              </>
            )}
          </div>
        </section>

        <div className="supporting">
          <div className="explanation">
            <h3>What is this about?</h3>
            <p>
              Moviefy takes your most listened Spotify tracks and creates a
              movie soundtrack album cover so you can share with your friends.
            </p>
            <p>
              <a href="https://nurcin.co" target="_blank">
                Nur??in
              </a>{" "}
              developed this site using React and Express to play with Spotify
              API. Also, the album cover art was designed by{" "}
              <a href="https://yigityurtseven.github.io/" target="_blank">
                Yi??ithan
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
