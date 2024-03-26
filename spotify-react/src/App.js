import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';
import Main from './main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;