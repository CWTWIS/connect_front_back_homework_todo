import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function HomeworkForm() {
  const [subject, setSubject] = useState([]);
  const [input, setInput] = useState({
    subjectId: "",
    question: "",
    startdate: new Date(),
    duedate: new Date(),
    published: false,
  });

  const handleChange = (event) => {
    setInput((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };
  useEffect(() => {
    const run = async () => {
      const rs = await axios.get("http://localhost:9999/subject");
      console.log(rs.data);
      setSubject(rs.data.subjects);
    };
    run();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      const rs = await axios.post("http://localhost:9999/homework", input, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("new homework ok");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="flex flex-col gap-3 min-w-[600px] w-4/6 border mx-auto p-3 rounded">
      <h1 className="text-4xl">New Homework</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select subject</span>
          </div>
          <select
            className="select select-bordered"
            value={input.subjectId}
            name="subjectId"
            onChange={handleChange}
          >
            <option
              disabled
              value="0"
              // selected
            >
              Pick one
            </option>
            {subject.map((el) => (
              <option key={el.id} value={el.id}>
                {el.title}
              </option>
            ))}
            {/* <option>HTML</option>
            <option>CSS</option>
            <option>Javascript</option> */}
          </select>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Question</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Question"
            name="question"
            value={input.question}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-5">
            <span className="label-text">Published</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              name="published"
              checked={input.published}
              onChange={(e) =>
                setInput((prv) => ({ ...prv, published: !prv.published }))
              }
            />
          </label>
        </div>
        <div className="flex justify-between px-3">
          <div className="form-control">
            <div className="label">
              <span className="label-text">Start date</span>
            </div>
            {/* <input
              type="date"
              className=""
              name="startdate"
              value={input.startdate}
              onChange={handleChange}
            /> */}
            <DatePicker
              dateFormat="dd / MM / yyyy"
              selected={input.startdate}
              onChange={(date) =>
                setInput((prv) => ({ ...prv, startdate: date }))
              }
            />
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Due date</span>
            </div>
            <DatePicker
              dateFormat="dd / MM / yyyy"
              selected={input.duedate}
              onChange={(date) =>
                setInput((prv) => ({ ...prv, duedate: date }))
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-secondary mt-[100px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomeworkForm;
