// Older bookmarks used section names on the homepage.
const pages = new Map([
  ['#research', '/research.html'],
  ['#teaching', '/teaching.html'],
  ['#contact', '/contact.html'],
]);
const destination = pages.get(window.location.hash);
if (destination) window.location.replace(destination);
