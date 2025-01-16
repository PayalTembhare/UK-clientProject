import React from "react";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";

function About() {
  return (
    <div className="font-sans mt-16 lg:mt-24">
      {/* Parent div with background image only for About Us and Our Story sections */}
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale')" }}
      >
        {/* Transparent overlay on top of the background image with reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

        {/* "About Us" section */}
        <div className="container mx-auto px-4 py-8 flex justify-center items-center text-center relative z-10">
          {/* Text with left border */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white border-l-4 border-yellow-400 pl-4">
            About Us
          </h1>
        </div>


        {/* "Our Story" section */}
        <main className="container mx-auto px-4 pb-8">
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white relative z-10">
              Every Shot Tells a Story - Let Yours Be The Next One!
            </h2>
            <p className="mt-4 text-gray-300 relative z-10 text-sm sm:text-base lg:text-lg">
              At SK Film Productions, we take pride in turning everyday moments into breathtaking works of art. With a keen eye for detail and creativity, we capture the essence of your most meaningful moments and turn them into ever-lasting masterpieces.
            </p>

          </section>
        </main>
      </div>

      {/* Additional content without the background image */}
      <section className=" mt-8 w-4/5 mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/Images/1000274291.jpg"
              alt="Our Team"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-auto lg:mt-8 ">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Mr. Shahrukh Khan </h3>
            <h3 className="sm:text-xl lg:text-2xl font-bold"> Founder at SK Film Productions</h3>
            <p className=" pl-3 mt-4 text-gray-500 text-sm sm:text-base lg:text-lg text-justify">
              Mr. Shahrukh Khan is a visionary author whose words go beyond storytelling—they weave emotions, narratives, and the essence of life’s most meaningful moments. With a keen eye for detail and an innate sense of creativity, he transforms simple ideas into compelling masterpieces.
            </p>
            <p className=" pl-3 mt-4 text-gray-500 text-sm sm:text-base lg:text-lg text-justify">
              What sets Mr. Shahrukh Khan apart is his exceptional team, who work seamlessly alongside him to ensure perfection in every project. Together, they bring a blend of artistry, precision, and dedication, crafting narratives that resonate and leave a lasting impression. Whether it’s a grand project or an intimate story, Mr. Shahrukh Khan and his team ensure your vision is realized with unmatched brilliance and professionalism.
            </p>
          </div>
        </div>
      </section>

      <Team />
      <WhyChooseUs/>

    </div>
  );
}

export default About;
