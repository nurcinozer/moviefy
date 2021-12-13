import { useState, useEffect } from "react";
import { getTopTracks, getCurrentUserProfile } from "../auth";
import { TrackList, TimeRangeButtons, Loader } from "../components";

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("short");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks.data);

      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);
    };
    fetchData().catch((err) => {
      console.error(err);
    });
  }, [activeRange]);

  return (
    <main>
      <div className="summary">
        <h1>CLICK ON A TIME RANGE</h1>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />
      </div>

      {profile && topTracks && topTracks.items ? (
        <TrackList tracks={topTracks.items} profile={profile} />
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default TopTracks;
