import { useState } from 'react';
import axios from 'axios';
import { FaStar, FaUserCircle, FaEdit, FaIDCard, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const TestimonialSubmission = () => {
  const [form, setForm] = useState({
    name: '',
    title: '',
    company: '',
    imageUrl: '',
    rating: 5,
    content: '',
    date: '',
    location: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('/api/testimonials', {
        name: form.name,
        title: form.title,
        company: form.company,
        image_url: form.imageUrl,
        rating: form.rating,
        content: form.content,
        date: form.date,
        location: form.location
      });

      setStatus('success');
      setSuccessMessage('Thank you! Your testimonial has been submitted and will be reviewed before publishing.');

      // Reset form
      setForm({
        name: '',
        title: '',
        company: '',
        imageUrl: '',
        rating: 5,
        content: '',
        date: '',
        location: ''
      });
    } catch (err: any) {
      setStatus('error');
      setError(err.response?.data?.detail || err.message || 'Failed to submit testimonial');
    }
  };

  return (
    <section id="submit-testimonial" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {status === 'success' && successMessage && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
            {successMessage}
          </div>
        )}

        {status === 'error' && error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">Share Your Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear about your experience working with Terrabyte Global Ltd.
            Please share your testimonial below - it will be reviewed before being published on our website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
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
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization <span className="text-red-500">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Photo URL (optional)
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.imageUrl}
                onChange={handleChange}
              />
              <p className="text-xs text-gray-500 mt-1">
                Provide a URL to your photo (LinkedIn, company website, etc.)
              </p>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <label className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={form.rating}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 5;
                        setForm(prev => ({ ...prev, rating: Math.min(5, Math.max(1, value)) }));
                    }}
                    className="form-input w-16 text-center border border-gray-300 rounded-md"
                  />
                  <span className="ml-2 text-gray-600 text-sm">Rating</span>
                </label>
              </div>
              <div className="ml-3 flex items-baseline text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className={star <= form.rating ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date of Service (e.g., "March 2023")
            </label>
            <input
              id="date"
              name="date"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location (e.g., "Lagos, Nigeria")
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Your Testimonial <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.content}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              Please share your experience working with us - what services you used,
              the results you achieved, and any notable highlights.
            </p>
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
                  Submitting...
                </span>
              ) : (
                'Submit Testimonial'
              )}
            </button>
          </div>
        </form>

        {/* Tips for great testimonials */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Tips for a Great Testimonial</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary mb-2">Be Specific</h4>
              <p className="text-sm text-gray-600">
                Mention specific services you used and measurable results you achieved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Tell Your Story</h4>
              <p className="text-sm text-gray-600">
                Share the challenge you faced, how we helped, and the outcome.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Keep It Authentic</h4>
              <p className="text-sm text-gray-600">
                Use your own voice and be genuine about your experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Mention Location</h4>
              <p className="text-sm text-gray-600">
                Including your location helps others in similar regions relate to your story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSubmission;