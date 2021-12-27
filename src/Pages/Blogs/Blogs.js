import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to DELETE this blog?")) {
      const remainingBlogs = blogData.filter((blog) => blog.id !== id);
      setBlogData(remainingBlogs);
    }
  };
  return (
    <div>
        <Header></Header>
      <div className="conatiner">
        <h1 className="my-5">Recent Blogs</h1>
        <div>
          <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
              {blogData.map((blog) => (
                <Blog key={blog.id} blog={blog} handleDelete={handleDelete}></Blog>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
