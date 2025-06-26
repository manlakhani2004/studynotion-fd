import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RiUploadCloud2Fill } from "react-icons/ri";


function UploadVideo({ name, id, label, register, setValue, viewData, editData, errors }) {
    const InputData = useRef();
    const [previewVideo, setpreviewVideo] = useState(null);

    function handleFileClick(event) {
        InputData.current.click();
    }

    function handleVideoUpload(event) {
        try {
            const file = event.target.files[0];
            setpreviewVideo(file);
            console.log(previewVideo);

        } catch (error) {
            console.log("error while upload video", error);
        }

    }

    useEffect(() => {
        register(name, { required: true })
    }, [register])

    useEffect(() => {
        setValue(name, previewVideo);
    }, [previewVideo]);

    return (
        <div>
            <label htmlFor={label}>Lecture Video <sup>*</sup></label>
            <div onClick={handleFileClick} className=" w-full h-[200px]  bg-richblack-500">
                {
                    previewVideo || viewData || editData ? (
                        <video width="320" height="240" controls>
                            <source src={(viewData || editData) ? `${viewData}` : URL.createObjectURL(previewVideo)} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>

                    ) : (
                        <div>
                            <RiUploadCloud2Fill />
                            <p>Drag and drop an video</p>
                            <p>Max 6MB each (12MB for videos)</p>
                            <ul>
                                <li>Aspect ratio 16:9</li>
                                <li>Recommended size 1024x576</li>
                            </ul>
                        </div>
                    )
                }
                <input type="file" name={name} id={id} ref={InputData} onChange={handleVideoUpload} style={{ display: "none" }} />
                {
                    errors.name && (
                        <div>
                            Upload lecture is required
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default UploadVideo;