(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) d(t);
  new MutationObserver((t) => {
    for (const r of t)
      if (r.type === 'childList')
        for (const s of r.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && d(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function y(t) {
    const r = {};
    return (
      t.integrity && (r.integrity = t.integrity),
      t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function d(t) {
    if (t.ep) return;
    t.ep = !0;
    const r = y(t);
    fetch(t.href, r);
  }
})();
const c = function (e) {
    document.querySelector('.message').textContent = e;
  },
  a = function () {
    return Math.trunc(Math.random() * 20) + 1;
  },
  l = function (e) {
    document.querySelector('.score').textContent = e;
  },
  m = function (e) {
    document.querySelector('body').style.backgroundColor = e;
  },
  f = function (e) {
    document.querySelector('.number').textContent = e;
  },
  g = function (e) {
    document.querySelector('.number').style.width = e;
  };
let u = a();
const h = document.querySelector('.check'),
  b = document.querySelector('.again');
let o = 20,
  i = 0;
h.addEventListener('click', () => {
  const e = Number(document.querySelector('.guess').value),
    n = document.querySelector('.highscore');
  e
    ? e === u
      ? (c('🎉 You guessed the correct number!'),
        f(u),
        m('#60b347'),
        g('30rem'),
        o > i && ((i = o), (n.textContent = i)))
      : e !== u &&
        (o > 1
          ? (c(e > u ? '📈 Your number was to high.' : '📉 Your number was to low.'), o--, l(o))
          : (c('🤯 You lost the game!'), l(0)))
    : c('🚩 Please enter a number.');
});
b.addEventListener('click', () => {
  const e = document.querySelector('.guess');
  (u = a()), l(20), (o = 20), c('Start guessing...'), f('?'), (e.value = ''), g('15rem'), m('#222');
});
