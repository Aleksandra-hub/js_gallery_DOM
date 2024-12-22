'use strict';

const list = document.querySelector('#thumbs');

list.onclick = function (item) {
  const target = item.target;
  const largeImg = document.querySelector('#largeImg');

  largeImg.src = target.src;

  return false;
};
