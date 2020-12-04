import './App.css';
import DraftBoard from './components/DraftBoard';
import Description from './components/Description';
import TeamSelection from './components/TeamSelection';

function App() {
  return (
    <div className="App">
      <Description />
      <TeamSelection />
    </div>
  );
}

export default App;
