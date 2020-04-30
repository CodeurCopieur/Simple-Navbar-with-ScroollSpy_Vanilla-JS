const sectionTab =  document.querySelectorAll('section');
const sectionsPos = {}
//object qui contenir les offsetTop des sections
const link_active = document.querySelector('.nav_link');
link_active.classList.add('active');

sectionTab.forEach( section => {
  //on parse chaque section
  sectionsPos[section.id] = section.offsetTop;
  //sectionPos est un objet avec des propriétés(id) contenant l'offsetTop de chaque section
  console.log(sectionsPos);
})


window.addEventListener('scroll', (e) => {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(scrollPosition);
  //scrollTop : le nombre de pixels dont le contenu de l'élément a défilé vers le haut.

  for(id in sectionsPos) {
    if(sectionsPos[id] <= scrollPosition){
      document.querySelector('.active').classList.remove('active');
      document.querySelector(`a[href*=${id}]`).classList.add('active');
    }
  }
  
})

