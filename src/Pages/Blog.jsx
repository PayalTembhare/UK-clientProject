import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery } from '@mui/material';

const blogs = [
    {
        id: 1,
        title: "A Commitment for Lifetime",
        image: "/Images/wed2.jpg",
        summary: `Marriage is not just an occasion, but a continual process of both sharing love and committing to each other and rejoicing in that bond. Every wedding has a story, and everyone has a story, which should be told with meticulousness and enthusiasm. It is more than just being marriage photographers as we capture moments, we document feelings, joy, sadness, gazing, and smiling beautifully. Every picture is a replication of two people who have met each other’s souls and are ready to start a new chapter together.
SK Film Productions makes it easy for you to look good and feel good. In our photography, every moment is taken but always felt by the individual-stress-free, pressure-free, and posing-free. Just beautiful, authentic images portraying the real you.
Love is an incredible journey—one that’s filled with unforgettable moments, emotions, and milestones. From the first meeting to the shared glances, the quiet moments to the loud celebrations, your love story is a unique narrative that deserves to be captured and cherished forever. At SK Film Productions, we believe that every couple has a beautiful story, and our job is to help you preserve it in the most authentic and meaningful way.
Why Your Love Story Deserves to Be Captured
A love story is more than just a collection of dates and events—it’s about the way two people connect, grow, and create a life together. Capturing these moments isn’t just for wedding days or anniversaries. It’s about telling the whole story—how it began, the beautiful in-between, and the adventures that lie ahead.
Whether it’s through photography, video, or the written word, capturing the essence of your love story allows you to relive those emotions and experiences for years to come. 
`
    },
    {
        id: 2,
        title: "Togetherness is Happiness!",
        image: "/Images/prewed4.jpg",
        summary: `Who doesn't enjoy a little fun, food, and fantasy? These three delights can turn even a dull occasion into an incredible one. Unwind from a busy work week or celebrate with others; laughter, good food, and some imagination combine to make any occasion memorable. 
For social-event photography, it is not just a collection of a few photos with some posed shots; rather, it is a whole immortalizing ambiance of candid laughs, brooding, an explosion of happy moments, and some surprising ones, all those that make an occasion memorable. Blend into that crowd, which our photographers do so well, leaving the unique essence of your event recorded without disturbing all its natural flow. It is how one recreates those events as they are. 
Indeed in today's world, one tends to get lost in the hustle and bustle of life: activity, technology, and individual demands; yet, on reflection, when one seeks what truly brings joy, the answer lies usually in what comprises much togetherness. Families, friends, or strangers can be brought in; the more people are, the happier they should be.
Happiness can be derived from something as simple as being not alone but with someone's excitement, success, and joy brought about by friendships formed. Happy memories ringing on the day come to be full of fun, food, and fantasy.
Above all, togetherness is the most essential concept that states that human connection is an inherent need that should fill us all at heart, mind, and soul. It is the fulfillment, happiness, and sense of belonging that comes from shared experiences, mutual support, and meaningful relationships.`
    },
    {
        id: 3,
        title: "Your Professional Moments Deserve Flawless Clicks!",
        image: "/Images/pexels-pavel-danilyuk-8761313.jpg",
        summary: `With BOOM, every professional moment, any second, is storytime, building the picture screencastify about your development, successes, and hobbies. Turning your professional moments into scenes is not simply recording the brief occurrences in the stream of consciousness – it means determining who you are to others and who you are to yourself.
So, remember that your moments should be recorded the next time you're stepping into an important meeting, giving a presentation, or celebrating a success. They are the constituent components of your career and should not be forgotten in the years to come.
With such incredible achievements being made within the business world within the shortest time possible, it is only reasonable that these accomplishments be captured in the most optimal way possible. These are the general meetings be they the high-risk board meetings or a team meeting, the strategy development, or a new accomplishment celebration, such moments define your career and render your stories. But here’s the question: More importantly how does one capture these brief but equally valuable moments in a way that captures the meaning of the moment?
That’s where we come in!
Welcome to SK Film Productions where our competence is creating moments of your profession in videography as timelessly as authenticated clicks. Taking into account our experience in shooting corporate portraits we make sure every photo is a perfect embodiment of success, hard work, and effort. We appreciate the value of taking good quality photographs and how they can aid branding, marketing, and even tell a company’s story.
At SK Film Productions we understand that any formal shoot is not just a session but the time is behind choosing professionalism, achievement, and the story that lies behind the development of your organization. From imperative portraits of the company and its teams to a company’s branding, any frame you look at and even photographs of an event that celebrates a team’s achievement is unique. We want to be confident in what is being narrated, we want what is being narrated to be artistic, and we want what is being narrated to be as accurate as possible.
It is said that one can never get a second chance to make the first impression – and this applies expressly in business. Whenever you present your clients, colleagues, or potential partners with professional photographs of yourselves or your working team, you manage to convey a certain level of credibility. First of all, visuals attract attention, and well-thought, realistically though not necessarily demonstratively beautiful images convey a great deal about your business’s standards and integrity. It is the real one that tells the people around you and even your competitors that you are running a professional business and take branding seriously.
These are the scenes you will narrate tomorrow; these are the visions you see or shoot today. They are your trophy; they prove not only what you are, but also where you were and they inform where you are going. Some day you will look back at these photos after years or even decades and what you will notice is the progress, transition, and journey that led to your profession. Clear images are not just memories – they are the evidence that one has traveled, and these are skills that can motivate you, and make you recall how far you have come.
At Emerson, we think that every minute spent in professional activity needs to be handled with lots of care. Hiring our photographers means you are giving your special moments to very talented people who do not miss everything subtle out there. Whether the feel in a team meeting or the glow in your eyes when delivering a keynote speech, we understand what should be retained.
You cannot separate your professional time as just an occasion – they are part of what shapes and forms you as an individual. And that story, as I’ve said, deserves to be told as best as it can be told on paper. Welcome to SK Film Productions where we transform your moments into timeless visuals of your passion, professionalism, and success.
Thanks to the perfect colors of our clicks turning your story to life with the precision, and perspective, that is possible.
Never let your moments get away from you. Instead, let us make them memories of a lifetime.
Don’t wait any longer, book your professional photoshoot today!
`,
    },
    {
        id: 4,
        title: "Photography in the Air!",
        image: "/Images/drone3d.jpg",
        summary: `Nowadays the pace of a business is rapidly increasing and companies of various industries are looking for possibilities to save time and money and, of course, protect their employees. Among these solutions, one of the most relevant and innovative is that the market offers specialized drone services. The drone technology by SK Film Productions is today an all-inclusive solution to time and money saving as well as safer operations in many fields. In this blog, let’s discover how drone services are disrupting industries and improving business processes for the greater.
Among the major benefits that relate to the application of drones in your business operations, the time factor is one of the biggest. In cases such as aerial surveying, infrastructure inspections, and site monitoring, drones are capable of doing all the work in a short time that could take traditional methods.
For instance, there is a construction company that which required to do site surveying. Originally, this meant dispatching a team of workers to physically assess the area which could take days based on the size of the location. This means that while using drones, it is possible to conduct a sample survey over a large area within a few hours. High-end drones come with wonderful features such as hi-res cameras and LiDAR to collect enormous amounts of data in real-time while affording companies an almost real-time chance to analyze results, a luxury that cannot be done with manual data collection and analyzing.
Also, in inspections or surveys, businesses can do without deploying large groups or expensive equipment, making work processes even more efficient and reducing project time.
The other primary advantage that affiliated drone services provide is the element of precision they bring into an application. Sensors, cameras, and other highly developed tools, as well as GPS, which are integrated into drones, allow obtaining highly accurate data needed for decision-making in various fields.
For instance in construction, the preparation of 3D models of the site through aerial photographs obtained through drones is useful for project managers as they offer a better view of the progress of the project, identification of problems, and determination of the volume of stockpiles with an impressive sensitiveness. This accuracy enables organizations to make the right decisions and minimize instances where wrong decisions can cost a great deal of time.
Yet another reason why people need to embrace drone services is the ability to get regular feedback. Real-time data is collected by drones and this enables businesses to act on the data promptly. This capability is quite useful when there is limited time to complete a survey for instance in the event of a disaster, for inspection purposes, or to oversee construction progress.
For instance, when there is a natural disaster such as floods, or landslides, the drone can fly over the area and capture pictures and videos that can be relayed live to the people in the operations room who then use the image to determine where to direct their efforts. For construction purposes, it can allow project managers to quickly survey a site’s progress, so projects don’t fall behind schedule or cost more than planned.
This means that businesses can be more timely, reactive, and usable all at once which is a pretty big deal because certain decisions can only be made based on data.
`,

    },
    {
        id: 5,
        title: "Bringing your brand story to life!",
        image: "/Images/hotel1.jpg",
        summary: `Understanding how to execute storytelling in the business environment is one of the best strategies you could ever employ. Stylish brand narratives are powerful tools that can change the very perception of your business by your target audience, and build trust with them. But here’s the thing: However, this is where words are not enough; visual stories are the next step up in your brochure. Telling your brand story in pictures is attention but more than that: it builds an emotional bond of a kind that words by themselves can’t do.
If you’re creating a brand-new product, revitalizing your brand, or developing a marketing campaign, then the most effective way to communicate your message is through visual storytelling. Now, let’s look at how to tell your brand stories effectively in the form of powerful visual media.
The first step in this process is your brand which includes the logo, colors, typography, and designs used to create the shapes, textures, and form. All these graphic additions should instill similar feelings and the attributes of what you narrated in your brand history within the audience. When coming up with the visuals if your brand story is luxury, elegance, and sophistication the visuals should be lean, blank, and rich in color tones. On the other hand, if the branding of your website is fun, youthful, and energetic, the use of bright colors, big fonts, and playful images will do more good.
You can think of your communication’s visual design as being like the first chapter of a book or a movie. It can be defined as a first taste, a first emotion that a user gets when they interact with your website, with your application, or just open your video.
`,
    },
    {
        id: 6,
        title: "Constructing the Future with every brick!",
        image: "/Images/darrel-louise-almanzor-td8weHnM0-c-unsplash.jpg",
        summary: `The construction industry is one of change – converting resources, plans, and ideas into skyscrapers, city structures, and life-altering structures. But throughout this journey, there’s often one key element that gets overlooked: the effect of visuals. Of course, drawings and plans are useful in construction as a blueprint to follow but always taking photos of each stage in construction enriches your project’s history.

Construction photography in the hands of SK Film Productions is not simply a capture of the construction stint; it is an effort to capture change, remember progress, and make a story. From starting from the Innovations phase all through to the completion and painting of the facility, it is a privilege to capture the journey through the lens to demonstrate the effort, the dream, and the skill that goes into the whole process. In this blog, we will discuss how professional construction photography can help make your project , share your brand’s story, and be a rich marketing tool.

About the construction perhaps the best advice is; that a picture paints a thousand words. It is not possible to put into words things as effectively as pictures do when it comes to the size, numerous aspects, and evolution of a project. The spirit of such work and the effort carried out by people can be shown in a single picture of foundation laying or the crane lifting steel girders. This then creates visual proof of the entire process of a project and can also help illustrate how much time, planning, and skills are needed to transform an idea into reality.

Each construction project comes with a vision, but it’s reality when there’s a concrete foundation on which that dream can be erected. The initiation phase of the construction process which is the preparation of the site, preparation of Concrete, preparation of the site, and finally the placement of the structure is one of the critical instances of the construction process. It is important to remember the details of these situations to build upon them not only for a history-influenced version of events but also for the strings that will support the rest of the building.

With every progress made on its construction, the structure also begins to be formed. Roofing is done, windows, plumbing, and electricity, and the HVAC systems are fitted to make the structure less like a construction site and resemble the final plan. This is the stage where your photography is the halfway transformation of the project and how all parts are shaping to be.

Towards the end of the project, you get the most aesthetic part of the whole process. Here, aesthetics are defined in terms of specific values, associated with finishes, painting, and gardening as well as with ornamental works. These images are important for showing the viewer the overall quality and detail of the work to be done on the finished space.

The last photos are the best when it comes to marketing and documenting the process to make people believe that it is possible to execute the project, with all the funds and effort used.

Construction photography isn’t just informative; it persuades. When you are in the process of marketing, it is always essential to demonstrate your skills and experience or to have a record of a completed project that will help you in the future.
`,
    }
];

