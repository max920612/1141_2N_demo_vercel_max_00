import { useState, useEffect } from "react";


//import blogData_00 from '../assets/data/blogData.json';
import Blog_00 from "../components/Blog_00";

const api_url = 'http://localhost:5000/api/blog_00';

const BlogNodePage_00 = () => {
  const [name, setName] =useState ('max920612') ;
  const [id , setId] = useState(213410300);
  const [blogs_00, setBlogs_00] = useState([]);

  const fetchBlogFromNodeSever = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs' , data);
      setBlogs_00(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchBlogFromNodeSever();
  }, []);

    return (
    <div>
        <section className="blogs">
      <div className="section-title">
        <h2>blog from Node -- {name} , {id} {' '}</h2>
      </div>
      <div className="blogs-center">
        {blogs_00.map((item)=>{
          const {id, title, descrip, category, img} = item;
          return (
            <Blog_00  
            key={id} 
            id={id} 
            title={title} 
            descrip={descrip} 
            category={category} 
            img={img}/>
          );
        })};
      </div>
    </section>
    </div>
    );
};

export default BlogNodePage_00;