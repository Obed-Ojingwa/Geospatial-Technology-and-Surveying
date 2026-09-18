const Blog = () => {
  const posts = [
    {
      title: 'The Future of Bathymetric Surveying with Autonomous Vessels',
      excerpt: 'Exploring how autonomous surface vessels are transforming underwater mapping and marine construction.',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      slug: 'the-future-of-bathymetric-surveying-with-autonomous-vessels'
    },
    {
      title: 'The Future of Bathymetric Surveying with Autonomous Vessels',
      excerpt: 'Exploring how autonomous surface vessels are transforming underwater mapping and marine construction.',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      slug: 'the-future-of-bathymetric-surveying-with-autonomous-vessels-2'
    },
    {
      title: 'The Future of Bathymetric Surveying with Autonomous Vessels',
      excerpt: 'Exploring how autonomous surface vessels are transforming underwater mapping and marine construction.',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      slug: 'the-future-of-bathymetric-surveying-with-autonomous-vessels-3'
    }
  ];

  return (
    <section id="blog" className="bg-[#f2f2f2] py-14 sm:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex justify-center">
          <span className="rounded-full bg-[#2b9ae5] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            OUR ARTICLES
          </span>
        </div>

        <h2 className="mb-7 text-center text-[2.2rem] font-black leading-none tracking-[-0.05em] text-[#0e2d4d] sm:text-[3rem]">
          Latest Blog Posts
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded-[1.1rem] bg-white shadow-[0_8px_18px_rgba(12,34,63,0.08)]"
            >
              <div className="h-[250px] w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>

              <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                <time className="mb-2 block text-[0.82rem] text-[#66758f]">{post.date}</time>
                <h3 className="mb-3 text-[1.05rem] font-semibold leading-[1.4] text-[#0e2d4d] sm:text-[1.15rem]">
                  {post.title}
                </h3>
                <p className="text-[0.9rem] leading-6 text-[#4e5f7d]">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-[0.96rem] font-medium text-[#1b5a8a] hover:opacity-80"
                >
                  Read More <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-3 rounded-full bg-[#2b9ae5] px-6 py-3 text-[0.92rem] font-semibold text-white shadow-[0_8px_18px_rgba(43,154,229,0.35)] transition hover:brightness-105"
          >
            View All Blog Post
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;