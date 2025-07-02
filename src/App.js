import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Cart from './components/CartPage/Cart';
import ContactPage from "./components/ContactPage/ContactPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;