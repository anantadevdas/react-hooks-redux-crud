import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Menu } from 'antd';
import { MenuOutlined, AuditOutlined,UsergroupAddOutlined, EditOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import { Login } from "./components/Login";
import {Admin} from "./components/Admin"
import {Blog} from "./components/Blog"
import { CreateContent } from "./components/Content/CreateContent";

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="MainNavigationMenuClass"
        >
          <SubMenu key="SubMenu" icon={<MenuOutlined />} title="Menu">
            <Menu.ItemGroup title="Profile">
              <Menu.Item key="setting:1" icon={<AuditOutlined />}>
                <Link to={"/admin"}>Admin Profile </Link>
              </Menu.Item>
              <Menu.Item key="setting:2" icon={<EditOutlined />}>
                <Link to={"/createContent"}>Create Content </Link>
              </Menu.Item>
              <Menu.Item key="setting:3" icon={<UsergroupAddOutlined />}>
              <Link to={"/login"}>Login</Link>
              </Menu.Item>
            </Menu.ItemGroup>  
            <Menu.ItemGroup title="Blog">
              <Menu.Item key="setting:4" icon={<AuditOutlined />}>
                <Link to={"/blog"}>Blog </Link>
              </Menu.Item>
            </Menu.ItemGroup>

          </SubMenu>
        </Menu>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/createContent" component={CreateContent} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>

      </Router>
    );
  }
}

// ReactDOM.render(<App />, mountNode);

// function App() {
//   return (
//     <Router>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/tutorials" className="navbar-brand">
//           Tutorial " /tutorial "
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/tutorials"} className="nav-link">
//               Tutorials
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/add"} className="nav-link">
//               Add
//             </Link> 
//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//         <Switch>
//           <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/add" component={AddTutorial} />
//           <Route path="/tutorials/:id" component={Tutorial} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
