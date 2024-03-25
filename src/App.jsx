import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import InputForm from "./components/InputForm";
import Response from "./components/Response";

function App() {
  const [resumeFileError, setResumeFileError] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobpostDesc, setJobpostDesc] = useState("");
  const [jobpostError, setJobpostError] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedGenerate, setClickedGenerate] = useState(false);
  const [clipboardStatus, setClipboardStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  let backendURL;

  if (import.meta.env.VITE_ENV === "local") {
    backendURL = "http://localhost:8000";
  } else if (import.meta.env.VITE_ENV === "dev") {
    backendURL = "https://dev-employable-ai-worker-skkvtxqvla-ue.a.run.app";
  } else {
    backendURL = "https://employable-ai-worker-skkvtxqvla-ue.a.run.app";
  }

  const submitFunc = async (e) => {
    e.preventDefault();
    let isInputEmpty = false;
    if (!resumeFile) {
      setResumeFileError("A resume is required");
      isInputEmpty = true;
    }
    if (jobpostDesc == "") {
      setJobpostError("Job posting description is required");
      isInputEmpty = true;
    }
    if (isInputEmpty) return;
    setResumeFileError("");
    setJobpostError("");
    setClickedGenerate(true);
    setResponseMessage("");
    setLoading(true);
    try {
      // Create a FormData object to send the file and the jobpostingURL

      const formData = new FormData();
      formData.append("resumeFile", resumeFile);
      formData.append("jobpostDesc", jobpostDesc);

      const response = await fetch(`${backendURL}/generate`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setLoading(false);
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
            resumeFileError={resumeFileError}
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
            jobpostDesc={jobpostDesc}
            setJobpostDesc={setJobpostDesc}
            jobpostError={jobpostError}
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
