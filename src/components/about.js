const About = () => {
    return (
      <div className="bg-gray-100 py-12 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl">
          Welcome to our application! Our platform is dedicated to providing users with seamless 
          registration and login experiences while ensuring top-notch security and accessibility. 
          We aim to empower individuals and businesses by delivering innovative, reliable, and user-friendly solutions.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-4 max-w-4xl">
          Whether you're a first-time visitor or a returning user, we're here to make your experience
          as smooth as possible. Join us as we continue to innovate and bring value to our users
          every step of the way.
        </p>
        <button
          className="bg-gray-900 text-white px-6 py-2 mt-8 rounded-full hover:bg-gray-800 transition-all"
          onClick={() => alert('Learn more button clicked!')}
        >
          Learn More
        </button>
      </div>
    );
  };
  
  export default About;
  