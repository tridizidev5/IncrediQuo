// src/components/HomePage/LatestPosts.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/HomePageStyles/LatestPosts.css";

import post1 from "../../assets/posts/post-1.jpg";
import post2 from "../../assets/posts/post-2.jpg";
import post3 from "../../assets/posts/post-3.jpg";

import ranoldAvatar from "../../assets/authors/ranold.jpg";
import patriciaAvatar from "../../assets/authors/patricia.jpg";
import elaineAvatar from "../../assets/authors/elaine.jpg";

const posts = [
  {
    id: 1,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
    image: post1,
    avatar: ranoldAvatar,
  },
  {
    id: 2,
    title: "The most Popular Business Of the Year",
    author: "Patricia Anderson",
    date: "Apr 27th, 2022",
    image: post2,
    avatar: patriciaAvatar,
  },
  {
    id: 3,
    title: "The most Popular Business Of the Year",
    author: "Elaine Luna",
    date: "Apr 20th, 2022",
    image: post3,
    avatar: elaineAvatar,
  },
];

const LatestPosts = () => {
  const navigate = useNavigate();

  return (
    <section id="blogs" className="section latest-posts">
      <div className="latest-container">
        <h2 className="section__title latest-title">Latest Post</h2>

        <div className="latest-grid">
          {posts.map((post) => (
            <article
              key={post.id}
              className="latest-card"
              onClick={() => navigate(`/post/${post.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="latest-card__image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="latest-card__image"
                />
              </div>

              <div className="latest-card__content">
                <h3 className="latest-card__title">{post.title}</h3>

                <div className="latest-card__meta">
                  <div className="latest-card__author">
                    <div className="latest-card__avatar">
                      <img src={post.avatar} alt={post.author} />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span className="latest-card__date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
