import React from 'react';
import {BrowserRouter as RouterWeb, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingpage/LandingPage";
import WorkTogether from "./pages/worktogether/WorkTogether";
import Form from "./pages/form";
export default function Router(props){
    return <RouterWeb>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/workTogether' element={<WorkTogether />} />
        <Route exact path='/contactForm' element={<Form />} />
      </Routes>
    </RouterWeb>
}