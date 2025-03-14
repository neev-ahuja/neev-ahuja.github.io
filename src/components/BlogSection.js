import { Github as GitHub,  ArrowRight } from 'lucide-react';


function BlogCard({ title, date, excerpt, link, image }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
        <div className="h-40 bg-gray-200 overflow-hidden">
          <img
            src={image || "/api/placeholder/600/400"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
  
          <a
            href={link}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            Read More <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    );
  }
  function BlogSection() {
    const blogPosts = [
      {
        title: "How AI is Changing Stock Trading",
        date: "March 1, 2025",
        excerpt: "Explore how artificial intelligence technologies are revolutionizing traditional stock trading approaches and creating new opportunities for investors.",
        link: "/blog/ai-stock-trading",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Building My First Generative AI Model",
        date: "February 15, 2025",
        excerpt: "A deep dive into my journey of creating a generative AI model, the challenges I faced, and the lessons I learned along the way.",
        link: "/blog/first-generative-ai",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Tech Behind My Medical Portal",
        date: "January 20, 2025",
        excerpt: "An inside look at the technology stack and architecture decisions that power my medical history portal project.",
        link: "/blog/medical-portal-tech",
        image: "/api/placeholder/600/400",
      },
    ];
  
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Blog</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
  
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All Posts <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    );
  }
    export default BlogSection;  