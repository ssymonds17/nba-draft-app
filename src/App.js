import React, { useState } from 'react';
import Home from './pages/home/Home';
import Draft from './pages/draft/Draft';
import Tournament from './pages/tournament/Tournament';
import History from './pages/history/History';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showDraft, setShowDraft] = useState(false);
  const [showTournament, setShowTournament] = useState(false);

  const hideHome = () => setShowHome(false);
  const goToDraft = () => setShowDraft(true);
  const hideDraft = () => setShowDraft(false);
  const goToTournament = () => setShowTournament(true);
  const handleHomeClick = () => {
    hideHome();
    goToDraft();
  };
  const handleDraftClick = () => {
    hideDraft();
    goToTournament();
  };
  return (
    <>
      {showHome && <Home handleHomeClick={handleHomeClick} />}
      {showDraft && <Draft handleDraftClick={handleDraftClick} />}
      {showTournament && <Tournament />}
      <History />
    </>
  );
}

export default App;
