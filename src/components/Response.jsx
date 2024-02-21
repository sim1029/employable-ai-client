export default function Response(props) {
  return (
    <>
      {props.clickedGenerate && (
        <div className="border border-gray-200 bg-gray-100 p-4 rounded-lg mx-auto max-w-7xl px-6 lg:mx-8 mt-32">
          <>
            <div className="flex justify-between mt-1">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Your Cover Letter
              </h2>
              {!props.loading && (
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  onClick={() => {
                    props.setClipboardStatus(true);
                    navigator.clipboard.writeText(props.responseMessage);
                  }}
                >
                  {props.clipboardStatus ? (
                    <>
                      Copied to Clipboard!
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      Copy to Clipboard
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            <pre
              className={`px-4 ${
                props.responseMessage === "Something went wrong"
                  ? "text-red-500"
                  : ""
              } text-md font-medium leading-relaxed text-gray-700 bg-gray-100 whitespace-pre-line`}
            >
              {props.responseMessage}
            </pre>
          </>
        </div>
      )}
    </>
  );
}
