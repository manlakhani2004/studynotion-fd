import React, { useEffect, useState } from "react";

function RequirementField({ name, label, register, setValue, getValues, errors }) {
    const [requirement, setRequirement] = useState("");
    const [requirementList, setRequirementList] = useState([]);

    function HandleAddRequirement() {
        if (requirement) {
            setRequirementList([...requirementList,requirement])
            // let tempRequirmentList = [];
            // tempRequirmentList.push(requirement)
            // setRequirementList(tempRequirmentList)
            setRequirement("");
        }
    }
    function HandleRemoveRequirement(index) {
        let updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList)
    }

    useEffect(()=>{
        register(name,{required:true});
    },[])

    useEffect(()=>{
        setValue(name,requirementList);
    },[requirementList])
    return (
        <div className="flex flex-col space-y-2">
  <label className="text-sm text-richblack-5" htmlFor={name}>
    {label} <sup className="text-pink-200">*</sup>
  </label>

  <div className="flex flex-col items-start space-y-2">
    <input
      type="text"
      id={name}
      value={requirement}
      onChange={(e) => setRequirement(e.target.value)}
      className="form-style w-full p-2"
    />
    <button
      type="button"
      onClick={HandleAddRequirement}
      className="font-semibold text-yellow-50"
    >
      Add
    </button>
  </div>

  {requirementList.length > 0 && (
    <ul className="mt-2 list-inside list-disc">
      {requirementList.map((requirement, index) => (
        <li key={index} className="flex items-center text-richblack-5">
          <span>{requirement}</span>
          <button
            type="button"
            className="ml-2 text-xs text-pure-greys-300"
            onClick={() => HandleRemoveRequirement(index)}
          >
            clear
          </button>
        </li>
      ))}
    </ul>
  )}

  {errors[name] && (
    <span className="ml-2 text-xs tracking-wide text-pink-200">
      {label} is required
    </span>
  )}
</div>

        // <div>
        //     <div>
        //         <label htmlFor={label}>Course Requirements</label>
        //         <input type="text" name={name} id={label}
        //             onChange={(e) => setRequirement(e.target.value)} 
        //             value={requirement}
        //             className=" w-full"
        //         />
        //         <button type="button" onClick={HandleAddRequirement}>Add</button>
        //     </div>
        //     {
        //         requirementList.length > 0 &&
        //         (

        //             requirementList.map((requirement, index) => {
        //                 return (
        //                     <div key={index}>
        //                         <p key={index}>
        //                             {requirement}
        //                         </p>
        //                         <p onClick={()=>HandleRemoveRequirement(index)}>
        //                             Clear
        //                         </p>
        //                     </div>
        //                 )

        //             })
        //         )
        //     }

        //     {
        //         errors.name && 
        //         (
        //             <div>Requirement  is required</div>
        //         )
        //     }
        // </div>
    )
}
export default RequirementField;