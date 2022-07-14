import React from "react";
import MovieBanner from "../../components/movieBanner/MovieBanner";
import Navbar from "../../components/navbar/Navbar";
import "./mainView.css";

const MainView = () => {
  return (
    <div className="main_view">
       <Navbar />
       <MovieBanner />
    </div>
  )
}

export default MainView;