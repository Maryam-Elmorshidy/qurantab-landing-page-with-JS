const clickLabelEvent = (item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      item.click();
    }
  });
};

const observeElements = (elements) => {
  const options = {
    threshold: 0.4,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observe = new IntersectionObserver(callback, options);
  elements.forEach((element) => observe.observe(element));
};

export { clickLabelEvent, observeElements };
