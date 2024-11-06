import { Button } from "@/components/ui/button";
import React from "react";
import currencyConverter from "../../../public/currencyConverter.png";
import theShoeCompany from "../../../public/theShoeCompany.png";
import movieDetailsSearch from "../../../public/movieDetailsSearch.png";
import focusOnToday from "../../../public/focusOnToday.png";
import theCountyProject from "../../../public/theCountyProject.png";
import hamburger from "../../../public/hamburger.png";
import weatherApp from "../../../public/weatherApp.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="relative mt-6 px-4 flex flex-col gap-2 md:gap-2 xl:gap-4">
      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            Currency converter
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>✅ Supports 34 global currencies</div>
            <div>✅ Provides live exchange rates with accuracy</div>
            <div>✅ Optimized for quick conversions</div>
          </div>
          <div className="mt-8">
            <Link
              href="https://currencyconvertorreactapp.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={currencyConverter}
            alt="currencyConverter"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            The Shoe Company
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>✅ Wide variety of footwear styles for all occasions</div>
            <div>✅ High-quality materials ensuring durability and comfort</div>
            <div>✅ Fast and reliable delivery to your doorstep</div>
          </div>
          <div className="mt-8">
            <Link
              href="https://theshoecompany-tailwind.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={theShoeCompany}
            alt="theShoeCompany"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            Movie Details Search
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>✅ Search for movies by title, genre, or actor</div>
            <div>
              ✅ Displays detailed movie information including ratings and
              reviews
            </div>
            <div>✅ Optimized for fast and accurate search results</div>
          </div>
          <div className="mt-8">
            <Link
              href="https://moviesearchappomdb.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={movieDetailsSearch}
            alt="movieDetailsSearch"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            Focus on Today
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>
              ✅ Focus on the most important task today and finish it by the end
              of the day
            </div>
            <div>
              ✅ Break down your tasks into manageable steps to stay on track
              and complete them
            </div>
            <div>
              ✅ Review your progress at the end of the day and mark each task
              as completed
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="https://focusontoday-vanillajs.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={focusOnToday}
            alt="focusOnToday"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            The Country Project
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>
              ✅ Provides detailed information about the country's economy
            </div>
            <div>
              ✅ Shows live data on the country's GDP, inflation, and growth
            </div>
            <div>
              ✅ Optimized for exploring historical and current statistics
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="https://countryproject-manual-deploy.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={theCountyProject}
            alt="theCountyProject"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            The HamBurger
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>✅ Made with 100% fresh chicken patties</div>
            <div>✅ Offers a variety of toppings to choose from</div>
            <div>✅ Perfectly grilled for maximum flavor</div>
          </div>
          <div className="mt-8">
            <Link
              href="https://hamburgermenuappnweb.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={hamburger}
            alt="hamburger"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row max-w-4xl mx-auto border-2 border-blue-300 hover:shadow-md hover:shadow-purple-400 rounded-xl">
        <div className="relative md:w-[50%] w-full h-full md:p-12 p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-2">
            The Weather App
          </h1>
          <hr />
          <div className="relative flex flex-col gap-4 mt-4">
            <div>✅ Provides real-time weather updates for any location</div>
            <div>✅ Accurate hourly and daily forecasts</div>
            <div>✅ Optimized for fast and easy weather tracking</div>
          </div>
          <div className="mt-8">
            <Link
              href="https://weatherappchallengejs.netlify.app/"
              target="_blank"
            >
              <Button variant="live">View live ↗</Button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full h-full md:p-8 p-4 flex justify-center items-center">
          <Image
            src={weatherApp}
            alt="weatherApp"
            className="w-[300px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[400px] lg:h-[270px] rounded-xl transform transition-transform duration-300 hover:scale-110 border-2 border-green-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
