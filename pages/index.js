import PostForm from "../components/PostForm";() { const socials = [];

const posts = [ { title: 'Sports & Football Predictions', desc: 'Match analysis, combo ideas, and football updates every day.', }, { title: 'Trending Sports Videos', desc: 'Funny football moments, reactions, and trending sports clips.', }, { title: 'News, Books & Stories', desc: 'Personal updates, motivation, and entertainment content.', }, ];

return ( <div className="min-h-screen bg-black text-white"> <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-900 to-black"> <div className="max-w-4xl mx-auto"> <h1 className="text-5xl md:text-7xl font-bold mb-6"> Logical Sports Media </h1>

<p className="text-xl md:text-2xl text-gray-300 mb-8">
        Sports News • Football Predictions • Videos • Books • Entertainment
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.tiktok.com"
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          Follow on TikTok
        </a>

        <a
          href="https://www.youtube.com"
          className="px-6 py-3 rounded-2xl border border-white hover:bg-white hover:text-black transition"
        >
          Watch Videos
        </a>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      What I Post
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
          <p className="text-gray-400">{post.desc}</p>
        </div>
      ))}
    </div>
  </section>

  

  <section className="px-6 py-20 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Welcome To Logical Sports Media ⚽🔥

  <section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Our Story 📖</h2>
    <p className="text-gray-400 text-lg leading-relaxed">
      Logical Sports Media started with a vision to bring football predictions, sports news,
      entertainment, and educational content all in one place. The goal is to build a global
      platform where people can read, watch, and learn from daily updates, while enjoying
      sports content and media from around the world.
    </p>
  </section>
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
      Follow Logical Sports Media for football updates, sports news, predictions, entertainment, books, videos, and trending content worldwide.

Contact: alagoagodstime@gmail.com

Payments Accepted: Opay Transfer Available </p>

<a
      href="https://www.instagram.com"
      className="inline-block px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition"
    >
      Follow Now
    </a>
  </section>
</div>

); }

<section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h3 className="text-xl font-bold mb-2">
The Boy Who Never Gave Up ⚽
</h3>

<p className="text-gray-400">
A young football lover started from the streets with nothing but passion and dreams. 
People laughed at him, but he kept training every day. 
One day his predictions, stories, and football content reached people around the world. 
That was the beginning of Logical Sports Media.
</p>
    <p className="text-gray-400 text-lg leading-relaxed mb-6">
      Here you will find inspiring stories, football experiences, sports journeys, and entertainment
      articles that people can read anytime. This section will grow into a full library of stories
      and posts for users around the world.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Football Journey Story</h3>
        <p className="text-gray-400">A story about rising from local matches to professional dreams.</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Sports Motivation</h3>
        <p className="text-gray-400">Inspiring lessons from football legends and real matches.</p>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Sports News 📰</h2>
    <p className="text-gray-400 text-lg mb-8">Latest football updates, match previews, and breaking sports news.</p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Match Preview</h3>
        <p className="text-gray-400">Upcoming big clash analysis and predictions.</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Transfer News</h3>
        <p className="text-gray-400">Latest player transfers and rumors around Europe and Africa.</p>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Videos 🎥</h2>
    <p className="text-gray-400 text-lg mb-8">Watch highlights, reactions, and football clips.</p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Match Highlights</h3>
        <p className="text-gray-400">Top games and best moments from recent matches.</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Fan Reactions</h3>
        <p className="text-gray-400">Funny and trending football reactions worldwide.</p>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">VIP Access 🔒</h2>
    <p className="text-gray-400 text-lg mb-6">Exclusive predictions and premium content coming soon.</p>
    <div className="bg-yellow-500 text-black p-6 rounded-2xl font-bold">
      VIP section will be activated with payment system later.
    </div>
  </section>

  {/* ================= FINAL WEBSITE STRUCTURE (NAV + FOOTER) ================= */}

  <section className="px-6 py-10 bg-black border-t border-gray-800">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Logical Sports Media 🌍</h2>
      <p className="text-gray-400 mb-6">Football • News • Videos • Stories • VIP Content</p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <span>Home</span>
        <span>News</span>
        <span>Videos</span>
        <span>Stories</span>
        <span>VIP</span>
        <span>Contact</span>
      </div>
    </div>
  </section>

  <footer className="px-6 py-10 bg-gray-950 text-center">
    <p className="text-gray-500">© 2026 Logical Sports Media. All rights reserved.</p>
    <p className="text-gray-600 mt-2">Built for football fans, sports lovers, and media readers worldwide.</p>
  </footer>

  <section className="px-6 py-16 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Next Steps 🚀</h2>
    <p className="text-gray-400 text-lg mb-8">Here is how we will grow Logical Sports Media into a full platform:</p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">1. Go Live 🌐</h3>
        <p className="text-gray-400">Publish the website online with a domain like www.logicalsportsmedia.com</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">2. Posting System 📝</h3>
        <p className="text-gray-400">Enable daily news, football predictions, and story uploads anytime.</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">3. VIP & Payments 💰</h3>
        <p className="text-gray-400">Add Opay, Paystack, or Flutterwave for VIP access and monetization.</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">4. Mobile App 📱</h3>
        <p className="text-gray-400">Later convert the website into a mobile app for Android and iOS users.</p>
      </div>
    </div>
  </section>
