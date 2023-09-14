import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const openAIURL =
  "https://arstechnica.com/information-technology/2023/09/openai-admits-that-ai-writing-detectors-dont-work/";
const devpostURL = "https://pennapps-xxiv.devpost.com/";
const frontendURL = "https://github.com/sim1029/employable-ai-client";
const backendURL = "https://github.com/sim1029/employable-ai-worker";

const faqs = [
  {
    question: "Is the use of AI for cover letters detectable?",
    answer: `<strong>No</strong>, employable AI uses OpenAI's GPT API to generate cover letters. Open AI themselves have stated that there is no way to definitively detect whether a text was generated by their API. Tools claiming to do so are ridden with false positives. <a href="${openAIURL}" target="_blank" class="text-sky-500">Article</a>`,
  },
  {
    question: "Is Employable AI free?",
    answer:
      "<strong>Yes</strong>, Employable AI is free to use! But the GPT API calls become too expensive, I may take the site down...",
  },
  {
    question: "Is Employable AI open Source?",
    answer: `<strong>Yes</strong>, Employable AI is open sourced, check out the <a href="${frontendURL}" target="_blank" class="text-sky-500">Frontend</a> and <a href="${backendURL}" target="_blank" class="text-sky-500">Backend</a>. I had the idea for Employable AI at PennApps xxiv in collaboration with some other students and you can view our <a href="${devpostURL}" target="_blank" class="text-sky-500">Devpost Submission</a> to learn more.`,
  },
];

export default function Faq() {
  return (
    <div
      id="learn-more"
      className="border border-gray-200 bg-gray-100 mx-auto max-w-7xl px-6 lg:mx-8 rounded-lg mt-32"
    >
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
                      <p
                        className="text-base leading-7 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
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
