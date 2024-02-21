import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import InputForm from "./components/InputForm";
import Response from "./components/Response";

function App() {
  const [linkedinError, setLinkedinError] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [jobpostDesc, setJobpostDesc] = useState("");
  const [jobpostError, setJobpostError] = useState("");
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
    if (linkedinURL == "") {
      setLinkedinError("LinkedIn URL is required");
      isInputEmpty = true;
    }
    if (jobpostDesc == "") {
      setJobpostError("Job posting description is required");
      isInputEmpty = true;
    }
    if (isInputEmpty) return;
    setLinkedinError("");
    setJobpostError("");
    setClickedGenerate(true);
    setResponseMessage("");
    setLoading(true);
    try {
      // Create a FormData object to send the file and the jobpostingURL

      const data = {
        linkedinURL,
        jobpostDesc,
      };

      const response = await fetch(`${backendURL}/generate`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
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
            linkedinError={linkedinError}
            linkedinURL={linkedinURL}
            setLinkedinURL={setLinkedinURL}
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
