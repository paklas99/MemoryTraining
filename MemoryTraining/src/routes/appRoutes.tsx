import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/Home";
import { LoginPage } from "../pages/LoginPage/LoginPage"



export const AppRoutes: React.FC = () => {
  
    return (
      <Routes>
        <Route path="/" element={<HomePage message="Hello world"/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/apiCatalog"/>
        <Route path="/consumersPage"/>
      </Routes>
    );
  };