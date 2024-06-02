export const handleScroll = (to: string) => (e: React.MouseEvent) => {
  e.preventDefault();

  const target = document.querySelector(to);
  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 50,
      behavior: "smooth",
    });
  }
};
