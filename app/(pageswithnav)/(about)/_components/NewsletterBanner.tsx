export default function NewsletterBanner() {
  return (
    <section className="py-20 bg-[#335CFF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/20">
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Stay Updated</h2>
            <p className="text-white/80 text-lg max-w-md">
              Subscribe to our newsletter to receive the latest updates, news, and insights from our community.
            </p>
          </div>
          
          <form className="w-full lg:max-w-md flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-blue-400 outline-none text-slate-900"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
