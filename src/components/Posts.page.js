import React, {useState, useEffect} from "react";
import axios from "axios";

export const PostsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(()=> {
        const fetchPosts = async () => {
            try {
              const data = await axios.get('http://localhost:5000/posts');
              setPosts(data.data);
            } catch(error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const handleCreateNewPost = async () => {
        try {
            await axios.post('http://localhost:5000/posts', {
                id: posts.length + 1,
                title: newTitle,
                content: newContent
            });
            setNewTitle('');
            setNewContent('');
        } catch(error) {
            console.error(error);
            setError(error.message);
        }
    }

    if(isLoading) {
        return <h3>Loading...</h3>
    }

    if(error) {
        return <h3>Error: {error}</h3>
    }

    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Traditional Way</h1>
        <div style={{display: "flex", gap: "4px"}}>
          <input className="inpt" type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input className="inpt" type="text" placeholder="Content" value={newContent} onChange={(e) => setNewContent(e.target.value)}/>
          <button onClick={handleCreateNewPost}>Create new post</button>
        </div>
          {posts.map((post) => (
            <div key={post.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{margin: "15px 0 5px"}}>{post.title}</h2>
                <p style={{margin: "0"}}>{post.content}</p>
            </div>
          ))}
      </div>
    );
  }