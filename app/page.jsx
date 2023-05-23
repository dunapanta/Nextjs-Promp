import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover 6 Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Get inspired by our AI-powered prompts and discover, create and share
        creative prompts.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
