import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';


import {MainLayout} from "./layouts";
import {CommentsPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default App;
