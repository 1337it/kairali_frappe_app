(function () {
  const init = () => {
    custom_app?.utils?.replaceSidebarWithBack({
      sizePx: 56,          // tweak size here
      onlyMobile: true,    // set false to enable on desktop too
      fallbackRoute: 'app',
      // iconSVG: '<svg>...</svg>' // optionally drop your own icon
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
