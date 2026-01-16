import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      {/* Todas las páginas usan MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
