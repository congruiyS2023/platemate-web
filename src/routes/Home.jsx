import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.location.href = '/login/restaurant';
  }, []);

  return null;
};

export default Home;
