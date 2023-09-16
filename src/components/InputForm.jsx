export default function InputForm(props) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.size > 2097152) {
      props.setResumeFileError("File must be <2 Mb");
      return;
    }
    props.setResumeFile(selectedFile);
  };
  console.log(props.jobpostError);

  return (
    <form
      onSubmit={(e) => props.submitFunc(e)}
      id="submit"
      className="border border-gray-200 bg-gray-100 p-8 rounded-lg mx-auto max-w-7xl px-12 lg:mx-12 mt-32"
    >
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-12">
          <h1 className="text-2xl tracking-tight font-bold text-gray-900">
            Candidate Context
          </h1>
          <h2 className="mt-2 text-md tracking-tight text-gray-900">
            Tell us about yourself by uploading your resume as a{" "}
            <strong>.pdf</strong> or <strong>.docx</strong>
          </h2>
          <hr className="mt-2 divide-y divide-gray-900/10 mb-8" />
          <div className="flex flex-col max-w-xs pb-4">
            <label
              htmlFor="resume-input"
              className="mb-1 block text-sm font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Upload Your Resume
            </label>
            <input
              id="resume-input"
              type="file"
              className="block file:mt-1 w-full text-xs file:mr-4 file:rounded-md text-gray-500 file:border-0 file:cursor-pointer file:bg-sky-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-sky-400 hover:cursor- focus:outline-none disabled:pointer-events-none disabled:opacity-60"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e)}
            />
            {props.resumeFileError && (
              <p className="mt-1 text-sm text-red-500">
                {props.resumeFileError}
              </p>
            )}
          </div>

          <h1 className="text-2xl tracking-tight font-bold text-gray-900 mt-12">
            Role Context
          </h1>
          <h2 className="mt-2 text-md tracking-tight text-gray-900">
            Input job posting URL, company name + job title, or copy and paste
            the job description directly <strong>(Best Results)</strong>
          </h2>
          <hr className="mt-2 divide-y divide-gray-900/10 mb-8" />
          <div className="flex flex-col mb-4">
            <label
              htmlFor="posting"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Job Posting
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 font-semibold text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </span>
              {props.jobpostError ? (
                <input
                  type="text"
                  name="posting"
                  id="posting"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-sky-500 focus:border-sky-500 border-red-500 block flex-1 min-w-0 w-full text-sm p-2.5 shadow-sm"
                  placeholder="https://www.linkedin.com/jobs/pied-piper/jobs/12345/"
                  value={props.jobpostURL}
                  onChange={(e) => props.setJobpostURL(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  name="posting"
                  id="posting"
                  className="rounded-none rounded-r-lg bg-gray-50 border shadow-sm border-gray-300 text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="https://www.linkedin.com/jobs/pied-piper/jobs/12345/"
                  value={props.jobpostURL}
                  onChange={(e) => props.setJobpostURL(e.target.value)}
                />
              )}
            </div>
            <p className="text-xs mt-1">
              Job Posting URL <strong>OR</strong> Company Name + Job Title
            </p>
            {props.jobpostError && (
              <p className="mt-1 text-sm text-red-500">{props.jobpostError}</p>
            )}
          </div>

          <div className="w-full mt-8">
            <label
              htmlFor="postingDescription"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              Job Posting <strong>Text</strong> description
            </label>
            <textarea
              id="postingDescription"
              className="block w-full rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-sky-500 focus:border-sky-500 flex-1 min-w-0 text-sm p-2.5"
              rows="3"
              placeholder="Leave a message"
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Copy and paste the posting text directly
            </p>
            {props.jobpostError && (
              <p className="mt-1 text-sm text-red-500">{props.jobpostError}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-x-6">
        {!props.loading ? (
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            onClick={(e) => props.submitFunc(e)}
          >
            Generate
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-md bg-sky-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
