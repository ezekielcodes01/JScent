import { BrowserRouter, Routes, Route } from "react-router-dom"; // use 'react-router-dom', not 'react-router'

import PageLayout from "./pagelayout/PageLayout";
import Home from "./pages/Home"; // adjust the path to your Home page component

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} /> {/* index for the default nested route */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
