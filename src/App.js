import './App.css';
import Description from './components/Description';
import TeamSelection from './components/TeamSelection';
import DraftView from './components/DraftView';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <Description />
        <TeamSelection />
      </div>
      <div className="draft-page">
        <DraftView />
      </div>
    </div>
  );
}

export default App;
