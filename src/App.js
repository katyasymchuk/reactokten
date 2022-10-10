import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts";
import {CommentsPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {CommentDetails, PostDetails, UserDetails} from "./components";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={`/users/:id`} element={<UserDetails/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={`/posts/:id`} element={<PostDetails/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={`/comments/:id`} element={<CommentDetails/>}/>

            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default App;
