import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Cart from './components/Cart/Cart';
import Catalog from "./components/Catalog/Catalog";
import News from "./components/News/News";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {auth} from "./firebase";
import {setUser, setUserPhoto} from "./redux/auth-reducer";
import Blog from "./components/Blog/Blog";
import PostContent from "./components/Blog/PostItem/PostContent/PostContent";
import SelectedNew from "./components/News/SelectedNew/SelectedNew";

const App = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user));
                dispatch(setUserPhoto(user.photoURL));
            } else {
                dispatch(setUser(null));
            }
        });
    }, [dispatch]);

    return (
        <div className="app-wrapper">
            <Header/>
            <PrivateRoute>
                <Navbar/>
            </PrivateRoute>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/news" element={
                        <PrivateRoute>
                            <News store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/news/:newIdParam" element={
                        <PrivateRoute>
                            <SelectedNew store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/dialogs/*" element={
                        <PrivateRoute>
                            <DialogsContainer store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/profile" element={
                        <PrivateRoute>
                            <Profile store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/catalog" element={
                        <PrivateRoute>
                            <Catalog store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="blog" element={
                        <PrivateRoute>
                            <Blog store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="blog/:id" element={
                        <PrivateRoute>
                            <PostContent store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/cart" element={
                        <PrivateRoute>
                            <Cart store={props.store}/>
                        </PrivateRoute>}>
                    </Route>
                    <Route path="/login" element={<LoginPage store={props.store}/>}/>
                    <Route path="/register" element={<RegisterPage store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
