import { useState } from "react";


import blogData_00 from '../assets/data/blogData.json';
import Blog_00 from "../components/Blog_00";

const BlogLocalJsonPage_00 = () => {
  const [name, setName] =useState ('max920612') ;
  const [id , setId] = useState(213410300);
  const [blogs_00, setBlogs_00] = useState(blogData_00);
    return (
    <div>
        <section className="blogs">
      <div className="section-title">
        <h2>blog from local json -- {name} , {id} {' '}</h2>
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

export default BlogLocalJsonPage_00;