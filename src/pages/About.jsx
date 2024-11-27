import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
          About Our eLibrary
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-teal-500">Our eLibrary</span>! We are more than just a digital library; we are a hub for knowledge, learning, and personal growth. 
          Whether you're looking for academic resources, casual reading, or professional development tools, our library offers a wealth of content at your fingertips.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Our platform is designed with <span className="font-semibold text-teal-500">seamless navigation</span> and <span className="font-semibold text-teal-500">user-friendly features</span> to ensure that you can find, borrow, and read your favorite books with ease. 
          Explore thousands of titles from various genres and topics, all available on one intuitive platform.
        </p>

        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is simple: to democratize access to knowledge by providing a free, accessible, and diverse collection of books and resources. 
          We aim to create an inclusive space where anyone, regardless of their background or location, can access the information they need to learn, grow, and succeed.
        </p>

        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Why Choose Our eLibrary?</h2>
        <p className="text-lg text-gray-700 mb-6">
          We believe in the power of knowledge and its ability to change lives. Here's why our eLibrary is the right choice for you:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
          <li>📚 <span className="font-semibold text-teal-500">Vast Collection:</span> Access a wide range of books, from timeless classics to the latest publications, all in one place.</li>
          <li>🔍 <span className="font-semibold text-teal-500">Powerful Search:</span> Easily find the books you need using our advanced search and filtering tools.</li>
          <li>🌐 <span className="font-semibold text-teal-500">Accessibility:</span> Read anytime, anywhere. Our platform is available on all devices, ensuring you can read on your terms.</li>
          <li>🔒 <span className="font-semibold text-teal-500">Privacy and Security:</span> We prioritize your data privacy, ensuring your personal information remains secure.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our eLibrary is guided by core values that shape every aspect of our platform:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
          <li>🤝 <span className="font-semibold text-teal-500">Knowledge Sharing:</span> We believe that sharing knowledge helps build stronger, more informed communities.</li>
          <li>💡 <span className="font-semibold text-teal-500">Innovation:</span> We are continuously improving our platform with new features and technologies to enhance the reading experience.</li>
          <li>📚 <span className="font-semibold text-teal-500">Lifelong Learning:</span> We are committed to empowering individuals to learn and grow through accessible and diverse resources.</li>
          <li>🌱 <span className="font-semibold text-teal-500">Sustainability:</span> We strive to create an environmentally responsible platform, reducing the need for physical books while promoting digital reading.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-teal-600 mb-4">What’s Next?</h2>
        <p className="text-lg text-gray-700 mb-6">
          The journey has just begun! We are continuously adding new titles, improving features, and enhancing the overall experience for our readers. 
          Stay tuned for exciting updates that will make accessing your favorite books even easier and more enjoyable.
        </p>

        <p className="text-lg text-gray-700 mt-6">
          Thank you for choosing our eLibrary. We are thrilled to be part of your learning journey and look forward to supporting your growth and discovery!
        </p>
      </div>
    </div>
  );
};

export default About;
