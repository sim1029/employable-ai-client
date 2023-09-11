export default function Logos() {
  return (
    <div className="bg-white py-24 sm:py-32" id="learn-more">
      <h2 className="text-center text-3xl font-semibold text-lg leading-8 text-gray-900 mb-4">
        Built with the technologies of the future
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-100 p-8 sm:p-10 border border-gray-200">
            <img
              className="max-h-12 w-full object-contain"
              src="https://i0.wp.com/www.globalemancipation.ngo/wp-content/uploads/2017/09/github-logo.png?ssl=1"
              alt="GitHub"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-100 p-6 sm:p-10">
            <p
              className="w-full mx-auto my-auto text-center text-3xl text-[#9169FF]"
              style={{ fontFamily: "IBM Plex Mono" }}
            >
              Metaphor
            </p>
          </div>
          <div className="bg-gray-100  p-6 sm:p-10 border border-gray-200">
            <img
              className="max-h-12 w-full object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-100  p-6 sm:p-10 border border-gray-200">
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png"
              alt="GCP"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-100  p-6 sm:p-10 border border-gray-200">
            <img
              className="max-h-12 w-full object-contain"
              src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
              alt="FastAPI"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-100 p-6 sm:p-10 border border-gray-200">
            <img
              className="max-h-12 w-full object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="React"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
