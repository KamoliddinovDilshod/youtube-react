import { Route, Routes } from "react-router-dom";
import Channel from "../channel/channel";
import Home from "../home/home";
import Video from "../video/video";

const AuthenticationApp = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/video' element={<Video />} />

      </Routes>
    </div>
  );
};

export default AuthenticationApp;
