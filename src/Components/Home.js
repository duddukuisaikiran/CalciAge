import {useState,useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data : blogs,isPending,Error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className = "Home">
            {isPending && <div><h3>loading.....</h3></div>}
            { blogs && <BlogList blogs= {blogs}  title="All Blogs" />}

        </div>
     );
}
export default Home;