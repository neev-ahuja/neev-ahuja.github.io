import { Github as GitHub, Linkedin, Mail, Calendar } from "lucide-react";
import { useState } from "react";

function ContactSection() {
  const accessKey = "8dffb8f8-c30d-4023-beed-23eb4ca4a6dd";
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, opportunities, or collaborations.
              Feel free to reach out using the form or through my social media profiles.
            </p>

            <div className="space-y-4">
              <a href="mailto:neevahuja888@gmail.com" className="flex items-center text-gray-700 hover:text-indigo-600">
                <Mail size={20} className="mr-3" />
                neevahuja888@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/neev-ahuja-94b742327/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                <Linkedin size={20} className="mr-3" />
                LinkedIn
              </a>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                <Calendar size={20} className="mr-3" />
                Schedule a Meeting
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>

              <p className="text-base text-center text-gray-400">{statusMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
