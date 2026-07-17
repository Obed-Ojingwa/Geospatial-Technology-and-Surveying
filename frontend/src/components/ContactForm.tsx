import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const response = await axios.post('/api/contact', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message
      });
      setStatus('success');
      // reset form
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setError(err.response?.data?.detail || err.message || 'An error occurred');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark disabled:opacity-50 transition`}
            >
              {status === 'loading' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
              Thank you! Your message has been sent. We'll get back to you shortly.
            </div>
          )}
          {status === 'error' && error && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}
        </form>
        {/* Optional: info */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Our Office</h3>
            <p className="text-gray-600">
              Stephen Avenue, Mission House, Lotto Area 6, Obafemi Owode, Ogun, Nigeria
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Contact Info</h3>
            <p className="text-gray-600">
              <span className="block">johnabodunwa@gmail.com</span>
              <span className="block">+2348103791497</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;