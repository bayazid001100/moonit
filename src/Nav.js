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

import Software from './solutions/Software';
import Enterprise from './solutions/Enterprise';
import Iot from './solutions/Iot';
import ITSecurity from './solutions/ITSecurity';
import Cloud from './solutions/Cloud';
import Deployment from './solutions/Deployment';
import CallCenter from './solutions/CallCenter';
import ITAutomation from './solutions/ITAutomation';
import GreenIT from './solutions/GreenIT';
import Blockchain from './solutions/Blockchain';
import AI from './solutions/AI';
import DigitalMarketing from './solutions/DigitalMarketing';
import ITAudit from './solutions/ITAudit';
import DataCenter from './solutions/DataCenter';
import DataScience from './solutions/DataScience';
import DataRecovery from './solutions/DataRecovery';
import ITTraining from './solutions/ITTraining';
import Website from './solutions/Website';
import NetworkServerMonitoring from './solutions/NetworkServerMonitoring';
import Ecommerce from './solutions/Ecommerce';
import Apps from './solutions/Apps';


function Nav() {
    return (
      <div>
      <Router>
        <Navbar />
        <Switch>
          {/* Navbar */}
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/products' component={Products} />
          <Route path='/solutions' component={Solutions} />
          <Route path='/training' component={Training} />
          <Route path='/career' component={Career} />
          <Route path='/contact' component={Contact} />

          {/* Products */}
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

          {/* Product */}
          {/* Network router */}
          <Route path='/mikrotik' component={Mikrotik} />

          {/* Solutions */}
          <Route path='/software-solutions' component={Software} />
          <Route path='/enterprise-solutions' component={Enterprise} />
          <Route path='/iot-solutions' component={Iot} />
          <Route path='/it-security-solutions' component={ITSecurity} />
          <Route path='/cloud-solutions' component={Cloud} />
          <Route path='/deployment-solutions' component={Deployment} />
          <Route path='/call-center-solutions' component={CallCenter} />
          <Route path='/it-automation-solutions' component={ITAutomation} />
          <Route path='/green-it-solutions' component={GreenIT} />
          <Route path='/blockchain-solutions' component={Blockchain} />
          <Route path='/ai-solutions' component={AI} />
          <Route path='/digital-marketing-solutions' component={DigitalMarketing} />
          <Route path='/it-audit-solutions' component={ITAudit} />
          <Route path='/data-center-solutions' component={DataCenter} />
          <Route path='/data-science-solutions' component={DataScience} />
          <Route path='/data-secovery-solutions' component={DataRecovery} />
          <Route path='/it-training-solutions' component={ITTraining} />
          <Route path='/network-server-monitoring-solutions' component={NetworkServerMonitoring} />
          <Route path='/e-commerce-solutions' component={Ecommerce} />
          <Route path='/website-solutions' component={Website} />
          <Route path='/apps-solutions' component={Apps} />
          
        </Switch>
      </Router>
      </div>
    );
  }
  
  export default Nav;