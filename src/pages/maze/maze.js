import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchMaze } from '../../actions/mazeActions';
import Select from 'components/shared/select/select';
import Loader from 'components/shared/loader/loader';
import './maze.scss';

const MazePage = () => {
  const initLevel = '1';
  const optionsList = { 1: 'I Уровень', 2: 'II Уровень', 3: 'III Уровень' };

  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { data, loading } = useSelector(({ maze }) => maze);
  const [lvl, setLevel] = useState(initLevel);
  const query = useMemo(() => new URLSearchParams(search), [search]);

  const date = new Date();
  const hour = date.getUTCHours(); // 6 14 22
  const nextUpdateHour = (hour < 6 || hour >= 22 ? 6 : hour < 14 ? 14 : 22) + 3;
  const nextHour = nextUpdateHour > 24 ? nextUpdateHour - 24 : nextUpdateHour;
  const nextDate = `${String(nextHour).padStart(2, '0')}:00`;

  const getMazeHtml = () => {
    return { __html: data };
  };

  const changeLevel = (lvl) => {
    history.replace({ search: `?level=${lvl}` });
    setLevel(lvl);
    dispatch(fetchMaze({ lvl }));
  };

  useEffect(() => {
    const queryLevel = query.get('level');
    const lvl = Object.keys(optionsList).includes(queryLevel) ? queryLevel : initLevel;
    changeLevel(lvl);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="maze-map">
      <Select className="maze-map__field" value={lvl} onChange={changeLevel} options={optionsList} />
      <div className="maze-map__content">
        <Loader loading={loading} className="maze-map__loader" />
        <div dangerouslySetInnerHTML={getMazeHtml()}></div>
        <div className="maze-map__update">Следующее обновление в {nextDate}</div>
      </div>
    </div>
  );
};

export default MazePage;
