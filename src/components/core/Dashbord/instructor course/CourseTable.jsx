import { useNavigate } from "react-router-dom"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { formattedDate } from "../../../../services/utils/dateFormatter";
import { deleteCourse, getInstructorCourses } from "../../../../services/operations/course";
import { useSelector } from "react-redux";
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"

export default function CourseTable({ courses, setCourses }) {
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const TRUNCATE_LENGTH = 30

    async function deleteCourseHandler(courseid) {

        await deleteCourse(courseid);
        //update UI
        const result = await getInstructorCourses(token);
        if (result) {
            setCourses(result);
        }
    }
    return (
<div className="w-full overflow-x-auto px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20 py-4">
  <table className="w-full table-fixed border-collapse text-left">
    <thead>
      <tr className="border-b border-richblack-600 text-sm sm:text-base text-richblack-100">
        <th className="py-2 px-3 w-[42%]">COURSES</th>
        <th className="py-2 px-3 w-[18%] text-center">DURATION</th>
        <th className="py-2 px-3 w-[18%] text-center">PRICE</th>
        <th className="py-2 px-3 w-[22%] text-center">ACTIONS</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-richblack-700">
      {courses.map((course) => (
        <tr key={course._id} className="text-richblack-25 text-sm sm:text-base align-top">
          {/* Course Column */}
          <td className="py-4 px-3">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center overflow-hidden">
              <div className="min-w-[150px] max-w-[250px] w-full shrink-0">
                <img
                  src={course?.thumbnail}
                  alt="Course Thumbnail"
                  className="w-full h-[160px] object-cover rounded-md"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="font-semibold text-base sm:text-lg break-words">{course?.courseName}</p>
                <p className="text-richblack-200 text-sm leading-relaxed break-words">
                  {course.courseDescription.split(" ").length > TRUNCATE_LENGTH
                    ? course.courseDescription.split(" ").slice(0, TRUNCATE_LENGTH).join(" ") + "..."
                    : course.courseDescription}
                </p>
                <p className="text-xs text-richblack-300">Created: {formattedDate(course?.createdAt)}</p>
                <p className="text-xs">
                  {course?.status === "Published" ? (
                    <span className="text-green-400 font-medium">Published</span>
                  ) : (
                    <span className="text-yellow-400 font-medium">Drafted</span>
                  )}
                </p>
              </div>
            </div>
          </td>

          {/* Duration */}
          <td className="py-4 px-3 text-center align-middle whitespace-nowrap">
            20h 10m
          </td>

          {/* Price */}
          <td className="py-4 px-3 text-center align-middle whitespace-nowrap">
            <span className="text-yellow-100 font-semibold">₹{course.price}</span>
          </td>

          {/* Actions */}
          <td className="py-4 px-3 text-center align-middle">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate(`/course/editcourse/${course._id}`)}
                className="hover:text-yellow-300 transition-colors"
              >
                <FiEdit2 size={20} />
              </button>
              <button
                onClick={() => deleteCourseHandler(course._id)}
                className="hover:text-red-400 transition-colors"
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    )
}

