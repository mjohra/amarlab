import React from "react";
import { Card, Col } from "react-bootstrap";
import './Blog.css'

const Blog = ({ blog,handleDelete }) => {
  return (
    <div>
      <div className="details">
        <Col>
          <Card>
            <Card.Img className="blog-image" variant="top" src={blog.imageUrl} />
            <Card.Body>
              <Card.Title>
                <h3>{blog.title}</h3>
              </Card.Title>
              <Card.Text className="fw-bold">
                <p>
                  By{" "}
                  <span className="name-text">
                    {blog.author} </span> | {blog.date}, {blog.time}{" "}
                 
                </p>
              </Card.Text>
              <Card.Text className="text-left">
                {blog.content}  <a href={blog.readMoreUrl} target="_blank">
            <button className=" py-1 read">Read More</button>
            </a>
              </Card.Text>
              <div className="">
          <button
            className="btn-sub px-3 py-1"
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete Blog
          </button>
        </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Blog;
