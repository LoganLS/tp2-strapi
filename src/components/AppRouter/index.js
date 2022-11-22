import {Routes, Route} from "react-router-dom";

import MapLeaflet from "../Map";
import Login from "../Login";

export default () => (
  <Routes>
    <Route index element={<MapLeaflet/>}/>
    <Route path="login" element={<Login/>}/>
  </Routes>
)