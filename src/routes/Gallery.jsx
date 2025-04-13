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
            posts.map((post) => 
              <Card 
                name={post.name} 
                speed={post.speed} 
                color={post.color} 
                created_at={post.created_at} 
              />
            ) 
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
