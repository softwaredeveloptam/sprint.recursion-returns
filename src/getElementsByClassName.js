const getElementsByClassName = (target) => {
  const result = [];
  const root = document.documentElement;

  function recursive(element) {
    if (element.classList && element.classList.contains(target)) {
      result.push(element);
    }

    if (element.childNodes) {
      for (let i = 0; i < element.childNodes.length; i++) {
        recursive(element.childNodes[i]);
      }
    }
  }

  recursive(root);

  return result;
};

module.exports = { getElementsByClassName };
