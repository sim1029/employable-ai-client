import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import InputForm from "./components/InputForm";
import Response from "./components/Response";

function App() {
  const [linkedin, setLinkedin] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(true);
  const [clickedGenerate, setClickedGenerate] = useState(false);
  const [clipboardStatus, setClipboardStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const backendURL =
    import.meta.env.VITE_ENV === "dev"
      ? "http://localhost:8000"
      : "https://hmp-api-w4e4bniyjq-ue.a.run.app";

  const submitFunc = async (e) => {
    e.preventDefault();
    return;
    setClickedGenerate(true);
    setResponseMessage("");
    setLoading(false);
    try {
      const response = await fetch(`${backendURL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: company,
          linkedin_profile_url: linkedin,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      setLoading(true);

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
      setLoading(true);
    }
  };

  useEffect(() => {
    let timer;

    if (clipboardStatus) {
      timer = setTimeout(() => {
        setClipboardStatus(false);
      }, 3500);
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
            linkedin={linkedin}
            setLinkedin={setLinkedin}
            company={company}
            setCompany={setCompany}
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
