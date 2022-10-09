export const getProjectFromLocalStorage = () => {
  const project = window.localStorage.getItem("project") || "today";
  return project;
}