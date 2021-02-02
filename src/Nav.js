import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import Solutions from './components/pages/Solutions';
import Training from './components/pages/Training';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import NetworkRouter from './components/pages/NetworkRouter';
import NetworkSwitch from './components/pages/NetworkSwitch';
import Fttx from './components/pages/Fttx';
import WirelessNetworking from './components/pages/WirelessNetworking';
import WirelessRouter from './components/pages/WirelessRouter';
import NetworkingCables from './components/pages/NetworkingCables';
import FiberOpticNetworkingAccessories from './components/pages/FiberOpticNetworkingAccessories';
import LanNetworkingAccessories from './components/pages/LanNetworkingAccessories';
import NetworkTestingEquipment from './components/pages/NetworkTestingEquipment';
import CatvProducts from './components/pages/CatvProducts';
import ServerRackCabinet from './components/pages/ServerRackCabinet';
import Accessories from './components/pages/Accessories';


import Mikrotik from './product page/network router/Mikrotik';
function Nav() {
    return (
      <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/products' component={Products} />
          <Route path='/solutions' component={Solutions} />
          <Route path='/training' component={Training} />
          <Route path='/career' component={Career} />
          <Route path='/contact' component={Contact} />
  
          <Route path='/network-router' component={NetworkRouter} />
          <Route path='/network-switch' component={NetworkSwitch} />
          <Route path='/fttx' component={Fttx} />
          <Route path='/wireless-networking' component={WirelessNetworking} />
          <Route path='/wireless-router' component={WirelessRouter} />
          <Route path='/networking-cables' component={NetworkingCables} />
          <Route path='/fiber-optic-networking-accessories' component={FiberOpticNetworkingAccessories} />
          <Route path='/lan-networking-accessories' component={LanNetworkingAccessories} />
          <Route path='/network-testing-equipment' component={NetworkTestingEquipment} />
          <Route path='/catv-products' component={CatvProducts} />
          <Route path='/server-rack-cabinet' component={ServerRackCabinet} />
          <Route path='/accessories' component={Accessories} />

          <Route path='/mikrotik' component={Mikrotik} />
        </Switch>
      </Router>
      </div>
    );
  }
  
  export default Nav;