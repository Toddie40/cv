import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'Please enter your first name.';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Please enter your last name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://ldcxk7qqa4.execute-api.eu-west-1.amazonaws.com/SendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        // Handle success - you might want to show a success message or redirect
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setSuccessfullySubmitted(true);
      } else {
        throw new Error('I\'m sorry, the message failed to send. Try using the email card below.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="max-w-2xl mx-auto p-5">      
      {successfullySubmitted ? (
        <div className='flex flex-col items-center text-center font-bold'>
          <p>Thanks for getting in touch! I'll get back to you as soon as I can.</p>
        </div>
      ): 
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className="contact-form-label">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.first_name}
              </span>
            )}
          </div>
          
          <div>
            <label htmlFor="last_name" className="contact-form-label">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.last_name}
              </span>
            )}
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            {errors.email && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.email}
              </span>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="contact-form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Company Name - Full Width */}
        <div>
          <label htmlFor="company" className="contact-form-label">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
          {errors.company && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.company}
            </span>
          )}
        </div>

        {/* Message - Full Width */}
        <div>
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
          {errors.message && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.message}
            </span>
          )}
        </div>
        <div className='flex justify-center'>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button w-48"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        </div>
      </form>
      }
    </div>
  );
};

export default ContactForm;