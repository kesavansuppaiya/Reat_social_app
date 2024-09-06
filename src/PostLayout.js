import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
   <>
   <main>
         
        <Link to="/postpage/1">Post 1</Link> <br></br>
        <Link to="/postpage/2">Post 2</Link> <br></br>
        <Link to="/postpage/3">Post 3</Link> <br></br>
        <li><Link to="/postpage/newpost" >New Post</Link></li>
        <Outlet />
    </main>
   </>
  )
}

export default PostLayout