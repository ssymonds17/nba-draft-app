import React, { useState } from 'react';
import Home from './pages/home/Home';
import Draft from './pages/draft/Draft';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showDraft, setShowDraft] = useState(false);

  const hideHome = () => setShowHome(false);
  const goToDraft = () => setShowDraft(true);
  const handleHomeClick = () => {
    hideHome();
    goToDraft();
  };
  return (
    <>
      {showHome && <Home handleClick={handleHomeClick} />}
      {showDraft && <Draft />}
    </>
  );
}

export default App;
