import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom"

import './App.css';
import Users from "./components/users/Users";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postdetails/PostDetails";

function App() {
  return (
    <div >
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/users'}>all users page</Link></li>
            <li><Link to={'/todos'}>all todos page</Link></li>
            <li><Link to={'/albums'}>all albums page</Link></li>
            <li><Link to={'/comments'}>all comments page</Link></li>
            <li><Link to={'/posts'}>all posts page</Link></li>
        </ul>

        <hr/>
        <Routes>

            <Route path={'users'} element={<Users/>}/>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/posts/:id'} element={<PostDetails/>}/>
            <Route path={'posts'} element={<Posts/>}/>
        </Routes>
    </div>
  );
}

export default App;
