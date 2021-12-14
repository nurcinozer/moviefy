import React from "react";
import styled from "styled-components/macro";
import { exportComponentAsPNG } from "react-component-export-image";

const StyledLoginButton = styled.a`
  background-color: var(--green);
  color: white;
  padding: 10px 20px;
  display: inline-block;
  margin: 20px auto;
  border-radius: 30px;
  cursor: pointer;
`;

const params = {
  fileName: "moviefy",
};

const TrackList = ({ tracks, profile }) => {
  const componentRef = React.useRef();

  console.log(tracks);

  return (
    <>
      {tracks && tracks.length ? (
        <div className="poster-container">
          <div className="poster-sections">
            <div id="poster" ref={componentRef}>
              <div id="poster-layout">
                <div className="header">
                  <div className="header-text">
                    <h3>{profile.display_name}'s</h3>
                    <h1>Sound</h1>
                    <h1>Tracks</h1>
                  </div>
                </div>
                <div className="track-list">
                  <div className="tracks">
                    {tracks.slice(0, 10).map((track, i) => (
                      <a
                        className="track-item"
                        key={i}
                        href={track.external_urls.spotify}
                        target="_blank"
                      >
                        <span className="track-num">{i + 1}.</span>
                        <span className="track__item__name-artist">
                          <span className="track__item__artist overflow-ellipsis">
                            {track.artists.map((artist, i) => (
                              <span key={i}>
                                {artist.name}
                                {i !== track.artists.length - 1 && ", "}
                              </span>
                            ))}
                          </span>
                          <span className="track__item__name overflow-ellipsis">
                            {" - "}
                            {track.name}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="footer">
                  <div className="footer-bg"></div>
                </div>
              </div>
            </div>
          </div>
          <StyledLoginButton
            onClick={() => exportComponentAsPNG(componentRef, params)}
            className="download-button"
          >
            DOWNLOAD
          </StyledLoginButton>
        </div>
      ) : (
        <p className="empty-notice">No tracks available</p>
      )}
    </>
  );
};

export default TrackList;
