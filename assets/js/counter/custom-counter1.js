// Counter js(Numeric)
(function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 100;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
})();
