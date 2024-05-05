const LandingFaq = () => {
  return (
    <section
      id="faq"
      className="faq max-w-7xl mx-auto items-center mt-10 p-7 gap-y-20"
    >
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl mb-10">
        FAQs
      </h2>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked={true} />
        <div className="collapse-title text-xl font-medium">
          What is an AI Chatbot ?
        </div>
        <div className="collapse-content font-light">
          <p>
            An AI chatbot is an artificial intelligence system that can
            understand natural language conversations and questions, and provide
            helpful responses based on its training.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do i traning chatbot ?
        </div>
        <div className="collapse-content font-light">
          <p>
            You can just enter a URL or upload your pdf document and the chatbot
            will be trained on all the content present on that URL or your
            document
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I add my AI chatbot created with Chatver to my website?
        </div>
        <div className="collapse-content font-light">
          <p>
            You can embed the chat widget code directly into your pages with
            just a few lines of HTML. This allows visitors on your site to
            interact with your AI chatbot and get instant answers
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
