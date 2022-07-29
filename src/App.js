import {Route, Routes } from "react-router-dom";
import AllMeetup from "./Pages/AllMeetup";
import Favourites from "./Pages/Favourites";
import NewMeetsup from "./Pages/NewMeetsup";
import MainNavigation from "./Components/Layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
      <Route path='/' element={<AllMeetup />}>
      </Route>
      <Route path='/fav' element={<Favourites />}>
      </Route>
      <Route path='/new' element={<NewMeetsup />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
