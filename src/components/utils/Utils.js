export const checkBrowserSupportLocalstorage = () => {
  if (typeof Storage === undefined) {
    alert("Browser doesn't local storage, please change your browser!");
    return false;
  }
  return true;
};
