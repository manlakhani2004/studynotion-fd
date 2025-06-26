import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseTable from "./CourseTable";
import { getInstructorCourses } from "../../../../services/operations/course";
import { useNavigate } from "react-router-dom";

function MyCourse() {
    // const {course} = useSelector((state)=>state.course);
    const { token } = useSelector((state) => state.auth);
    const [courses, setCourses] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();;

    async function fetchInstructorCourses() {
        setLoading(true);
        const result = await getInstructorCourses(token);

        if (result) {
            setCourses(result);
        }
        console.log("instructor cources", result);
        setLoading(false);
    }
    useEffect(() => {
        fetchInstructorCourses();
    }, []);
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28 py-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-richblack-5">My Courses</h2>

                <p
                    onClick={() => navigate('/dashboard/add-course')}
                    className="text-yellow-100 hover:text-yellow-300 cursor-pointer font-medium text-sm sm:text-base transition"
                >
                    + Add Course
                </p>
            </div>

            {/* Course Table */}
            <CourseTable courses={courses} setCourses={setCourses} />
        </div>

    )
}

export default MyCourse;