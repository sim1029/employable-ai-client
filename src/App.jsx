import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import InputForm from "./components/InputForm";
import Response from "./components/Response";

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileError, setResumeFileError] = useState(null);
  const [jobpostError, setJobpostError] = useState(null);
  const [jobpostURL, setJobpostURL] = useState("");
  const [jobpostDesc, setJobpostDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedGenerate, setClickedGenerate] = useState(false);
  const [clipboardStatus, setClipboardStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const backendURL =
    import.meta.env.VITE_ENV === "dev"
      ? "http://localhost:8000"
      : "https://hmp-api-w4e4bniyjq-ue.a.run.app";

  const submitFunc = async (e) => {
    e.preventDefault();
    let isInputEmpty = false;
    if (!resumeFile) {
      setResumeFileError("File upload cannot be empty");
      isInputEmpty = true;
    }
    if (!jobpostURL && !jobpostDesc) {
      setJobpostError("Fill in at least one Step 2 input");
      isInputEmpty = true;
    }
    if (isInputEmpty) return;
    setResumeFileError(null);
    setJobpostError(null);
    setClickedGenerate(true);
    setResponseMessage("");
    setLoading(true);
    try {
      // Create a FormData object to send the file and the jobpostingURL
      const formData = new FormData();
      formData.append("resumeFile", resumeFile);
      formData.append("jobpostURL", jobpostURL);
      const response = await fetch(`${backendURL}/generate`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      setLoading(false);

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        let decoded_val = new TextDecoder().decode(value);
        setResponseMessage((prev) => prev + decoded_val);
      }

      reader.releaseLock();
    } catch (error) {
      // Handle and log the error message
      console.error("Fetch error:", error.message);

      // Handle the error or take appropriate actions here
      setResponseMessage("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;

    if (clipboardStatus) {
      timer = setTimeout(() => {
        setClipboardStatus(false);
      }, 2000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [clipboardStatus]);

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white">
          <Hero />
          <InputForm
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
            resumeFileError={resumeFileError}
            setResumeFileError={setResumeFileError}
            jobpostError={jobpostError}
            jobpostURL={jobpostURL}
            setJobpostURL={setJobpostURL}
            jobpostDesc={jobpostDesc}
            setJobpostDesc={setJobpostDesc}
            submitFunc={submitFunc}
            loading={loading}
          />
          <Response
            clickedGenerate={clickedGenerate}
            responseMessage={responseMessage}
            loading={loading}
            clipboardStatus={clipboardStatus}
            setClipboardStatus={setClipboardStatus}
          />
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
