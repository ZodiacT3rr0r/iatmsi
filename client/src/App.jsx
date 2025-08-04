import './App.css'
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SubNavbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App