const Blog = () => {

    // Define breakpoints for responsive columns
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLaptop = useMediaQuery('(min-width:961px)');

    // Determine the number of columns based on screen size
    let cols = 3; // Default for laptops and larger screens
    if (isMobile) cols = 1;
    else if (isTablet) cols = 2;


    return (
        <Box className="p-6 ">
            <ImageList variant="masonry" gap={12} cols={cols}>
                {blogs.map((blog, index) => {
                    // Conditional logic for alternating landscape and portrait layout
                    const isLandscape = index % 2 === 0; // even index for landscape, odd for portrait

                    return (
                        <ImageListItem
                            className="bg-black rounded-xl shadow-black shadow-md p-3 "
                            key={blog.id}
                            cols={isLandscape ? 2 : 1} // 2 columns for landscape, 1 column for portrait
                            rows={isLandscape ? 1 : 2} // Adjust row size for portrait images
                        >
                            <div className="overflow-hidden rounded-xl  shadow-lg">
                                <img className=" transition-transform duration-700 ease-in-out transform hover:scale-110 "
                                    srcSet={`${blog.image}?w=230&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${blog.image}?w=230&fit=crop&auto=format `}
                                    alt={blog.title}
                                    loading="lazy"
                                />
                            </div>

                            <ImageListItemBar position="below" />
                            <div className="py-4 px-1 flex-1">
                                <h1 className="font-black  mb-1 text-3xl text-white w-full truncate">{blog.title}</h1>
                                <p className="text-white mt-2 w-full line-clamp-2">{blog.summary}</p>
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="text-blue-600 font-semibold mt-2 inline-block"
                                >
                                    Read More
                                </Link>
                            </div>
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </Box>
    );
};

export default Blog;
