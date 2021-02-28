import React from "react";
import { Route } from 'react-router-dom';

import MainBoardPage from "./pages/mainBoardPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/profilePage";
import UploadPage from "./pages/uploadPage";


function App() {
  return (
    <>
      <Route component={MainBoardPage} path="/" exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={ProfilePage} path="/profile/:id" exact />
      <Route component={UploadPage} path="/upload" exact />
    </>
  );
}

export default App;
