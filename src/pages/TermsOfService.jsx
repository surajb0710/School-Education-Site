const TermsOfService = () => {
  return (
    <div className="mx-auto pt-10 px-6 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      <p className="text-sm text-gray-500 !mb-6">Effective Date: 30/01/2025</p>

      <section>
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By using our services, you agree to these Terms and any additional
          policies referenced herein. If you do not agree, please refrain from
          using our website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. User Accounts</h2>
        <p>You may need to create an account to access certain features.</p>
        <p>You are responsible for maintaining the security of your account.</p>
        <p>
          We reserve the right to terminate accounts that violate our policies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Use of Services</h2>
        <p>You agree to use our services for lawful purposes only.</p>
        <p>
          Any unauthorized use or interference with our platform may result in
          legal action.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
        <p>
          All content, trademarks, and logos on this site are the property of
          [Your Website Name] unless otherwise stated.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
        <p>
          We are not responsible for any direct or indirect damages arising from
          the use of our website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of our services
          after changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          For any questions, contact us at{' '}
          <a
            href="mailto:contact@schoolwebsite.com"
            className="text-blue-600 hover:underline"
          >
            contact@schoolwebsite.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
