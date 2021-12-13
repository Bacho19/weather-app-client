export const sideMenuHidding = (hiddingContent) => {
  window.scrollTo(0, 0);
  let hiddingCount = 0;
  const hiddingSpeed = 9;
  const interval = setInterval(() => {
    if (hiddingCount >= window.innerWidth) {
      clearInterval(interval);
      hiddingContent.current.style.display = "none";
    }
    hiddingCount += hiddingSpeed;
    hiddingContent.current.style.left = `-${hiddingCount}px`;
  }, 1);
};

export const sideMenuShowing = (hiddingContent) => {
  window.scrollTo(0, 0);
  hiddingContent.current.style.display = "flex";
  let showingCount = window.innerWidth;
  const showingSpeed = 9;
  const interval = setInterval(() => {
    if (showingCount <= 0) {
      clearInterval(interval);
    }
    if (showingCount < showingSpeed) {
      showingCount -= showingCount;
      hiddingContent.current.style.left = `-${showingCount}px`;
      clearInterval(interval);
    }
    showingCount -= showingSpeed;
    hiddingContent.current.style.left = `-${showingCount}px`;
  }, 1);
};
