const elements = document.querySelectorAll('.section-block');
const navList = document.querySelectorAll('.navigation-anchor');


console.log(elements)
console.log(navList)

let currentSection = 'main-section'

window.addEventListener('scroll', () => {
  console.log(currentSection)
  elements.forEach(sectionEl => {
    if (window.scrollY >=(sectionEl.offsetTop - sectionEl.clientHeight / 2)){
      currentSection = sectionEl.id;
      // console.log(currentSection)
    }
  })


  navList.forEach(navlinkEl =>{
    // console.log(navlinkEl)
    if ((navlinkEl.href.includes(currentSection)) && navlinkEl.id.includes('section')){
      document.querySelector('.active').classList.remove('active');
      navlinkEl.classList.add('active');
    }
  })
});


