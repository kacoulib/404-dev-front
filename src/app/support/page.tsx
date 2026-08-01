import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Contact — 404-DEV, INC.",
  description:
    "Support and contact information for 404-DEV, INC. — reach us for any question or assistance with our apps, including PasDoc.",
};

const CONTACT_EMAIL = "contact@404-dev.com";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 font-mona text-gray-800">
      <a href="/" className="text-sm font-medium text-blue-600 hover:underline">
        ← 404 DEV
      </a>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">Support &amp; Contact</h1>
      <p className="mt-3 text-gray-600">
        Need help or have a question about one of our apps? We&apos;re here to help.
      </p>

      <section className="mt-10 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Contact us</h2>
        <p className="mt-2 text-gray-700">
          Email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-blue-600 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . We typically respond within 2 business days.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Company information</h2>
        <dl className="mt-3 space-y-1.5 text-gray-700">
          <div className="flex gap-2">
            <dt className="w-36 shrink-0 text-gray-500">Legal entity</dt>
            <dd className="font-medium">404-DEV, INC.</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-36 shrink-0 text-gray-500">Type</dt>
            <dd>Delaware C-Corporation (United States)</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-36 shrink-0 text-gray-500">Registered office</dt>
            <dd>651 N Broad St, Suite 206, Middletown, DE 19709, USA</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-36 shrink-0 text-gray-500">Email</dt>
            <dd>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-6 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Our apps</h2>
        <p className="mt-2 text-gray-700">
          404-DEV, INC. builds mobile and web applications. For product support — including{" "}
          <span className="font-medium">PasDoc</span> — please reach out at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-blue-600 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} 404-DEV, INC. All rights reserved.
      </p>
      </div>
    </main>
  );
}
