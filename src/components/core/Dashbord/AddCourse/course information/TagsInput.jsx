import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

function TagsInput({ name, id, label, register, setValue, getValues, errors }) {
    const [tag, setTags] = useState("");
    const [TagstList, setTagsList] = useState([]);

    function HandleAddTags(event) {
        if (event.keyCode == 13 || event.keyCode == 188) {
            if (tag) {
                setTagsList([...TagstList, tag])
                // let tempRequirmentList = [];
                // tempRequirmentList.push(requirement)
                // setRequirementList(tempRequirmentList)
                setTags("");
            }
        }
    }
    function HandleRemoveTags(index) {
        let updatedTagsList = [...TagstList];
        updatedTagsList.splice(index, 1);
        setTagsList(updatedTagsList)
    }

    useEffect(() => {
        register(name, { required: true });
    }, [])

    useEffect(() => {
        setValue(name, TagstList);
    }, [TagstList])
    return (
        <div>
            <div>
                <label htmlFor={label}>Course Tags</label>
                <input type="text" name={name} id={id}
                    onChange={(e) => setTags(e.target.value)}
                    value={tag}
                    className=" w-full py-2"
                    onKeyDown={(event) => HandleAddTags(event)}
                />
                {/*  <button type="button"}>Add</button> */}
            </div>
            {
                TagstList.length > 0 &&
                (

                    TagstList.map((tag, index) => {
                        return (
                            <div key={index}>
                                <p key={index}>
                                    {tag}
                                </p>
                                <p onClick={() => HandleRemoveTags(index)}>
                                    <FaXmark />
                                </p>
                            </div>
                        )

                    })
                )
            }

            {
                errors.name &&
                (
                    <div>Tags is required</div>
                )
            }
        </div>
    )
}

export default TagsInput