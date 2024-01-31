import { useState, useEffect } from "react";
import axios from "axios";
import HomeworkCard from "../components/HomeworkCard";

function TeacherHome() {
  const [homework, setHomeWork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");
        const rs = await axios.get("http://localhost:9999/homework", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHomeWork(rs.data.homework);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="text-4xl">Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl text-center">All homework</h1>
      {/* {JSON.stringify(homework[0].question)} */}
      {/* <HomeworkCard homework={homework[0]} /> */}
      {homework.map((el) => (
        <HomeworkCard key={el.id} homework={el} />
      ))}
    </div>
  );
}

export default TeacherHome;
