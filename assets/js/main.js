// https://css-tricks.com/styling-based-on-scroll-position/
'use strict';

const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) { cancelAnimationFrame(frame);}
        frame = requestAnimationFrame(() => {fn(...params);});
    }
};
  
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const header = document.querySelector('.stickyHeader');
const storeScroll = () => {
    header.dataset.scroll = window.scrollY;
}
  
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
// Update scroll position for first time
storeScroll();

const scrollToDownload = function() {
    document.querySelector('#download').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const scrollToFeature = function() {
    document.querySelector('#feature').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const scrollToContact = function() {
    document.querySelector('#contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const download = document.querySelector('#toDownload');
const feature = document.querySelector('#toFeatures');
const contact = document.querySelector('#toContact');
download.addEventListener("click", scrollToDownload);
feature.addEventListener("click", scrollToFeature);
contact.addEventListener("click", scrollToContact);
