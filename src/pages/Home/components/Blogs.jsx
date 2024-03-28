import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://artyss.in/blog/wp-json/wp/v2/posts?per_page=3&_embed")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching media details:", error));
  }, []);

  return (
    <section className="BlogSection">
      <h2 className="Heading">Our Blogs</h2>
      <div className="BlogsWrapper">
        {blogs?.map((blog, index) => (
          <article className="Blog" key={index}>
            <figure className="ImgWrapper">
              <img
                src={blog._embedded["wp:featuredmedia"][0].source_url}
                alt={blog.title.rendered}
              />
            </figure>
            <h3>{blog.title.rendered}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: blog.excerpt.rendered.slice(0, 200) + "...",
              }}
            ></p>
            <a href={blog.link}>Read More</a>
          </article>
        ))}
      </div>
    </section>
  );
}
