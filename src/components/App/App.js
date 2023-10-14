import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import Header from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { NotFound } from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { PopupMenu } from "../PopupMenu/PopupMenu";

function App() {  
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isCloseMenu, setIsCloseMenu] = useState(false);
  const location = useLocation();

  function handleLogin() {}
  function openMenu() {
    setIsCloseMenu(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                <Main />
                <Footer />
                </>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/signin"}>
                <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                <Movies />
         <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/signin"}>
                <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                <SavedMovies />
        <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/signin"}>
                <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login login={handleLogin} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {isCloseMenu && <PopupMenu closeMenu={setIsCloseMenu} />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
