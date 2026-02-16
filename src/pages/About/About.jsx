import { FaBook, FaHeart, FaRocket, FaStar, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <FaBook className="text-3xl" />,
      title: "Vast Collection",
      description: "Access to thousands of books across all genres and categories.",
      color: "from-indigo-600"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Community",
      description: "Connect with fellow book lovers and share recommendations.",
      color: "from-pink-600"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Personalized",
      description: "Get book suggestions based on your reading preferences.",
      color: "from-amber-600"
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Reviews & Ratings",
      description: "Read and write reviews to help others find great books.",
      color: "from-green-600"
    }
  ];

  const stats = [
    { number: "1000+", label: "Books", icon: <FaBook /> },
    { number: "50+", label: "Categories", icon: <FaRocket /> },
    { number: "10K+", label: "Users", icon: <FaUsers /> },
    { number: "4.8★", label: "Rating", icon: <FaStar /> }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
    },
    {
      name: "Mark Smith",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Emma Wilson",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    },
    {
      name: "David Lee",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <div className="bg-white dark:bg-dark-card py-16 md:py-24 border-b border-gray-200 dark:border-dark-hover animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About BookHaven
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are on a mission to connect readers with their next favorite book and build a thriving community of book lovers around the world.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                BookHaven was founded in 2024 with a simple vision: to make book discovery enjoyable and accessible to everyone. We believe that reading has the power to transform lives, expand minds, and connect people across cultures.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, BookHaven has grown into a vibrant community of book enthusiasts who share their passion for reading. Our platform combines the latest technology with a love for literature to create an unforgettable reading experience.
              </p>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-coral/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-dark-card rounded-3xl p-8 border-2 border-gray-300 dark:border-dark-hover shadow-md">
                <FaBook className="text-8xl text-coral/20 mb-4" />
                <p className="text-gray-800 dark:text-gray-200 font-semibold">Join thousands of readers discovering their next favorite book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 dark:bg-dark-card py-16 md:py-24 border-b border-gray-200 dark:border-dark-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-bounce-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Why Choose BookHaven?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover what makes BookHaven the ultimate destination for book lovers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-200 dark:border-dark-hover animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-coral text-white rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 dark:bg-dark-card py-16 md:py-24 border-b border-gray-200 dark:border-dark-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Passionate individuals dedicated to bringing you the best book discovery experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-dark-hover rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all border-2 border-gray-300 dark:border-dark-hover animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="h-64 bg-gray-300 dark:bg-dark-hover overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
                  <p className="text-coral font-semibold mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-coral to-coral/80 py-16 md:py-24 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-scale-up">Ready to Start Your Reading Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of book lovers and discover your next favorite book today
          </p>
          <Link
            to="/readList"
            className="inline-block bg-white text-coral px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105 animate-scale-up"
            style={{ animationDelay: '0.2s' }}
          >
            Explore Books Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;