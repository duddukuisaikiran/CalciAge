import {useEffect,useState} from "react";
const Fetching = () => {
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((res) => {
           return  res.json();
    })
    .then((data) => {
        setBlogs(data);
    });
    },[]);

    if(blogs==null) {
        <p>loading.....</p>
    }
    if (!Array.isArray(blogs)) {
        return <p>Data is not an array.</p>;
    }
    return (
        <div>
            <h1>Fetched Data</h1>
            {blogs.map((blog) => (
                <div key={blog.Sno}>
                    <p> {blog.ProfilePic}</p>
                    <p >{blog.FirstName}</p>
                    <p>{blog.Gender}</p>
                    <p> {blog.Email}</p>
                    
                </div>
            ))}
        </div>
    )


}
export default Fetching;