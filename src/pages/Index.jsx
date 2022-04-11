const Index = () => {
  return (
    <div className="w-screen md:max-w-2xl mx-auto h-screen overflow-y-scroll no-scrollbar">
      <div className="absolute left-[calc(50%-50px)] top-40 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 -z-10 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
      <div className="absolute  left-[calc(50%+50px)] top-40 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-400 -z-10 rounded-full mix-blend-multiply filter blur-2xl opacity-40  animation-delay-2000"></div>
      <div className="absolute left-[calc(50%+50px)] bottom-0 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 -z-10 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
      <div className="absolute left-[calc(50%-50px)] bottom-0 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-400 -z-10 rounded-full mix-blend-multiply filter blur-2xl opacity-40  animation-delay-2000"></div>
      <div className="h-full py-8 px-4">
        <h1 className="font-bold text-4xl text-slate-800 text-center">
          Vite React + React Router V6 + Recoil + Tailwind CSS
        </h1>
        <section id="prerequisite" className="mt-8 pb-8">
          <h2 className="font-semibold text-2xl text-slate-800 mb-2 text-center">
            Why ?
          </h2>

          <p className="text-justify font-normal text-sm text-slate-800">
            In case you're needed to create a new project with react, you
            probably will be needed react itself, a router for Single Page
            Application (SPA), a state management, and a css for styling your
            project. The question is what's the best base react project with all
            the requirement. The answer for me its same as the title.
          </p>
          <p className="text-justify font-normal text-sm text-slate-800">
            For react instead using create-react-app, I highly recommend you
            choosing Vite instead, simply because Vite is light and fast. React
            Router V6 is commonly router package for SPA so nothing more about
            it. For state management instead using redux or useContext hook, i
            highly recommend you to choose recoil. If you come from
            redux/useContext hook you may face creating reducer and action so
            complicated but with recoil it's so easy to use it. Lastly, tailwind
            in my opinion is the best CSS for react because simply you can
            styling your page wihout ever leaving your .jsx
          </p>
        </section>

        <section id="prerequisite" className="pb-8">
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

        <section id="installation" className="pb-8">
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
              <span className="font-semibold text-indigo-400">fast</span> and so{" "}
              <span className="font-semibold text-indigo-400">light</span>. You
              can see this{" "}
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
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">npm</span> create vite@latest
                app_name --template [react, react-ts]
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
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">npm</span> create vite@latest
                app_name -- --template [react, react-ts]
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
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6">
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
              React Router v6
            </h3>
            <p className="text-justify font-normal text-sm text-slate-800">
              Its standard router for react SPA, so i think you guys already
              know how to install and use it. Look at react router{" "}
              <a
                href="https://reactrouter.com/docs/en/v6/getting-started/overview"
                target="_blank"
                className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
              >
                documentation
              </a>
              .
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-medium text-xl text-slate-800">Tailwind CSS</h3>
            <p className="text-justify font-normal text-sm text-slate-800">
              <span className="font-semibold text-indigo-400">
                Why using Tailwind CSS?
              </span>{" "}
              Basically because you can styling without ever leave your{" "}
              <span className="font-semibold text-indigo-400">.jsx file.</span>
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
            <div className="my-2 font-semibold text-sm text-slate-800">
              Command :
            </div>
            <div className="my-2 font-semibold text-sm text-slate-800">
              1. Add tailwind, postcss, autoprefixer depedency
            </div>
            <h4 className="font-semibold text-sm text-slate-800">NPM</h4>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">npm</span> install -D
                tailwindcss postcss autoprefixer
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
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">yarn</span> add -D tailwindcss
                postcss autoprefixer
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
            <div className="my-2 font-semibold text-sm text-slate-800">
              2. Initiate tailwindcss
            </div>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">npx</span> tailwindcss init -p
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

            <div className="my-2 font-semibold text-sm text-slate-800">
              3. Configure which file should tailwind watch{" "}
              <span className="text-indigo-400">tailwind.config.js</span>
            </div>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                {`content: [ "./index.html", "./src/**/*.{(vue, js, ts, jsx, tsx)}
                ", ],`}
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
            <div className="my-2 font-semibold text-sm text-slate-800">
              4. Initiate CSS <span className="text-indigo-400">index.css</span>
            </div>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
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
            <h3 className="font-medium text-xl text-slate-800">Recoil</h3>
            <p className="text-justify font-normal text-sm text-slate-800">
              Recoil is easy use state management for react, and its developed
              by <span className="text-indigo-400">Meta</span> creator of react.
              Here's good{" "}
              <a
                href="https://blog.openreplay.com/using-recoil-instead-of-redux-for-state-management-in-react-applications"
                target="_blank"
                className="font-semibold text-emerald-500 border-b-2 border-emerald-500"
              >
                article
              </a>{" "}
              about it.
            </p>

            <div className="my-2 font-semibold text-sm text-slate-800">
              Command :
            </div>
            <div className="my-2 font-semibold text-sm text-slate-800">
              1. Add recoil
            </div>
            <h4 className="font-semibold text-sm text-slate-800">NPM</h4>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">npm</span> install recoil
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
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <span className="text-indigo-400">yarn</span> add recoil
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
            <div className="my-2 font-semibold text-sm text-slate-800">
              2. Create store for management state{" "}
              <span className="text-indigo-400">src/store/index.jsx</span>
            </div>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <p className="mb-2">{`import {atom} from "recoil"`}</p>
                <p>{`export const todos = atom({
                  key: "todos",
                  default: ""
                })`}</p>
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
            <div className="my-2 font-semibold text-sm text-slate-800">
              3. Using recoil to get and set state{" "}
            </div>
            <div className="flex justify-between items-center bg-slate-100 backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-lg py-2 px-6 mb-2">
              <code className="rounded-lg font-normal text-sm text-dark-800">
                <p>{`import {useRecoilState} from "recoil"`}</p>
                <p className="mb-2">{`import {todos} from "../store/"`}</p>
                <p>{`const [todo, setTodo] = useRecoilState(todo)`}</p>
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
        </section>
      </div>
    </div>
  );
};

export default Index;
