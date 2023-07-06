import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';

import { MainPage } from '@pages/Main';
import { GuestBookPage } from '@pages/Guestbook';
import { LandingPage } from '@pages/Landing';
import { NotFoundPage } from '@pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/:id/book" element={<GuestBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
