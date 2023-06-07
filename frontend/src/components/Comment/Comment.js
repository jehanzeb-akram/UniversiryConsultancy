import React from 'react';
import './comment.css';
export default function Comment({ comment, imageSource }) {
  return (
    <div className="single-comment">
      <div className="commentedBy">
        <img src={imageSource} className="commentedBy-img" alt="person"></img>
        <div className="commentedBy-content">
          <h3 className="commentedBy-content-name">{comment.commentedBy}</h3>
          <p className="commentedBy-content-date">{comment.date}</p>
        </div>
      </div>
      <div className="comment">
        <p className="comment-data">{comment.comment}</p>
      </div>
    </div>
  );
}
