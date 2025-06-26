import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Highlight from "../components/core/Homepage/Highlight";
import CtaButton from "../components/core/Homepage/CtaButton";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import TimeLineSection from "../components/core/Homepage/TimeLineSection";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import InstructorSection from "../components/core/Homepage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/Homepage/ExploreMore";
function Home() {
    return (
        <div>
  {/* section 1 */}
  <div className="mt-5 relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
    <Link to={'/signup'}>
      <div className="group mx-auto rounded-full font-bold bg-richblack-800 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
        <div className="flex gap-2 items-center rounded-full px-6 sm:px-8 md:px-10 py-[5px] group-hover:bg-richblue-900">
          <p>Become an Instructor</p>
          <FaArrowRightLong />
        </div>
      </div>
    </Link>

    <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-7">
      Empower Your Future with
      <Highlight text={'Coding Skills'} />
    </div>

    <div className="w-full sm:w-[90%] text-center text-sm sm:text-base text-richblack-400 font-semibold mt-3 sm:mt-4">
      With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
    </div>

    <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3">
      <CtaButton active={true} linkTO={'/signup'} children={'Learn More'} />
      <CtaButton active={false} linkTO={'/login'} children={'Book a Demo'} />
    </div>

    <div className="mx-3 sm:mx-7 my-10 sm:my-14 shadow-video-top-left rounded-xl">
      <video
        autoPlay
        muted
        loop
        className="border-none border-white shadow-video-bottom-right w-full max-w-[800px]"
      >
        <source src={Banner} type="video/mp4" />
      </video>
    </div>

    <div className="w-full">
      <CodeBlocks
        heading={
          <div className="text-2xl sm:text-3xl md:text-4xl text-richblue-300">
            Unlock your <Highlight text={'coding potential '} />
            with our online courses.
          </div>
        }
        subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
        ctabtton1={{
          children: 'Try it Yourself',
          active: true,
          linkTO: '/signup',
        }}
        ctabtton2={{
          children: 'Learn More',
          active: false,
          linkTO: '/login',
        }}
        postion="flex-col sm:flex-row"
        CodeColor="text-yellow-50"
        CodeLine={`<!DOCTYPE html> \n  <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n </body> \n <h1><ahref="/">Header</a>\n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> </nav>`}
        codeBgColor="bg-yellow-700"
      />
    </div>

    <div className="w-full">
      <CodeBlocks
        heading={
          <div className="text-2xl sm:text-3xl md:text-4xl text-richblue-300">
            Start <Highlight text={'coding in seconds '} />
          </div>
        }
        subheading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
        ctabtton1={{
          children: 'Continue Lesson',
          active: true,
          linkTO: '/signup',
        }}
        ctabtton2={{
          children: 'Learn More',
          active: false,
          linkTO: '/login',
        }}
        postion="flex-col sm:flex-row-reverse"
        CodeColor="text-white"
        CodeLine={`<!DOCTYPE html> \n  <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n </body> \n <h1><ahref="/">Header</a>\n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> </nav>`}
        codeBgColor="bg-blue-600"
      />
    </div>

    <ExploreMore />
  </div>

  {/* section 2 */}
  <div className="w-full bg-pure-greys-5">
    <div className="home-bg-image w-full flex flex-col justify-center h-[250px] bg-white">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 sm:mt-16">
        <CtaButton linkTO={'/signup'} active={true} children={'Explore Full Catalog'}>
          <div className="flex gap-2 items-center py-1 text-sm sm:text-base">
            Explore Full Catalog
            <FaArrowRightLong />
          </div>
        </CtaButton>

        <CtaButton linkTO={'/signup'} active={false} children={'Learn more'}>
          <div className="flex gap-2 items-center py-1 text-sm sm:text-base">
            Learn more
          </div>
        </CtaButton>
      </div>
    </div>

    <div className="flex flex-col gap-8 justify-between px-4 sm:px-10 my-10 w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[40%]">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Get the skills you need for <Highlight text={'a job that is in demand.'} />
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col gap-4 sm:gap-6 items-start py-2">
          <p className="text-sm sm:text-base">
            The modern StudyNotion dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
          </p>
          <CtaButton active={true} linkTO={'/signup'} children={'Learn More'} />
        </div>
      </div>

      <TimeLineSection />
      <LearningLanguageSection />
    </div>
  </div>

  {/* section 3 */}
  <div className="w-11/12 mx-auto bg-richblack-900 text-white flex items-center flex-col">
    <InstructorSection />
    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-10 sm:mt-[100px]">
      Review from Other Learners
    </h1>
  </div>

  {/* footer */}
  <Footer />
</div>

        // <div>
        //     {/* section 1 */}
        //     <div className=" mt-5 relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent ">

        //         <Link to={'/signup'}>
        //             <div className=" group mx-auto rounded-full font-bold bg-richblack-800 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit ">
        //                 <div className="flex gap-2 items-center rounded-full px-10 py-[5px] group-hover:bg-richblue-900">
        //                     <p>Become an Instructor</p>
        //                     <FaArrowRightLong />
        //                 </div>
        //             </div>
        //         </Link>

        //         <div className=" text-center font-bold text-4xl  mt-7">
        //             Empower Your Future with
        //             <Highlight text={'Coding Skills'} />
        //         </div>

        //         <div className=" w-[90%] text-center text-richblack-400 font-semibold mt-4">
        //             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        //         </div>

        //         <div className=" mt-5 flex gap-3">
        //             <CtaButton active={true} linkTO={'/signup'} children={'Learn More'} />
        //             <CtaButton active={false} linkTO={'/login'} children={'Book a Demo'} />
        //         </div>

        //         <div className=" mx-7 my-14 shadow-video-top-left rounded-xl">
        //             <video
        //                 autoPlay
        //                 muted
        //                 loop className=" border-none border-white shadow-video-bottom-right  ">
        //                 <source src={Banner} type="video/mp4" />
        //             </video>
        //         </div>

        //         <div>
        //             <CodeBlocks heading={
        //                 <div className=" text-4xl text-richblue-300">
        //                     Unlock your <Highlight text={'coding potential '} />
        //                     with our online courses.
        //                 </div>
        //             }
        //                 subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
        //                 ctabtton1={{
        //                     children: "Try it Yourself",
        //                     active: true,
        //                     linkTO: "/signup"
        //                 }}
        //                 ctabtton2={{
        //                     children: "Learn More",
        //                     active: false,
        //                     linkTO: "/login"
        //                 }}
        //                 postion="flex-row"
        //                 CodeColor="text-yellow-50"
        //                 CodeLine={`<!DOCTYPE html> \n  <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n </body> \n <h1><ahref="/">Header</a>\n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> </nav>`}
        //                 codeBgColor="bg-yellow-700"
        //             />

        //         </div>


        //         <div className=" w-[100%]">
        //             <CodeBlocks heading={
        //                 <div className=" text-4xl text-richblue-300">
        //                     Start <Highlight text={'coding in seconds '} />
        //                 </div>
        //             }
        //                 subheading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
        //                 ctabtton1={{
        //                     children: "Continue Lesson",
        //                     active: true,
        //                     linkTO: "/signup"
        //                 }}
        //                 ctabtton2={{
        //                     children: "Learn More",
        //                     active: false,
        //                     linkTO: "/login"
        //                 }}
        //                 postion="flex-row-reverse"
        //                 CodeColor="text-white"
        //                 CodeLine={`<!DOCTYPE html> \n  <html> \n <head> \n <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n </body> \n <h1><ahref="/">Header</a>\n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> </nav>`}
        //                 codeBgColor="bg-blue-600"
        //             />

        //         </div>

        //         <ExploreMore/>
        //     </div>

        //     {/* section 2 */}
        //     <div className=" w-full bg-pure-greys-5">
        //         <div className=" home-bg-image w-full flex flex-col justify-center  h-[250px] bg-white">
        //             <div className="flex flex-row item-center justify-center gap-3 mt-16">
        //                 <CtaButton linkTO={'/signup'} active={true} children={'Explore Full Catalog'}>
        //                     <div className="flex gap-2 items-center py-1 text-base">
        //                         Explore Full Catalog
        //                         <FaArrowRightLong />
        //                     </div>
        //                 </CtaButton>

        //                 <CtaButton linkTO={'/signup'} active={false} children={'Learn more'}>
        //                     <div className="flex gap-2 items-center py-1 text-base">
        //                         Explore Full Catalog
        //                     </div>
        //                 </CtaButton>
        //             </div>
        //         </div>
        //         <div className="flex flex-col justify-between px-10 my-10 w-11/12 mx-auto  ">
        //             <div className="flex justify-between">
        //             <div className=" w-[40%]">
        //                 <div className=" font-bold text-4xl ">Get the skills you need for <Highlight text={'a job that is in demand.'} /> </div>
        //             </div>
        //             <div className=" w-[50%] flex flex-col gap-6 items-start py-2">
        //                 <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
        //                 <CtaButton active={true} linkTO={'/signup'} children={'Learn More'} />
        //             </div>
        //             </div>
        //             <TimeLineSection/>
        //             <LearningLanguageSection/>
        //         </div>
        //     </div>
        //     {/* section 3 */}
        //     <div className=" w-11/12 mx-auto bg-richblack-900 text-white flex items-center flex-col">
        //         <InstructorSection/>
        //         <h1 className=" font-semibold text-4xl mt-[100px]">Review from Other Learners</h1>
        //     </div>
        //     {/* footer  */}
        //     <Footer/>
        // </div>
    )
}

export default Home