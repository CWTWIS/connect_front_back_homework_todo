import React from "react";

function HomeworkForm() {
  return (
    <div className="flex flex-col gap-3 min-w-[600px] w-4/6 border mx-auto p-3 rounded">
      <h1 className="text-4xl">New Homework</h1>
      <form className="flex flex-col gap-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select subject</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>HTML</option>
            <option>CSS</option>
            <option>Javascript</option>
          </select>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Question</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Question"
          ></textarea>
        </label>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-5">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-primary" checked />
          </label>
        </div>
        <div className="flex justify-between px-3">
          <div className="form-control">
            <div className="label">
              <span className="label-text">Start date</span>
            </div>
            <input type="date" className="" />
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Due date</span>
            </div>
            <input type="date" className="" />
          </div>
        </div>
        <button className="btn btn-outline btn-secondary mt-[100px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomeworkForm;
