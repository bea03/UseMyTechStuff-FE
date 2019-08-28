import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => (
    <NavLink exact {...props} />
);

const contentInfo = (iconLabel, pageLabel) => {
  return (
    <span><Icon name={iconLabel} />{pageLabel}</span>
  )
};

//const allPage = contentInfo("keyboard", "All Items");
const tvPage = contentInfo("tv", "TV & Home Theater");
const computerPage = contentInfo("desktop", "Desktops & Laptops");
const cameraPage = contentInfo("camera", "Cameras & Videocameras");
const appliancePage = contentInfo("lightbulb", "Appliances");
const audioPage = contentInfo("music", "Audio");
const gadgetPage = contentInfo("tablet alternate", "Gadgets");



const panes = [
    //{ menuItem: <Menu.Item key='all' as={Nav} to={`/all`} content={allPage} /> },
    { menuItem: <Menu.Item key='tv' as={Nav} to={`/tv`} content={tvPage} /> },
    { menuItem: <Menu.Item key='computer' as={Nav} to={`/computer`} content={computerPage} /> },
    { menuItem: <Menu.Item key='camera' as={Nav} to={`/camera`} content={cameraPage} /> },
    { menuItem: <Menu.Item key='appliance' as={Nav} to={`/appliance`} content={appliancePage} /> },
    { menuItem: <Menu.Item key='audio' as={Nav} to={`/audio`} content={audioPage} /> },
    { menuItem: <Menu.Item key='gadget' as={Nav} to={`/gadget`} content={gadgetPage} /> }
]

const TabNav = () => <Tab panes={panes} />

export default TabNav
