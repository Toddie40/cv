import React from 'react';

const Footer = () => (
  <footer className="py-4 text-center text-sm">
    <p>
      © 2025 Alexander Todd —{' '}
      <a href="mailto:Alex.todd40@gmail.com" className="hover:text-highlight">
        Alex.Todd40@gmail.com
      </a>
    </p>
    <div className="space-x-4 mt-2">
      <a href="https://www.linkedin.com/in/alextoddbristol/" className="hover:underline">
        LinkedIn
      </a>
      <a href="https://github.com/Toddie40" className="hover:underline">
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;