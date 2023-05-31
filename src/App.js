import logo from './logo.svg';
import MainRouter from './components/Router.js' 
import TopNavigation from './components/TopNavigation';
import './App.css';

function App() {
  return (
    <div id="child_root">
      <TopNavigation/>
      <MainRouter/> 
    </div>
  );
}

export default App;
