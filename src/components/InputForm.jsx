export default function InputForm(props) {
  return (
    <form
      onSubmit={(e) => props.submitFunc(e)}
      id="submit"
      className="border border-gray-200 bg-gray-100 rounded-lg mx-auto max-w-7xl p-8 lg:mx-8 mt-32"
    >
      <div className="border-gray-900/10">
        <h1 className="text-2xl tracking-tight font-bold text-gray-900">
          Candidate Context
        </h1>
        <hr className="mt-2 divide-y divide-gray-900/10 mb-4" />
        <div className="flex flex-col">
          {props.linkedinError ? (
            <label
              htmlFor="linkedin-input"
              className="mb-1 block text-sm font-medium text-red-500"
            >
              {props.linkedinError}
            </label>
          ) : (
            <label
              htmlFor="linkedin-input"
              className="mb-1 block text-sm font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Upload Your Linkedin Profile
            </label>
          )}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
              </svg>
            </span>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              className={`rounded-none rounded-r-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-sky-500 focus:border-sky-500 flex-1 min-w-0 text-sm p-2.5 ${
                props.linkedinError ? "border-red-500" : ""
              }`}
              placeholder="https://www.linkedin.com/RichardHendricks"
              value={props.linkedinURL}
              onChange={(e) => props.setLinkedinURL(e.target.value)}
            />
          </div>
        </div>

        <h1 className="text-2xl tracking-tight font-bold text-gray-900 mt-8">
          Role Context
        </h1>
        <hr className="mt-2 divide-y divide-gray-900/10 mb-4" />
        <div className="w-full">
          {props.jobpostError ? (
            <label
              htmlFor="postingDescription"
              className="mb-1 block text-sm font-medium text-red-500"
            >
              {props.jobpostError}
            </label>
          ) : (
            <label
              htmlFor="postingDescription"
              className="mb-1 block text-sm font-medium text-gray-900 after:text-red-500 after:content-['*']"
            >
              Job Posting <strong>Text</strong> description
            </label>
          )}
          <textarea
            id="postingDescription"
            className={`block w-full rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-sky-500 focus:border-sky-500 flex-1 min-w-0 text-sm p-2.5 ${
              props.jobpostError ? "border-red-500" : ""
            }`}
            rows="3"
            placeholder="For the role of SWE II at Pied Piper, we are looking for a candidate who..."
            value={props.jobpostDesc}
            onChange={(e) => props.setJobpostDesc(e.target.value)}
          ></textarea>
          <p className="mt-1 text-sm text-gray-500">
            Copy and paste the posting text directly
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-x-6">
        {!props.loading ? (
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Generate
          </button>
        ) : (
          <button
            type="submit"
            className={`rounded-md bg-sky-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 pointer-events-none`}
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className={`inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300 ${
                  props.loading ? "opacity-50" : ""
                }`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </button>
        )}
      </div>
    </form>
  );
}
