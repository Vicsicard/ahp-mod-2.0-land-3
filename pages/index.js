import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>AHP Mod 2.0: Visibility for the AI-First Web</title>
        <meta name="description" content="The first website visibility engine optimized for AI-driven search and retrieval systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="section bg-dark-bg text-white py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-First Visibility Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-text max-w-3xl mx-auto">
              Optimize your website for AI retrieval — not just human eyes.
            </p>
            <a href="mailto:info@aihandshake.org" className="btn-primary" aria-label="Run a free visibility scan">
              Run Visibility Scan
            </a>
          </div>
        </section>

        {/* Paradigm Shift Section */}
        <section className="section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-3xl md:text-4xl font-bold">
              The Internet isn't just for people anymore.
            </div>
            <div className="text-lg">
              Users don't browse websites. They ask AI and get summaries. Most answers are built from your content — but without linking to you. To compete, you must optimize for what the machine sees.
            </div>
          </div>
        </section>

        {/* Human vs Machine Web Comparison */}
        <section className="section bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Rules Have Changed</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-4 bg-primary text-white text-left">Human Web</th>
                    <th className="border p-4 bg-primary-dark text-white text-left">Machine Web</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4">Visual design, storytelling</td>
                    <td className="border p-4">Structure, schema, semantic clarity</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Images, motion, carousels</td>
                    <td className="border p-4">Markdown-style layout, bullet points</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Optimized for attention</td>
                    <td className="border p-4">Optimized for retrieval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* AHP Mod 2.0 Introduction */}
        <section className="section">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The First Visibility Engine Built for the AI Layer</h2>
            <p className="text-lg mb-8">
              AHP Mod 2.0 uses our patent-pending AI Visibility Scoring System to audit how your content is interpreted by AI. We scan your site, analyze structure, and deliver a free report to help you rank in the AI layer.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Scans public site content</li>
              <li>Scores retrievability, structure</li>
              <li>Sends AI visibility report by email</li>
            </ul>
          </div>
        </section>

        {/* What You're Up Against */}
        <section className="section bg-dark-bg text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">AI Agents Don't Rank — They Filter</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-10">
              <li>Penalize visual complexity</li>
              <li>Skip unclear or bloated markup</li>
              <li>Favor token-efficient sources</li>
              <li>Filter for speed, clarity, structure</li>
            </ul>
            <div className="bg-primary-dark p-6 rounded-lg text-xl font-semibold">
              If your content is too expensive to process, you're invisible.
            </div>
          </div>
        </section>

        {/* How AHP Helps */}
        <section className="section">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get Your Message Through to the AI — and to the Customer</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Instant visibility scan</li>
              <li>Free report (email-based)</li>
              <li>Fix recommendations & layout optimizations</li>
            </ul>
          </div>
        </section>

        {/* Future Roadmap Teaser */}
        <section className="section bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">AHP Is Just Getting Started</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-4 bg-primary text-white text-left">Version</th>
                    <th className="border p-4 bg-primary-dark text-white text-left">Capability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">2.0</td>
                    <td className="border p-4">Scoring + Reporting</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">3.0</td>
                    <td className="border p-4">Live agents that package .md content</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">3.1</td>
                    <td className="border p-4">Forecasting retrieval behavior & AI interaction logs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-gradient-to-r from-primary-light to-primary-dark text-white text-center py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Is Your Website AI-Ready?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Get a free scan and see how clearly AI understands your message.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:info@aihandshake.org" className="btn bg-white text-primary-dark" aria-label="Run a free visibility scan">
                Run Visibility Scan
              </a>
              <a href="mailto:info@aihandshake.org" className="btn bg-dark-bg" aria-label="See a sample report">
                See Sample Report
              </a>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="section text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-lg">
              Built by Victor Sicard. Patent Pending. Designed for the AI-first web.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">What's in the report?</h3>
                <p>Detailed analysis of your site's AI visibility with actionable recommendations.</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Do I need a developer?</h3>
                <p>Our recommendations are clear enough for marketers but technical enough for developers.</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Is my data safe?</h3>
                <p>We only scan publicly available content and never store your site data.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-bg text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold mb-4 md:mb-0">
              Built for the AI-First Web.
            </div>
            <div className="flex gap-6">
              <a href="mailto:info@aihandshake.org" className="hover:text-primary-light">Blog</a>
              <a href="mailto:info@aihandshake.org" className="hover:text-primary-light">Privacy</a>
              <a href="mailto:info@aihandshake.org" className="hover:text-primary-light">Terms</a>
              <a href="mailto:info@aihandshake.org" className="hover:text-primary-light">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
