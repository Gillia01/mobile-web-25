// Detects if browser supports Flexbox
Modernizr.addTest('flexbox', Modernizr.flexbox);

// Detects if browser supports CSS Grid
Modernizr.addTest('cssgrid', Modernizr.cssgrid);

// Polyfill for `fetch` if not supported in older browsers
if (!Modernizr.fetch) {
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js"><\/script>');
}
