import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main.jsx';
import Posts from './pages/Posts.jsx';
import Post from './pages/Post.jsx';
import EditPost from './pages/EditPost.jsx';
import AddPost from './pages/AddPost.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './redux/features/authSlice.js';

function App() {
  
  const dispatch = useDispatch()
console.log(process.env.NODE_ENV)
  useEffect(()=>{
    dispatch(getMe())
  }, [dispatch])
  return (
    <div className="">
       <Layout>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/:id' element={<Post/>}/>
            <Route path='/:id/edit' element={<EditPost/>}/>
            <Route path='/new' element={<AddPost/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <ToastContainer position='bottom-right'/>
        </Layout>
    </div>
  );
}

export default App;
