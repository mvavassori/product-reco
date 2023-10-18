const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 mb-12">
      <h1 className="text-3xl font-bold mt-4 mb-2">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">Introduction</h2>
      <p>
        This Privacy Policy outlines how [Your Blog Name] (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects the
        personal information of users (&quot;you&quot; or &quot;your&quot;) who
        visit our website at{" "}
        <a
          href="https://www.standardpick.com/"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.standardpick.com/
        </a>{" "}
        (the &quot;Website&quot;). We are committed to safeguarding your privacy
        and ensuring the security of your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc pl-4">
        <li>
          <p>
            <strong>Usage Information:</strong> We use Google Analytics to
            collect data on how you interact with our Website. This information
            may include your IP address, browser type, device information, and
            pages visited, but it does not identify you personally.
          </p>
        </li>
        <li>
          <p>
            <strong>Embedded Content:</strong> Our articles may contain embedded
            content from YouTube and Reddit. These platforms may collect data
            about your interaction with the embedded content, including usage
            analytics and cookies, as governed by their respective privacy
            policies.
          </p>
        </li>
        <li>
          <p>
            <strong>Affiliate Links:</strong> Some articles on our Website may
            include affiliate links. Clicking on these links and making a
            purchase may result in us earning a commission. Please refer to our
            Affiliate Disclosure for more information.
          </p>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Cookies</h2>
      <p>
        Our Website uses cookies to enhance your browsing experience. Cookies
        are small text files stored on your device that help us analyze user
        behavior and customize content based on your preferences. You can manage
        cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Information Sharing</h2>
      <p>
        We do not sell, rent, or share your personal information with third
        parties. However, please note that embedded content providers like
        YouTube and Reddit may collect data as described in their privacy
        policies.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. Despite
        our best efforts, we cannot guarantee the security of your data, and you
        use our Website at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Changes to this Privacy Policy
      </h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time. Updates
        will be reflected with the &quot;Effective Date&quot; at the beginning
        of the document. It is your responsibility to review this Privacy Policy
        periodically to stay informed of any changes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or the
        handling of your personal information, please contact us at{" "}
        <a
          href="mailto:hello@standardpick.com"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@standardpick.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
