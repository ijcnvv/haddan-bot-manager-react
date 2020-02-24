import ajax from "../../modules/ajax";

const ajaxGetUpdates = () => {
  const params = {
    get: "updates"
  };
  return ajax.get("/api.php", params);
};
export { ajaxGetUpdates };
