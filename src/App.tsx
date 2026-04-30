import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BodyListPage from './pages/BodyListPage';
import BodyDetailPage from './pages/BodyDetailPage';
import HeadListPage from './pages/HeadListPage';
import HeadDetailPage from './pages/HeadDetailPage';
import GalleryPage from './pages/GalleryPage';
import GlossaryPage from './pages/GlossaryPage';
import GuidePage from './pages/GuidePage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bodies" element={<BodyListPage />} />
        <Route path="/bodies/:id" element={<BodyDetailPage />} />
        <Route path="/heads" element={<HeadListPage />} />
        <Route path="/heads/:id" element={<HeadDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </Layout>
  );
}
