/* 제작 크레딧 — 전 페이지 공용. 날짜(CREDIT_DATE)는 여기 한 곳만 바꾸면 모든 페이지에 반영됩니다. */
(function(){
  var CREDIT_DATE = '2026년 9월';
  function add(){
    if(document.querySelector('.site-credit')) return;
    var el = document.createElement('div');
    el.className = 'site-credit';
    el.innerHTML = '기획·제작 지음웍스 · '
      + '<a href="https://jieumworks.com" target="_blank" rel="noopener">jieumworks.com</a> · '
      + CREDIT_DATE;
    document.body.appendChild(el);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
  else add();
})();
