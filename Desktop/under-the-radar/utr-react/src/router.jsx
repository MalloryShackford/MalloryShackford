import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import MenuPage from './components/MenuPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </>
  )
);

export default router;
