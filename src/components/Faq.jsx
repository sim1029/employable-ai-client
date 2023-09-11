import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What was your inspiration?",
    answer:
      "As busy university students with multiple commitments on top of job hunting, we are all too familiar with the tedium and frustration associated with having to compose cover letters for the few job openings that do require them. Given that much of cover letter writing is simply summarizing one's professional qualifications to tie in with company specific information, we have decided to exploit the formulaic nature of such writing and create a web application to generate cover letters with minimal user inputs.",
  },
  {
    question: "What does your app do?",
    answer:
      "HireMePls is a generative AI web application that creates customized cover letters in seconds. HireMePls obtains details of the user’s qualifications from their LinkedIn profile, performs research on the provided target company, and leverages these pieces of information to generate a customized cover letter.",
  },
  {
    question: "How did you build your app?",
    answer:
      "For our front end, we utilized JavaScript with React, leveraging the Tailwind CSS framework for the styling of the site. We designed the web application such that once we have obtained the user’s inputs (LinkedIn profile url, name of target company), we send these inputs to the backend. In the backend, built in Python with Fast API, we extract relevant details from the provided LinkedIn profile using the Prospeo API, extracted relevant company information by querying with the Metaphor API, and finally feeding these findings into Open AI to generate a customized cover letter for our user.",
  },
  {
    question: "What challenges did you run into?",
    answer:
      "In addition to the general bugs and unexpected delays that comes with any project of this scale, our team was challenged with finding a suitable API for extracting relevant data from a given LinkedIn profile. Since much of the tools available on the market are targeted towards recruiters, their functionalities and pricing are often incompatible with our requirements for this web application. After spending a surprising amount of time on research, we settled on Prospeo, which returns data in the convenient JSON format, provides fast consistent responses, and offers a generous free tier option that we could leverage. Another challenge we have encountered were the CORS issues that arose when we first tried making requests to the Prospeo API from the front end. After much trial and error, we finally resolved these issues by moving all of our API calls to the backend of our application.",
  },
  {
    question: "What are some accomplishments you are proud of?",
    answer:
      "A major hurdle that we are proud to have overcome throughout the development process is the fact that half of our team of hackers are beginners (where PennApps is their very first hackathon). Through thoughtful delegation of tasks and the patient mentorship of the more seasoned programmers on the team, we were able to achieve the high productivity necessary for completing this web application within the tight deadline.",
  },
  {
    question: "What did you learn?",
    answer:
      "Through building HireMePls, we have gained a greater appreciation for what is achievable when we strategically combine different API’s and AI tools to build off each other. In addition, the beginners on the team gained not only valuable experience contributing to a complex project in a fast-paced environment, but also exposure to useful web development tools that they can use in future personal projects.",
  },
  {
    question: "What's next for HireMePls?",
    answer:
      "While HireMePls already achieves much of our original vision, we recognize that there are always ways to make a good thing better. In refining HireMePls we aim to improve the prompt that we provide to Open AI to achieve cover letters that are even more concise and specific to the users’ qualifications and their companies of interest. Further down the road, we would like to explore the possibility of tailoring cover letters to specific roles/job postings at a given company, providing a functionality to generate cold outreach emails to recruiters, and finally, ways of detecting how likely an anti-AI software would detect a HireMePls output as being AI generated.",
  },
];

export default function Faq() {
  return (
    <div className="border border-gray-200 bg-gray-100 mx-auto max-w-7xl px-6 lg:mx-8 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
