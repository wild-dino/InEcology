import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Cart from './Pages/Cart/Cart';
import Catalog from "./Pages/Catalog/Catalog";
import News from "./Pages/Articles/News";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {auth} from "./firebase";
import {setUser, setUserPhoto} from "./Redux/auth-reducer";
import Blog from "./Pages/Blog/Blog";
import PostContent from "./Components/PostItem/PostContent/PostContent";
import SelectedNew from "./Pages/Articles/SelectedArticle/SelectedNew";
import CollectionPoints from "./Pages/CollectionPoints/CollectionPoints";

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
                    <Route path="/" element={
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
                    <Route path="collection-points" element={
                        <PrivateRoute>
                            <CollectionPoints store={props.store}/>
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
