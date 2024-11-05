import Image from "next/image";
import download from "../../../public/download.png";
import myimage from "../../../public/pankaj-3.png";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="relative flex flex-col gap-8 mx-auto max-w-4xl mt-2">
      <div>
        <div className="flex flex-col bg-white border-2 border-blue-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-6">
          <div>
            <h1 className="text-2xl font-bold">✨Who Am I?</h1>
            <p className="text-xl mb-6">
              Turning Vision into Reality with Code That Creates Impact
            </p>
          </div>

          <div className="relative flex">
            <div>
              <Image src={myimage} alt="myimage" />
            </div>
            <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl p-2">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                <span className="text-green-700">Hi, I&apos;m </span> <br />{" "}
                <span className="text-purple-600">Pankaj Kori</span>
              </h2>

              <p>
                Aspiring Full Stack Developer pursuing Bachelor of Technology in
                Computer Science and Engineering. Proficient in HTML, CSS,
                JavaScript, React JS, Next JS. Seeking an entry-level position
                to gain hands-on experience and contribute to the team.
              </p>

              <a
                href="https://drive.google.com/file/d/1mKJKzkx63imDNou_Ti_ivpQGLOSFC1OP/view?usp=sharing"
                target="_blank"
                rel="resume"
                className="relative flex justify-center items-center text-xl p-2 mt-4 text-white bg-blue-500 dark:bg-purple-700 dark:text-white shadow-md transition duration-300 rounded-full max-w-[40%]"
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
      <div className="relative flex gap-4">
        <div className="relative border border-blue-300 p-3 rounded-xl xl:w-[50%]">
          <div>
            <h1 className="text-xl font-bold">✨Frontend</h1>
            <p className="text-lg mb-6">
              Building responsive and modern interfaces
            </p>
          </div>
          <div>
            <Button variant="outline">HTML</Button>
            <Button>CSS</Button>
            <Button>JavaScript</Button>
            <Button>React</Button>
            <Button>Tailwind CSS</Button>
          </div>
        </div>
        <div className="relative border border-blue-300 p-3 rounded-xl xl:w-[50%]">
          <div>
            <h1 className="text-xl font-bold">✨Backend</h1>
            <p className="text-lg mb-6">
              Creating robust server-side applications
            </p>
          </div>
          <div>
            <Button>HTML</Button>
            <Button>HTML</Button>
            <Button>HTML</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
