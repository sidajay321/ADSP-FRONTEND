import React from 'react';
import './NotFoundPage.css'; // Import your CSS file if you have any styles

const NotFoundPage = () => {
  return (
    <section id="not-found">
      <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
      <div className="circles">
        <p>404<br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
  );
};

export default NotFoundPage;
