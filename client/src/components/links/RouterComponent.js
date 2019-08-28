import React from 'react';
import { Route } from 'react-router-dom';
import TvList from '../pages/TvList.js';
import ComputerList from '../pages/ComputerList.js';
import CameraList from '../pages/CameraList.js';
import ApplianceList from '../pages/ApplianceList.js';
import AudioList from '../pages/AudioList.js';
import GadgetList from '../pages/GadgetList.js';


const RouterComponent = () => {
  return(
    <div>
      <Route exact path="/tv" component={TvList} />
      <Route path="/computer" component={ComputerList} />
      <Route path="/camera" component={CameraList} />
      <Route path="/appliance" component={ApplianceList} />
      <Route path="/audio" component={AudioList} />
      <Route path="/gadget" component={GadgetList} />
    </div>
  )
}
export default RouterComponent;
