import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Blog2_00 = ({id, img, category, title, descrip}) => {
    return (
                <article key={id} className="blog">
                <img
                    src={img}
                    alt="Coffee photo"
                    className="img blog-img"
                />
                <div className="blog-content">
                    <span className="flex">
                    {category} 
                    {category === 'lifestyle' ?(
                        <FaMugSaucer className="ml-1" />
                    ): (
                        <FaGlobe className="ml-1"/>
                    )}
                    </span>
                    <h3>{title}</h3>
                    <p>{descrip}</p>
                    <div className="flex justify-between items-center">
                    <a href="#">read more</a>
                    <button type="button" className="text-red-700
                    bg-red-100 capitalize px-2 py-1 hover:bg-red-300
                    rounded">delete
                    </button>
                    </div>
                </div>
                </article>
    );
};

export default Blog2_00;