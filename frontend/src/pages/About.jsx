import React from 'react';

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          About Us
        </h1>

        {/* Main Description */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-10 px-4">
          At <span className="text-blue-600 font-semibold">Blog</span><span className="text-black font-semibold">Web</span>, we’re building a home for storytellers, learners, and thought leaders. Our platform empowers individuals to publish meaningful content, share authentic experiences, and engage in valuable conversations across a wide range of topics — from personal growth to tech trends, lifestyle, education, and beyond.
        </p>

        <p className="text-gray-600 text-md leading-relaxed text-center mb-16 px-4">
          We believe that everyone has a story worth telling. Our mission is to cultivate a vibrant blogging ecosystem that supports creativity, encourages open dialogue, and amplifies voices that matter. Whether you're a beginner sharing your first post or a seasoned writer growing your audience, BlogWeb is here to support your journey.
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-blue-200 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">📚 Learn & Share</h3>
            <p className="text-gray-600 text-lg">Explore ideas, expand your knowledge, and contribute your unique perspective to a global audience.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-blue-200 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">✍️ Express Yourself</h3>
            <p className="text-gray-600 text-lg">Write freely, connect with like-minded readers, and build your personal brand as a content creator.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-blue-200 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">🌍 Inspire Change</h3>
            <p className="text-gray-600 text-lg">Your voice can spark curiosity, challenge norms, and drive positive impact — one post at a time.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to make an impact? Join us and start sharing your story with the world!
          </p>
          <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
