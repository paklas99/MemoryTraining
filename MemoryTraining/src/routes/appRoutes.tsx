import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/Home";


export const AppRoutes: React.FC = () => {
  
    return (
      <Routes>
        <Route path="/" element={<HomePage message="Hello world"/>}/>
        <Route path="/login"/>
        <Route path="/apiCatalog"/>
        <Route path="/consumersPage"/>
      </Routes>
    );
  };