import {useState} from "react";

const Create = () => {
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author, setAuthor] = useState("sai");
    const [isPending, setisPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setisPending(true);
        fetch("http://localhost:8000/blogs",
        {method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setisPending(false);
        })

        


    }
    return ( 
        <div className="create">
            <h2>Add a new Bolg</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input
                type="text"
                required
                value= {title}
                onChange = {(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value = {body}
                onChange={(e)=> {setBody(e.target.value)}}
                >
                </textarea>
                <label>Blog author</label>
                <select
                value = {author}
                onChange={(e)=> {setAuthor(e.target.value)}}>
                    <option value="sai">sai</option>
                    <option value="kiran">kiran</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog.... </button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;