import React from "react";
import './App.css';
import {Route, Routes} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


class App extends React.Component<{}> {
    componentDidMount() {
        this.props.getAuth
    }

    render() {
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app_wrapper_content'>
                    <Routes>
                        {/*<Route path="/profile/:userId"*/}
                        {/*       element={<ProfileContainer/>}*/}
                        {/*/>*/}
                        <Route path="/profile/*"
                               element={<ProfileContainer/>}
                        />
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}
                        />
                        <Route path="/users"
                               element={<UsersContainer/>}
                        />
                        <Route path="/login"
                               element={<LoginPage/>}
                        />
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
