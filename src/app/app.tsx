import { Route, Routes } from 'react-router-dom';
import { BriefPage } from '../pages/brief';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BriefPage />} />
    </Routes>
  );
}
