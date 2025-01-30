const CookiesPolicy = () => {
  return (
    <div className="mx-auto pt-10 px-6 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
      <p className="text-sm text-gray-500 !mb-6">Effective Date: 30/01/2025</p>

      <section>
        <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help enhance user experience and improve site
          performance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how users
            interact with our website.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant ads and
            track performance.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Managing Cookies</h2>
        <p>
          You can manage or disable cookies through your browser settings.
          However, disabling certain cookies may affect website functionality.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Updates to This Policy</h2>
        <p>
          We may revise this Cookie Policy as needed. Continued use of our
          website implies acceptance of any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          For any questions, contact us at{' '}
          <a
            href="mailto:contact@littlelearners.com"
            className="text-blue-600 hover:underline"
          >
            contact@littlelearners.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default CookiesPolicy;
