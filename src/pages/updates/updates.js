import React, { useEffect, useContext } from "react";
import Loader from "../../components/shared/loader/loader";
import { CommonContext } from "../../context/common/commonContext";
import "./updates.scss";

const UpdatesPage = () => {
  const { getUpdates, loading, updates } = useContext(CommonContext);

  useEffect(() => {
    if (updates.length) return;
    getUpdates();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="updates">
      {loading ? <Loader /> : null}
      {updates.map(item => (
        <div className="card card-update update" key={item.id}>
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
