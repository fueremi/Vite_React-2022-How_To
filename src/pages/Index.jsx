const Index = () => {
  return (
    <div className="container mx-auto min-h-screen py-8 px-4">
      <h1 className="font-bold text-4xl text-slate-800 text-center">
        Vite React + React Router V6 + Recoil + Tailwind CSS
      </h1>
      <section id="prerequisite" className="mt-8">
        <h2 className="font-semibold text-2xl text-slate-800 mb-2 text-center">
          Pre-requisite
        </h2>

        <div className="w-full">
          <h3 className="font-medium text-xl text-slate-800">Node</h3>
          <p className="text-justify font-normal text-sm text-slate-800">
            You can download Node installation{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
            >
              here
            </a>
            .{" "}
            <span className="font-semibold text-indigo-400">
              Still confused ?
            </span>{" "}
            Look at this{" "}
            <a
              href="https://phoenixnap.com/kb/install-node-js-npm-on-windows"
              target="_blank"
              className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
            >
              article
            </a>
            , it's may help you. I highly recommend you to install{" "}
            <a
              href="https://github.com/nvm-sh/nvm"
              target="_blank"
              className="font-semibold text-indigo-400"
            >
              NVM
            </a>{" "}
            instead.{" "}
            <span className="font-semibold text-indigo-400">Why ?</span> because
            it's just so easy to change your node version as you needed. You
            probably will face a problem caused by your node version is too high
            for your company project or etc.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
