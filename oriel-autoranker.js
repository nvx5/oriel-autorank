// ==UserScript==
// @name         Oriel AutoRank
// @namespace    https://github.com/nvx5/oriel-autorank/
// @version      1.0
// @description  Auto rank options by moving items from right column to left based on CSV ranking
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // --- Inject Upload Button ---
  const uploadBtn = document.createElement('input');
  uploadBtn.type = 'file';
  uploadBtn.accept = '.csv';
  uploadBtn.style.position = 'fixed';
  uploadBtn.style.top = '10px';
  uploadBtn.style.right = '10px';
  uploadBtn.style.zIndex = 9999;
  uploadBtn.title = "Upload CSV to auto-rank";
  document.body.appendChild(uploadBtn);

  uploadBtn.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const codes = parseCSV(text);

    if (!Array.isArray(codes) || codes.length === 0) {
      alert("CSV seems empty or invalid.");
      return;
    }

    console.log("Parsed CSV codes:", codes);
    rankItems(codes);
  });

  // --- Parse CSV (assumes first column has code) ---
  function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const codes = lines.map(line => line.split(',')[0].trim());
    return codes;
  }

  // --- Ranking Logic ---
  function rankItems(codes) {
    const rankedList = document.querySelector('#PreferenceList');
    const unrankedList = document.querySelector('#NoPreferenceList');
    const allUnrankedItems = Array.from(unrankedList.querySelectorAll('li.ui-sortable-handle'));

    let movedCount = 0;

    codes.forEach(code => {
      const matchedItem = allUnrankedItems.find(li => {
        const liCode = li.innerText.trim().split(':')[0];
        return liCode === code;
      });

      if (matchedItem) {
        rankedList.appendChild(matchedItem);
        movedCount++;
      } else {
        console.warn(`No match found for: ${code}`);
      }
    });

    // --- Let SortableJS know the list changed ---
    if (typeof Sortable !== 'undefined') {
      Sortable.utils && Sortable.utils._dispatchEvent && Sortable.utils._dispatchEvent(rankedList, "sortupdate", {});
    }

    alert(`Moved ${movedCount} items into ranked list.`);
  }
})();
