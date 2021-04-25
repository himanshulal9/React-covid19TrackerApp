import './App.css';
import BodyComponent from './component/body';
import FooterComponent from './component/footer';
import HeaderComponent from './component/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
