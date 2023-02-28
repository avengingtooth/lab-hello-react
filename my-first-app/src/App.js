import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Content';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <section className='section1'>
        <Navbar></Navbar>
        <Content></Content>
      </section>
      <section>
        <Info></Info>
      </section>
    </div>
  );
}

export default App;
