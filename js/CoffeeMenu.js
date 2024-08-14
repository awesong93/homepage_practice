// jQuery(document).ready(function () {

//   $('.navi>li').mouseover(function () {
//     $('.submenu').stop().slideDown(500);
//     $("#menu_bg").stop().slideDown(500);
//   }).mouseout(function () {
//     $('.submenu').stop().slideUp(500);
//     $("#menu_bg").stop().slideUp(500);
//   });

// });

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu > ul > li');

  menuItems.forEach(item => {

    item.addEventListener('mouseover', function() {
      this.querySelector('.submenu').style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
      this.querySelector('.submenu').style.display = 'none'
    });
  });
});