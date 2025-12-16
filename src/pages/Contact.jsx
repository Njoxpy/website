import { trackDownload } from "../utils/analytics";
const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <section className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                godblessnyagawa@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fumba Town, Zanzibar
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Njoxpy"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/godbless-nyagawa/"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Njox16"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* hey */}

          <div className="max-w-lg mx-auto shadow-xl rounded-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfl6__XI1BVrpGrcAc67ZNf7Dom5X-_qzawZZkTF1oNaopJsg/viewform?embedded=true"
              width="640"
              height="721"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              className="w-full h-[500px] border-none"
            >
              Loading…
            </iframe>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Want to see my full background?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Download my resume or CV to get a complete overview of my
              experience and skills.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/GODBLESS_NYAGAWA_RESUME.pdf"
                download="GODBLESS_NYAGAWA_RESUME.pdf"
                onClick={() => trackDownload("Resume PDF")}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
                Resume
              </a>

              <a
                href="/GODBLESS_NYAGAWA_CV.pdf"
                download="GODBLESS_NYAGAWA_CV.pdf"
                onClick={() => trackDownload("CV PDF")}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6"
                  />
                </svg>
                Full CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
