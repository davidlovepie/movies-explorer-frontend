import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { NotFound } from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { PopupMenu } from "../PopupMenu/PopupMenu";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { LoaderContext } from "../../context/LoaderContext";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoToolTip/InfoTooltip";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("JWT") || false
  );
  const [isCloseMenu, setIsCloseMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [shortSavedMovies, setShortSavedMovies] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [shortError, setShortError] = useState("");
  const [interfaceError, setInterfaceError] = useState("");
  function onClose() {
    setIsOpen(false);
  }

  function updateProfile(values) {
    setIsLoading(true);
    mainApi
      .updateProfile(values)
      .then((res) => {
        setCurrentUser(res);
        setStatus(true);
      })
      .catch((err) => {
        setStatus(false);
        console.log(err);
        setInterfaceError(err);
      })
      .finally(() => {
        setIsOpen(true);
        setIsLoading(false);
      });
  }

  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    setInterfaceError("");
  }
  function getUserInfo() {
    setIsLoading(true);
    const jwt = localStorage.getItem("JWT");
    if (!jwt) {
      return;
    }
    mainApi
      .getProfileInfo(jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function login(user) {
    setIsLoading(true);
    mainApi
      .login(user)
      .then((res) => {
        localStorage.setItem("JWT", res.token);
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setInterfaceError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function deleteLike(id, handleDeleteLike) {
    return mainApi
      .deleteLike(id)
      .then((res) => {
        const filteredSavedMovies = savedMovies.filter(
          (movie) => movie._id !== id
        );
        const filteredShortSavedMovies = shortSavedMovies.filter(
          (movie) => movie._id !== id
        );
        filteredSavedMovies.length === 0 && setError("Ничего не найдено");
        filteredSavedMovies.length !== 0 && setError("");
        filteredShortSavedMovies.length === 0 &&
          setShortError("Ничего не найдено");
        filteredShortSavedMovies.length !== 0 && setShortError("");

        setSavedMovies(filteredSavedMovies);
        setShortSavedMovies(filteredShortSavedMovies);
        handleDeleteLike();
        return res;
      })
      .catch((err) => console.log(err))
  }
  function like(card, handleLikeLike) {
    return mainApi
      .addLike(card)
      .then((res) => {
        handleLikeLike(res);
        return res;
      })
      .catch((err) => console.log(err))
  }
  function openMenu() {
    setIsCloseMenu(true);
  }

  function createUser(user) {
    setIsLoading(true);
    mainApi
      .registration(user)
      .then((res) => {
        setCurrentUser(res.data);
        login(user);
      })
      .catch((err) => {
        console.log(err);
        setInterfaceError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // имитация загрузки в течение 3 секунд
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getUserInfo();

    Promise.all([
      mainApi.getMovies().then((res) => {
        if (res.data.length === 0) {
          setError("Ничего не найдено");
        } else {
          setError("");
        }
        setSavedMovies(res.data);
        setSearchedSavedMovies(res.data);
        setShortSavedMovies(res.data.filter((movie) => movie.duration < 40));
      }),

      moviesApi.getMovies().then((res) => {
        setShortMovies(res.filter((movie) => movie.duration < 40));
        setMovies(res);
        localStorage.setItem("movies", JSON.stringify(res));
      }),
    ])
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  return (
    <LoaderContext.Provider value={isLoading}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="App">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
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
                    <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/"}>
                      <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                      <Movies
                        movies={movies}
                        like={like}
                        shortMovies={shortMovies}
                        savedMovies={savedMovies}
                        deleteLike={deleteLike}
                        setSavedMovies={setSavedMovies}
                        setStatus={setStatus}
                        setIsOpen={setIsOpen}
                        error={error}
                        setError={setError}
                      />
                      <Footer />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/"}>
                      <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                      <SavedMovies
                        savedMovies={savedMovies}
                        like={like}
                        deleteLike={deleteLike}
                        setSavedMovies={setSavedMovies}
                        movies={savedMovies}
                        shortMovies={shortSavedMovies}
                        error={error}
                        setError={setError}
                        shortError={shortError}
                        setShortError={setShortError}
                        setStatus={setStatus}
                        setIsOpen={setIsOpen}
                      />
                      <Footer />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn} redirect={"/"}>
                      <Header isLoggedIn={isLoggedIn} openMenu={openMenu} />
                      <Profile
                        logOut={logOut}
                        updateProfile={updateProfile}
                        interfaceError={interfaceError}
                        setInterfaceError={setInterfaceError}
                      />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path="/signup"
                  element={
                    <Register
                      createUser={createUser}
                      interfaceError={interfaceError}
                      setInterfaceError={setInterfaceError}
                    />
                  }
                ></Route>
                <Route
                  path="/signin"
                  element={
                    <Login
                      login={login}
                      interfaceError={interfaceError}
                      setInterfaceError={setInterfaceError}
                    />
                  }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
              {isCloseMenu && <PopupMenu closeMenu={setIsCloseMenu} />}
            </>
          )}
          <InfoTooltip isOpen={isOpen} onClose={onClose} status={status} />
        </div>
      </CurrentUserContext.Provider>
    </LoaderContext.Provider>
  );
}

export default App;
