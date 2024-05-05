import LandingContainer from "./landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingFeature = () => {
  return (
    <section
      id="features"
      className="guideance  flex flex-col max-w-7xl mx-auto items-center mt-10 pb-14 gap-x-20 p-7 gap-y-10 md:gap-y-20"
    >
      <div className="p-5 md:p-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-left">
          Reduce 75% of Repetitive Customer Support Task and Make Your Customer
          Happy
        </h2>
      </div>

      <div className="guidance1 px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 text-center md:text-left md:justify-center md:items-center gap-x-10 gap-y-10">
          <div className="flex flex-col gap-y-10 mx-auto">
            <div className="flex flex-col gap-y-5 md:basis-3/4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Custom Knowledgebase Chatbot
              </h2>
              <p className="text-xl font-medium">
                Train your chatbot with custom knowledge base that you input
                from document or website you have
              </p>
            </div>

            <div className="ctahero flex flex-row md:items-start md:justify-start items-center justify-center gap-x-2">
              <a
                className="text-lg bg-indigo-950 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-violet-800"
                href="#cta"
                rel="noopener noreferrer"
              >
                Request Access{" "}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <img src="./img/chatbot.png" className="md:basis-1/4 rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="guidance1 px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 text-center md:text-left md:justify-center md:items-center gap-x-10 gap-y-10">
          <div className="flex flex-col gap-y-10 mx-auto">
            <div className="flex flex-col gap-y-5 md:basis-3/4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Chat Monitoring
              </h2>
              <p className="text-xl font-medium">
                You can monitor conversation between chatbot and your customer
                with ease
              </p>
            </div>

            <div className="ctahero flex flex-row md:items-start md:justify-start items-center justify-center gap-x-2">
              <a
                className="text-lg bg-indigo-950 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-violet-800"
                href="#cta"
              >
                Request Access
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <img
              src="./img/chat-monitoring.png"
              className="md:basis-1/4 rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="guidance1 px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 text-center md:text-left md:justify-center md:items-center gap-x-10 gap-y-10">
          <div className="flex flex-col gap-y-10 mx-auto">
            <div className="flex flex-col gap-y-5 md:basis-3/4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Seamless Human Escalation
              </h2>
              <p className="text-xl font-medium">
                If your Customer have more complex question that Chatbot can't
                answer properly, Chatbot can escalated chat to human agent
              </p>
            </div>

            <div className="ctahero flex flex-row md:items-start md:justify-start items-center justify-center gap-x-2">
              <a
                className="text-lg bg-indigo-950 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-violet-800"
                href="#cta"
                rel="noopener noreferrer"
              >
                Request Access
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <img
              src="./img/human-escalation.png"
              className="md:basis-1/4 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeature;
