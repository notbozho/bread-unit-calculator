import "./App.css";
import GramsByBU from "./pages/calculators/GramsByBU";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import GramsByCarbs from "./pages/calculators/GramsByCarbs";
import CarbsAndBUByGrams from "./pages/calculators/CarbsAndBUByGrams";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/grams-by-bu",
                element: <GramsByBU />,
            },
            {
                path: "/grams-by-carbs",
                element: <GramsByCarbs />,
            },
            {
                path: "/carbs-and-bu-by-grams",
                element: <CarbsAndBUByGrams />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

function NavbarWrapper() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
