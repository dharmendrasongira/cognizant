import  { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Invalid phone number';

    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    if (!formData.employees) newErrors.employees = 'Select employee size';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));

    if (errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          employees: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }
  };

  const employeeOptions = ['1-10', '11-50', '51-200', '201-500', '500+'];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-extrabold text-center text-black mb-16">
          Get in <span className="text-gray-500"> Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl">
          {/* Name Input */}
          {['name', 'email', 'phone', 'company'].map((field) => (
            <div key={field} className="mb-6">
              <label htmlFor={field} className="block mb-2 text-sm font-medium text-black">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                  errors[field] ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle size={16} className="mr-2" /> {errors[field]}
                </p>
              )}
            </div>
          ))}

          {/* Employees Dropdown */}
          <div className="mb-6">
            <label htmlFor="employees" className="block mb-2 text-sm font-medium text-black">
              Number of Employees
            </label>
            <select
              id="employees"
              value={formData.employees}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.employees ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
            >
              <option value="">Select</option>
              {employeeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.employees && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-2" /> {errors.employees}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
              }`}
              placeholder="Tell us about your project..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-2" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitStatus === 'success'}
            className={`w-full py-3 rounded-lg transition duration-300 ${
              submitStatus === 'success' ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-black text-white '
            }`}
          >
            {submitStatus === 'success' ? (
              <>
                <CheckCircle size={20} className="mr-2 inline" /> Message Sent!
              </>
            ) : (
              <>
                <Send size={20} className="mr-2 inline" /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
