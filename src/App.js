import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Cart from './components/Cart/Cart';
import Catalog from "./components/Catalog/Catalog";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/main" element={<MainPage store={props.store}/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile" element={<Profile store={props.store}/>}/>
                        <Route path="/catalog" element={<Catalog store={props.store}/>}/>
                        <Route path="/cart" element={<Cart store={props.store}/>}/>
                        <Route path="/login" element={<LoginPage store={props.store}/>}/>
                        <Route path="/register" element={<RegisterPage store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        );
};

export default App;
