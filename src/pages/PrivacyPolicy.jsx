const PrivacyPolicy = () => {
  return (
    <div className="mx-auto pt-10 px-6 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500 !mb-6">Effective Date: 30/01/2025</p>

      <section>
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>Personal information (name, email, etc.) provided by you.</p>
        <p>Usage data collected through cookies and tracking technologies.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p>To provide and improve our services.</p>
        <p>To communicate with you.</p>
        <p>For analytics and marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
        <p>
          We do not sell your data. However, we may share information with
          service providers for operational purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Security Measures</h2>
        <p>
          We implement industry-standard security measures to protect your data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal data.
          Contact us at{' '}
          <a
            href="mailto:contact@littlelearners.com"
            className="text-blue-600 hover:underline"
          >
            contact@littlelearners.com
          </a>{' '}
          to make a request.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of our
          services indicates your acceptance of the changes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
