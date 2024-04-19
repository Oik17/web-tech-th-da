const menuItems = document.querySelectorAll('.nav ul li');
menuItems.forEach(item => {
  item.addEventListener('click', function() {

    menuItems.forEach(menuItem => menuItem.classList.remove('highlight'));
    this.classList.add('highlight');
  });
});
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.col-4');
  sections.forEach(section => {
    const scrollPosition = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop - sectionHeight / 3 &&
      scrollPosition <= sectionTop + sectionHeight + sectionHeight / 3
    ) {
      section.classList.add('animated');
    } else {
      section.classList.remove('animated');
    }
  });
});