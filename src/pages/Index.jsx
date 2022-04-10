const Index = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div className="flex justify-center items-center h-full relative max-h-lg">
        <div className="w-52 h-52 bg-indigo-400 rounded-full absolute top-20 left-0 mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <div className="w-52 h-52 bg-emerald-500 rounded-full absolute top-20 right-0 mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="w-52 h-52 bg-pink-400 rounded-full absolute top-24 mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>

        <div className="relative px-8 top-20">
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
                <span className="font-semibold text-indigo-400">Why ?</span>{" "}
                because it's just so easy to change your node version as you
                needed. You probably will face a problem caused by your node
                version is too high for your company project or etc.
              </p>
            </div>
          </section>

          <section id="installation" className="mt-8">
            <h2 className="font-semibold text-2xl text-slate-800 mb-2 text-center">
              Installation
            </h2>

            <div className="mb-4">
              <h3 className="font-medium text-xl text-slate-800">Vite React</h3>
              <p className="text-justify font-normal text-sm text-slate-800">
                <span className="font-semibold text-indigo-400">
                  Why using Vite?
                </span>{" "}
                In short, because vite so{" "}
                <span className="font-semibold text-indigo-400">fast</span> and
                so <span className="font-semibold text-indigo-400">light</span>.
                You can see this{" "}
                <a
                  href="https://dev.to/d4rkener/why-you-should-use-vite-2dh9"
                  target="_blank"
                  className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
                >
                  article
                </a>{" "}
                for more reason why Vite so popular now.
              </p>
              <div className="my-2 font-semibold text-sm text-slate-800">
                Command :
              </div>
              <h4 className="font-semibold text-sm text-slate-800">NPM 6.x</h4>
              <div className="flex justify-between items-center bg-[#F5F8FA] py-2 px-6 mb-2">
                <code className="rounded-lg font-normal text-sm text-dark-800">
                  <span className="text-indigo-400">npm</span> create
                  vite@latest app_name --template [react, react-ts]
                </code>
                <span className="text-slate-400 hover:text-slate-800 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>

              <h4 className="font-semibold text-sm text-slate-800">NPM 7.x</h4>
              <div className="flex justify-between items-center bg-[#F5F8FA] py-2 px-6 mb-2">
                <code className="rounded-lg font-normal text-sm text-dark-800">
                  <span className="text-indigo-400">npm</span> create
                  vite@latest app_name -- --template [react, react-ts]
                </code>
                <span className="text-slate-400 hover:text-slate-800 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>

              <h4 className="font-semibold text-sm text-slate-800">Yarn</h4>
              <div className="flex justify-between items-center bg-[#F5F8FA] py-2 px-6">
                <code className="rounded-lg font-normal text-sm text-dark-800">
                  <span className="text-indigo-400">yarn</span> create vite
                  my-vue-app_name --template [react, react-ts]
                </code>
                <span className="text-slate-400 hover:text-slate-800 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-xl text-slate-800">
                Tailwind CSS
              </h3>
              <p className="text-justify font-normal text-sm text-slate-800">
                <span className="font-semibold text-indigo-400">
                  Why using Tailwind CSS?
                </span>{" "}
                Basically because you can styling without ever leave your{" "}
                <span className="font-semibold text-indigo-400">
                  .jsx file.
                </span>
                You can see this{" "}
                <a
                  href="https://blog.bitsrc.io/5-reasons-to-use-tailwind-css-with-react-native-1e7999c40b2e"
                  target="_blank"
                  className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
                >
                  article
                </a>{" "}
                for more reason why React is good match with Tailwind CSS.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
