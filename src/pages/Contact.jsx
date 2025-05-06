import React from 'react';

const Contact = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
    <p className="text-lg leading-relaxed mb-8">
      Feel free to reach out to me for any inquiries, collaborations, or opportunities. You can contact me via email or connect with me on LinkedIn or GitHub.
    </p>
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => window.location.href = 'mailto:Alex.todd40@gmail.com'}
        className="bg-[var(--color-link)] text-white py-2 px-4 rounded hover:bg-[var(--color-highlight)] transition cursor-pointer"
      >
        Email
      </button>
      <button
        onClick={() => window.open('https://www.linkedin.com/in/alextoddbristol/', '_blank')}
        className="bg-[var(--color-link)] text-white py-2 px-4 rounded hover:bg-[var(--color-highlight)] transition cursor-pointer"
      >
        LinkedIn
      </button>
      <button
        onClick={() => window.open('https://github.com/Toddie40', '_blank')}
        className="bg-[var(--color-link)] text-white py-2 px-4 rounded hover:bg-[var(--color-highlight)] transition cursor-pointer"
      >
        GitHub
      </button>
    </div>
  </div>
);

export default Contact;