import logo from './logo.svg';
import './App.css';
import AppBarComponent from './components/naveBare';
import WhyBdrh from './components/whyBadra';
import ServiceList from './components/services';
import HeaderSlider from './components/slider';
import Encommeing from './components/encommeing';
import Footer from './components/footer';


function App() {
  return (
    <>
    <AppBarComponent/>
    
    <WhyBdrh/>
    <ServiceList/>
    <HeaderSlider/>
    <Encommeing/>
    <Footer/>
    </>
  );
}

export default App;
