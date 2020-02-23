import React, { useEffect, useContext } from "react";
import Loader from "../../components/shared/loader/loader";
import { CommonContext } from "../../context/common/commonContext";

const UpdatesPage = () => {
  const { fetchUpdates, loading, updates } = useContext(CommonContext);

  useEffect(() => {
    if (updates.length) return;
    fetchUpdates();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="updates">
      {loading ? <Loader /> : null}
      {updates.map(item => (
        <div className="card update" key={item.id}>
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <ul className="update__list browser-default">
              {item.text.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdatesPage;
