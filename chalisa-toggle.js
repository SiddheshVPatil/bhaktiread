// chalisa-toggle.js — shared across all chalisa pages
(function () {
  const STORAGE_KEY = 'bhaktiread_script';

  function setMode(mode) {
    if (mode === 'roman') {
      document.body.classList.add('roman-mode');
      document.getElementById('btn-hindi').classList.remove('active');
      document.getElementById('btn-roman').classList.add('active');
    } else {
      document.body.classList.remove('roman-mode');
      document.getElementById('btn-hindi').classList.add('active');
      document.getElementById('btn-roman').classList.remove('active');
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Restore saved preference
    const saved = localStorage.getItem(STORAGE_KEY) || 'hindi';
    setMode(saved);

    document.getElementById('btn-hindi').addEventListener('click', function () {
      setMode('hindi');
    });
    document.getElementById('btn-roman').addEventListener('click', function () {
      setMode('roman');
    });
  });
})();
