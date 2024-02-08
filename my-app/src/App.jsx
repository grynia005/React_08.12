import "./App.css";
import { Footer } from "./coponents/Footer/Footer";
import { Header } from "./coponents/Header/Header";
import { Main } from "./coponents/Main/Main";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Users } from "./pages/Users";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { HomeOneSection } from "./pages/Page_Home_1";
import { HomeTwoSection } from "./pages/Page_Home_2";
import { HomeThreeSection } from "./pages/Page_Home_3";
import { HomeFourSection } from "./pages/Page_Home_4";
import { HomeThree } from "./coponents/HomeThreeBox/HomeThreeBox";
import { UserInfo } from "./pages/UserInfo";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index="true" element={<HomeOneSection />} />
          <Route path="/home2" element={<HomeTwoSection />} />
          <Route path="/home3" element={<HomeThreeSection />} />
          <Route path="/home4" element={<HomeFourSection />} />
          <Route path="/home5" element={<Users />} />
          <Route path="/home5/:id" element={<UserInfo />} />
          <Route path="*" element={<NotFoundPage to={"/"} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
