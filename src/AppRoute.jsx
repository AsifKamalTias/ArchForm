import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home/index";
import FormBuilder from "./FormBuilder/index";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form/create" element={<FormBuilder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
