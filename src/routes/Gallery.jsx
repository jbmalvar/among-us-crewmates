import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client.js'
import Card from '../components/Card'
import './Gallery.css'

function Gallery() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
        const {data} = await supabase
            .from('Crewmates')
            .select()
            .order('created_at', { ascending: true });
        setPosts(data);
    };
    fetchPosts();
  }, []);
  
  const navigate = useNavigate();

  return (
    <>
      <div className="Gallery">
        <h1>{'Gallery'}</h1>
        {
            posts && posts.length > 0 ?
            <div className="card-container">
              {posts.map((post, index) => 
                <Card 
                  key={index}
                  name={post.name} 
                  speed={post.speed} 
                  color={post.color} 
                  created_at={post.created_at} 
                  onEdit={() => navigate(`/update?id=${post.id}`)} 
                  onDelete={async () => {
                    const { error } = await supabase
                      .from('Crewmates')
                      .delete()
                      .eq('id', post.id);
                    if (error) {
                      console.error(error);
                      alert(error.message);
                    } else {
                      alert('Crewmate Deleted!');
                      setPosts(posts.filter(p => p.id !== post.id));
                    }
                  }}
                />
              )}
            </div>
            : 
            <>
              <h2>{'You haven\'t made anything yet'}</h2>
              <button className="createButton" onClick={() => navigate('/create')}>
                Create One Here!
              </button>
            </>
        }
      </div>  

    </>
  )
}

export default Gallery
