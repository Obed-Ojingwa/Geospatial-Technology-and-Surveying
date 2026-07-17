const Blog = () => {
  const posts = [
    {
      title: 'How Drones Are Revolutionizing Land Surveying',
      excerpt: 'Discover the latest advancements in drone technology that are making land surveys faster, safer, and more accurate.',
      date: 'May 15, 2024',
      image: 'https://images.unsplash.com/photo-1520545534574-8eedce55d276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHxkcj9lfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      title: 'Understanding GIS: From Basics to Advanced Applications',
      excerpt: 'A comprehensive guide to Geographic Information Systems and how they empower decision-making across industries.',
      date: 'Apr 22, 2024',
      image: 'https://images.unsplash.com/photo-1551697625-9b3e9a55d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxnaXN8ZW58MHx8fHwxNzIxNDU2MDAwfHA&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      title: 'The Future of Bathymetric Surveying with Autonomous Vessels',
      excerpt: 'Exploring how autonomous surface vessels are transforming underwater mapping and marine construction.',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxzdXJ2ZXljeSUyMGltYWdlfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=400'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Latest Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                <h3 className="text-xl font-semibold text-primary mb-2 hover:underline">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-primary font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            View All Blog Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;