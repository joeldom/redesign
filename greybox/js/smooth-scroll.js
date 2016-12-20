/**
 * This gist is for Javascript beginners.
 * @author: Anthony Du Pont <antho.dpnt@gmail.com>
 * @source: https://gist.github.com/Anthodpnt/4aff036691e7a93ec31342924d17ddcb
 * @site: https://www.twitter.com/JsGists
 *
 * In episode #11 of "Gist for Javascript Beginners" I explained what was a Linear Interpolation.
 * In this episode I'll show you another case it's really usefull.
 *
 * It's a trend since a few months to add smooth scroll to websites because the look-and-feel is
 * better than the basic scroll of the browser. But how do you do this kind of effect ? Thanks
 * to Linear Interpolation it's really easy.
 *
 * Example:
 * I have a page with multiple sections and I want to apply a smooth scroll.
 **/

// First we get the elements we need, the body and our container on which
// we are going to apply a smooth scroll. You will always need a container
// to apply a smooth scroll. You will not be able to apply it directly to
// the body.
const body = document.body;
const main = document.querySelector('main');

// We define variables we will need later. 
// 2 variables to store the scroll position and 2 variables to store the
// container position.
let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

// The trick is to set a heigh to the body to keep the browser scroll bar.
body.style.height = main.clientHeight + 'px';

// Then we fix our container so it won't move when the user scrolls.
// We will move it ourself with the Linear Interpolation and translations.
main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

// We bind a scroll event to the window to watch scroll position.
window.addEventListener('scroll', scroll);

function scroll() {
  // We only update the scroll position variables
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

// Then we start a `requestAnimationFrame` loop.
// For more informations about `requestAnimationFrame` check the episode #6 of
// "Gist for Javascript Beginners".
window.requestAnimationFrame(render);

function render() {
  // We calculate our container position by using our Linear Interpolation method.
  // For more informations about Linear Interpolation check the episode #11 of
  // "Gist for Javascript Beginners".
  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);

  // I choose to round the interpolated positions to 2 decimals for clarity.
  // You could remove these to lines and the smooth scroll would still work.
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  // Finally we translate our container to its new positions.
  // Don't forget to add a minus sign because the container need to move in
  // the opposite direction of the window scroll.
  main.style.transform = `translate(-${dx}px, -${dy}px)`;

  // And we loop again.
  window.requestAnimationFrame(render);
}

// This is our Linear Interpolation method.
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}
