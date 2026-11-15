/* AutoMinds AI Services: small shared script for every page.
   It does NOT send any lead data. Lead forms keep their own code on their own page. */

/* ===== LIVE DEMO SWITCH =====
   The "Try it on WhatsApp" demo section stays hidden while this is empty.
   To turn it on, paste the demo WhatsApp link between the quotes, for example:
   var DEMO_WA_LINK = 'https://wa.me/234XXXXXXXXXX?text=Hi';
   Only wa.me or api.whatsapp.com links are accepted. */
var DEMO_WA_LINK = '';

(function () {
  var link = String(DEMO_WA_LINK || '').trim();
  var valid = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(link);
  if (valid) {
    var sections = document.querySelectorAll('[data-demo]');
    for (var i = 0; i < sections.length; i++) {
      var a = sections[i].querySelector('[data-demo-link]');
      if (a) { a.href = link; }
      sections[i].hidden = false;
    }
  }

  // Footer year
  var y = document.querySelectorAll('[data-year]');
  for (var j = 0; j < y.length; j++) { y[j].textContent = new Date().getFullYear(); }
})();
