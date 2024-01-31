import React from "react";

function HomeworkCard(props) {
  const { homework } = props;
  const { question, startdate, duedate, published, Subject } = homework;
  return (
    <div>
      <div className="card w-5/6 border mx-auto hover:shadow">
        <div className="card-body gap-5">
          <div className="flex justify-between">
            <div className="text-xl">
              {/* HTML */}
              {Subject.title}
              <small className="border rounded">
                {!published && "Un-"}published
              </small>
            </div>
            <div className="badge badge-error badge-outline">delete</div>
          </div>
          <div className="flex justify-between">
            <p>Start: {startdate}</p>
            <p className="text-right">Due date: {duedate}</p>
          </div>
          <p className="text-lg">{question}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeworkCard;
