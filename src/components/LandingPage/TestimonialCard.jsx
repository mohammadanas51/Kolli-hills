import * as React from "react";

export default function TestimonialCard({ avatar, quote, author, rating }) {
  return (
    <article className="testimonial-card">
      <img 
        src={avatar} 
        alt={`${author}'s profile`} 
        className="testimonial-avatar" 
      />
      <img 
        src={rating} 
        alt={`Rating: ${rating} stars`} 
        className="testimonial-rating" 
      />
      <blockquote className="testimonial-quote">
        <p>{quote}</p>
      </blockquote>
      <p className="testimonial-author">{author}</p>
    </article>
  );
}