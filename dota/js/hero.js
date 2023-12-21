var grid = document.querySelector('.gallery');
var masonry = new Masonry(grid, {
  itemSelector: '.item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
