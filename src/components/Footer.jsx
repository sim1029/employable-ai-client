import linkedinLogo from "/src/assets/linkedin-logo.png";
import githubLogo from "/src/assets/github-logo.png";
import emailLogo from "/src/assets/email-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-screen mt-32 border-t border-gray-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 sm:py-12 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-500 flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/simonsayshello/">
            <img src={linkedinLogo} className="w-8 h-auto" alt="LinkedinLogo" />
          </a>
          <a href="https://github.com/sim1029">
            <img src={githubLogo} className="w-8 h-auto" alt="LinkedinLogo" />
          </a>
          <a href="mailto:simon.paul.schueller@gmail.com?subject=Employable%20AI%20Inquiry">
            <img src={emailLogo} className="w-8 h-auto" alt="LinkedinLogo" />
          </a>
        </p>
      </div>
    </footer>
  );
}
