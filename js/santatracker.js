(function() {

window.santatracker = {};

window.santatracker.setup = function() {
  window.santatracker.addErrorHandler();

  if (!window.santatracker.isValidDomain()) {
    window.location.pathname = '';
    return;
  }
};

window.santatracker.isValidDomain = function() {
  if (window['DEV']) return true;

  // We only have approval for these domains.
  var domains = ['com', 'ad', 'ae', 'com.ag', 'it.ao', 'com.ar', 'as', 'at',
      'com.au', 'com.bd', 'be', 'bf', 'bg', 'com.bh', 'bi', 'bj', 'com.bo',
      'com.br', 'bs', 'bt', 'co.bw', 'com.bz', 'ca', 'cd', 'cf', 'cg', 'ch',
      'ci', 'cl', 'cm', 'co.ao', 'co.cr', 'com.cu', 'cz', 'de', 'dj', 'dk',
      'dm', 'com.do', 'dz', 'com.ec', 'ee', 'com.eg', 'es', 'com.et', 'fi',
      'com.fj', 'fm', 'fr', 'ga', 'com.gh', 'gm', 'gp', 'gr', 'com.gt', 'gy',
      'com.hk', 'hn', 'hr', 'ht', 'hu', 'co.id', 'ie', 'co.il', 'co.in', 'iq',
      'is', 'it', 'com.jm', 'jo', 'jp', 'co.ke', 'com.kh', 'co.kr', 'com.kw',
      'la', 'com.lb', 'li', 'lk', 'co.ls', 'lt', 'lu', 'lv', 'com.ly', 'mg',
      'mk', 'ml', 'mn', 'com.mt', 'mu', 'mv', 'mw', 'com.mx', 'com.my', 'co.mz',
      'com.na', 'ne', 'com.ng', 'com.ni', 'nl', 'no', 'com.np', 'co.nz',
      'com.om', 'com.pa', 'com.pe', 'com.ph', 'pl', 'com.pr', 'pt', 'com.py',
      'com.qa', 'ro', 'rs', 'ru', 'rw', 'com.sa', 'sc', 'se', 'com.sg', 'si',
      'sk', 'com.sl', 'sn', 'so', 'st', 'com.sv', 'td', 'tg', 'co.th', 'tn',
      'to', 'tt', 'com.tw', 'co.tz', 'com.ua', 'co.ug', 'co.uk', 'com.uy',
      'com.vc', 'co.ve', 'vu', 'ws', 'co.za', 'co.zm', 'co.zw'
  ];
  for (var i = 0, d; d = '.' + domains[i]; i++) {
    if (document.domain.indexOf(d) + d.length == document.domain.length) {
      return true;
    }
  }
  return false;
};

window.santatracker.addErrorHandler = function() {
  // Track and log any errors to analytics
  window.onerror = function(message, file, lineNumber) {
    // We don't want to trigger any errors inside window.onerror otherwise
    // things will get real bad, real quick.
    try {
      window.santaApp.fire('analytics-track-event', {
          category: 'error', action: file + ':' + lineNumber,
          label: '' + message});
    } catch (e){}
  };
};

window.santaApp = document.querySelector('santa-app');

// Polyfill needs I18nMsg to exist before setting the lang. Timing is fine for native :(
document.addEventListener('HTMLImportsLoaded', function() {
  I18nMsg.lang = document.documentElement.lang || 'en'; // Set locale for entire site (e.g. i18n-msg elements).
  window.santaApp.language = I18nMsg.lang;
});

window.santatracker.setup();

})();
