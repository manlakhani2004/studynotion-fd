import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../../../services/operations/profile";
import thumbnail from "../../../assets/Images/aboutus1.webp";

function GetEnrolledCourse() {
    const { token } = useSelector((state) => state.auth);
    const [EnrolledCourse, setEnrolledCourse] = useState(null);

    async function FetchEnrolledCourse() {
        try {
            // const result = await getEnrolledCourses(token);

            //temparary course
            const result = [
                {
                    thumbnail: thumbnail,
                    courseName: "DSA",
                    totalDuration: "10:40:13",
                    progressCourse: 20,
                },
                {
                    thumbnail: thumbnail,
                    courseName: "AI/ML",
                    totalDuration: "15:23:55",
                    progressCourse: 10,
                },
                {
                    thumbnail: thumbnail,
                    courseName: "Web Dev",
                    totalDuration: "20:10:11",
                    progressCourse: 88,
                }

            ]
            setEnrolledCourse(result);
            // console.log(result);
        } catch (error) {
            console.log("Course not fetch", error);
        }
    }
    useEffect(() => {
        FetchEnrolledCourse();
    }, [])
    return (
        <div className="flex flex-col gap-3 ml-5 w-[100%]">
            <div className="">
                <h1 className=" text-3xl mt-8 ">Enrolled Courses</h1>
            </div>

            {
                !EnrolledCourse ? (<div className="spinner"></div>) :
                    (
                        (EnrolledCourse.length == 0) ?
                            (<div className="w-full h-full flex items-center justify-center mx-auto">Yet not have Enrolled course</div>) :
                            (<div className="w-[77vw] border-[2px] border-richblack-500 rounded-lg">
                                <div className=" w-full flex justify-between py-3 px-4 bg-richblack-700 rounded-t-lg text-richblack-25">
                                    <p>CourseName</p>
                                    <p>Durations</p>
                                    <p>Progress</p>
                                </div>
                                {
                                    EnrolledCourse.map((course, index) => (
                                        <div key={index} className=" text-richblack-25 flex justify-between items-center py-3 border-b-[2px] border-richblack-700 px-4">
                                            <div className="flex gap-3  items-center">
                                                <div className=" w-[70px] ">
                                                    <img src={course.thumbnail} alt="" className=" rounded-lg" />
                                                </div>
                                                <div>
                                                    <p>{course.courseName}</p>
                                                    <p>Short Description</p>
                                                </div>
                                            </div>

                                            <div className=" mr-16">
                                                <p>{course?.totalDuration} mins</p>
                                            </div>
                                            <div>
                                                <p>Progress {course?.progressCourse || 0}% </p>
                                                <p className="mt-1"><ProgressBar completed={course?.progressCourse || 0}
                                                    isLabelVisible={false}
                                                    height="8px" /></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>)
                    )
            }

        </div>
    )
}

export default GetEnrolledCourse;