### Oriel AutoRanker

An open-source Tampermonkey userscript that ranks your Foundation Programme preferences on the Oriel platform using a simple CSV upload — no more endless drag-and-drop! Intended for UKFPO applicants.

<sup>This tool is not affiliated with Oriel or the UK Foundation Programme Office. Use at your own discretion.</sup>

---

#### User Guide

##### 🧩 1. Install Tampermonkey on [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)/[Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/).

##### 📝 2. Add the Script.
1. Click the **Tampermonkey icon** in your browser.
2. Click **Create a new script**.
3. Delete the default code and paste in the script from [`oriel-autoranker.js`](./oriel-autoranker.js).
4. Click **File > Save** (or press **Ctrl+S**).

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdjcGIwejd5MGI2amQyZnhqZ3MzNXAwY241MGRyYmYxeDNnbXR3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z9p9ShSYDh6iPVWoCa/giphy.gif" height="200">

##### 🌐 3. Open Oriel & Upload CSV
1. Go to your Programme Preferences ranking page on [Oriel](https://www.oriel.nhs.uk/).
2. You will see a 
3. Upload your `.csv` file with your ranked preferences using the **file upload box** in the top-right corner.
4. The script will move all items into the correct order automatically.

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHVodWhkNms4bGJpNjBxd2g2NmFtYnJod3B2dmhsODFqZmc0ZmVoOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/POtrauCWdKq36twSpY/giphy.gif" height="200">

#### CSV Format

The CSV must contain your ranked job codes in the **first column**. To convert an Excel file to a comma-separated value file, open the Excel file and click **File > Save As** and change **.xlsx** to **.csv**.

![image](https://github.com/user-attachments/assets/3b94d4aa-c49a-4083-89c8-4736c3d9250a)


