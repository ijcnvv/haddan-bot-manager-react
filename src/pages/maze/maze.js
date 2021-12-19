import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMaze } from '../../actions/mazeActions';
import Select from 'components/shared/select/select';
import Loader from 'components/shared/loader/loader';
import './maze.scss';

const MazePage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ maze }) => maze);
  const [lvl, setLevel] = useState('1');

  const createMaze = () => {
    return { __html: data };
  };

  const optionsList = { 1: 'I Уровень', 2: 'II Уровень', 3: 'III Уровень' };

  useEffect(() => {
    dispatch(fetchMaze({ lvl }));
  }, [dispatch, lvl]);

  return (
    <div className="maze-map">
      <Select className="maze-map__field" value={lvl} onChange={setLevel} options={optionsList} />
      <div className="maze-map__content">
        <Loader loading={loading} className="maze-map__loader" />
        <div dangerouslySetInnerHTML={createMaze()}></div>
      </div>
    </div>
  );
};

export default MazePage;
