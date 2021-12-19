import ajax from '../../modules/ajax';

export const ajaxFetchMaze = (params) => {
  return ajax.get('/lab.php', params);
};
