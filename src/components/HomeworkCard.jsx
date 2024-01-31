import React from "react";
import axios from "axios";

function HomeworkCard(props) {
  const { homework, openEdit, setReload } = props;
  const { id, question, startdate, duedate, published, Subject } = homework;
  const formatDate = (d) => {
    return new Intl.DateTimeFormat("en-UK", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(d);
  };
  const handleDelete = async (e) => {
    try {
      e.stopPropagation();
      const token = localStorage.getItem("token");
      const re = await axios.delete(`http://localhost:9999/homework/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReload((prv) => !prv);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div
        className="card w-5/6 border mx-auto hover:shadow"
        onClick={() => openEdit(homework)}
      >
        <div className="card-body gap-5">
          <div className="flex justify-between">
            <div className="text-xl">
              {/* HTML */}
              {Subject.title}
              <small
                className={`border rounded ms-3 p-1 text-xs ${
                  published ? "bg-info" : ""
                }`}
              >
                {!published && "Un-"}published
              </small>
            </div>
            <div
              className="badge badge-error badge-outline cursor-pointer"
              onClick={handleDelete}
            >
              delete
            </div>
          </div>
          <div className="flex justify-between">
            <p>Start: {formatDate(new Date(startdate))}</p>
            {/* <p>Start: {startdate}</p> */}
            <p className="text-right">
              Due date: {formatDate(new Date(duedate))}
            </p>
          </div>
          <p className="text-lg">{question}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeworkCard;
