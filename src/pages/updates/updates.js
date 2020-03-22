import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdates } from "../../actions/updatesActions";
import Loader from "../../components/shared/loader/loader";
import "./updates.scss";

const UpdatesPage = () => {
  const dispatch = useDispatch();
  const { data: updates, loading } = useSelector(({ updates }) => updates);

  useEffect(() => {
    if (updates.length) return;
    dispatch(fetchUpdates());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="updates">
      <Loader loading={loading} />
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
