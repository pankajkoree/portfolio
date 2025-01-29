import Image from "next/image";
import download from "../../../public/download.png";
import myimage from "../../../public/pankaj.png";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import tailwind from "../../../public/tailwind.png";
import node from "../../../public/node.png";
import express from "../../../public/express.png";
import mongodb from "../../../public/database.png";
import mysql from "../../../public/mysql.png";
import next from "../../../public/next.png";
import vscode from "../../../public/vscode.png";
import git from "../../../public/git.png";
import postman from "../../../public/postman.png";
import shadcn from "../../../public/shadcn.jpg";
import npm from "../../../public/npm.png";

const About = () => {
  return (
    <div className="relative flex flex-col gap-4 md:gap-6 xl:gap-8 mx-auto max-w-4xl mt-2 xl:mt-8 px-4">
      {/* start of introduction */}
      <div>
        <div className="flex flex-col bg-white border-2 border-blue-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-3 xl:p-6">
          <div>
            <h1 className="text-[16px] md:text-xl xl:text-2xl font-bold">
              ✨Who Am I?
            </h1>
            <p className="text-[16px] xl:text-xl mb-6">
              Turning Vision into Reality with Code That Creates Impact
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-2 xl:gap-4">
            <div>
              <Image
                src={myimage}
                alt="myimage"
                className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] mx-auto"
              />
            </div>
            <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-2 md:w-[60%] xl:w-[60%]">
              <h2 className="text-xl xl:text-2xl font-semibold mb-2 text-center md:text-left xl:text-left">
                <span className="text-green-700">Hi, I&apos;m</span> <br />
                <span className="text-purple-600">Pankaj Kori</span>
              </h2>

              <p className="text-[14px] md:text-[16px] xl:text-xl">
                Aspiring Full Stack Developer pursuing Bachelor of Technology in
                Computer Science and Engineering. Proficient in HTML, CSS,
                JavaScript, React JS, Next JS. Seeking an entry-level position
                to gain hands-on experience and contribute to the team.
              </p>

              <a
                href="https://drive.google.com/file/d/1Wcbr-DxOT_8RTbnfbGoGBbCyiUjP05Tb/view?usp=sharing"
                target="_blank"
                rel="resume"
                className="relative flex justify-center items-center text-16px xl:text-xl p-2 mt-4 text-white bg-blue-500 dark:bg-purple-700 dark:text-white shadow-md transition duration-300 rounded-full"
              >
                <Image
                  src={download}
                  alt="download"
                  className="w-[20px] h-[20px] mr-2"
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end of introduction */}

      {/* start of tech skills */}
      <div className="relative flex flex-col md:flex-row gap-4">
        {/* front-end */}
        <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
          <div>
            <h1 className="text-xl font-bold">✨Frontend</h1>
            <p className="text-lg mb-6">
              Building responsive and modern interfaces
            </p>
          </div>

          <div className="relative flex gap-2 flex-wrap">
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[120px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={html} alt="html" className="w-[20px] h-[20px]" />
              <a href="https://html.spec.whatwg.org/" target="_blank">
                HTML
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={css} alt="css" className="w-[20px] h-[20px]" />
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="_blank"
              >
                CSS
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={js} alt="js" className="w-[20px] h-[20px]" />
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                JavaScript
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={react} alt="react" className="w-[20px] h-[20px]" />
              <a href="https://react.dev/" target="_blank">
                React JS
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image
                src={tailwind}
                alt="tailwind"
                className="w-[20px] h-[20px]"
              />
              <a href="https://tailwindcss.com/" target="_blank">
                Tailwind
              </a>
            </div>
          </div>
        </div>
        {/* end of front-end */}

        {/* start of backend */}
        <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
          {/* Add your backend skills content here */}
          <div>
            <h1 className="text-xl font-bold">✨Backend</h1>
            <p className="text-lg mb-6">
              Creating robust server-side applications
            </p>
          </div>

          <div className="relative flex gap-2 flex-wrap">
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[135px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={node} alt="node" className="w-[20px] h-[20px]" />
              <a href="https://nodejs.org/en" target="_blank">
                Node JS
              </a>
            </div>

            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image
                src={express}
                alt="express"
                className="w-[20px] h-[20px]"
              />
              <a href="https://expressjs.com/" target="_blank">
                Express JS
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={next} alt="next" className="w-[20px] h-[20px]" />
              <a href="https://nextjs.org/" target="_blank">
                Next JS
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[160px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image
                src={mongodb}
                alt="mongodb"
                className="w-[20px] h-[20px]"
              />
              <a href="https://www.mongodb.com/" target="_blank">
                Mongo DB
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[160px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={mysql} alt="mysql" className="w-[20px] h-[20px]" />
              <a href="https://www.mysql.com/" target="_blank">
                MySQL
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end of tech skills */}

      <div className="relative flex flex-col md:flex-row gap-4]">
        {/* tools and software */}
        <div className="relative border border-blue-300 p-3 rounded-xl w-full xl:w-[50%]">
          <div>
            <h1 className="text-xl font-bold">✨Tools & Software</h1>
            <p className="text-lg mb-6">
              Utilizing tools and software to enhance productivity
            </p>
          </div>

          <div className="relative flex gap-2 flex-wrap">
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[120px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={vscode} alt="vscode" className="w-[20px] h-[20px]" />
              <a href="https://code.visualstudio.com/" target="_blank">
                VS code
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={git} alt="git" className="w-[20px] h-[20px]" />
              <a href="https://git-scm.com/" target="_blank">
                Git
              </a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image
                src={postman}
                alt="postman"
                className="w-[20px] h-[20px]"
              />
              <a href="https://www.postman.com/" target="_blank">Postman</a>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[150px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={shadcn} alt="shadcn" className="w-[20px] h-[20px]" />
              <p>Shadcn UI</p>
            </div>
            <div className="relative flex justify-center items-center gap-1 border-2 border-blue-400 p-2 w-[100px] rounded-full dark:hover:bg-gray-700 hover:bg-blue-200 dark:hover:border-white">
              <Image src={npm} alt="npm" className="w-[20px] h-[20px]" />
              <p>NPM</p>
            </div>
          </div>
        </div>
        {/* end of tools and software */}
      </div>
    </div>
  );
};

export default About;
