<img src=""/>
<link rel="shortcut icon" href="https://joeldom.github.io/asset/favicon.ico" rel="icon" type="image/x-icon">
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/64x64.png" sizes="64x64" />
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/128x128.png" sizes="128x128" />
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/76x76.png" sizes="76x76" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/120x120.png" sizes="120x120" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/152x152.png" sizes="152x152" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/180x180.png" sizes="180x180" />


<svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.9961 3.28817C34.9663 1.21686 30.0478 0 24.7386 0C11.0759 0 0 8.05885 0 17.9999C0 27.941 11.0759 35.9999 24.7386 35.9999C30.0757 35.9999 35.018 34.7702 39.0595 32.679C39.0384 32.6899 39.0173 32.7008 38.9961 32.7117C32.6554 29.4526 28.515 24.0781 28.515 17.9999C28.515 11.9218 32.6554 6.54729 38.9961 3.28817Z" fill="#1A3ACC"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.2543 35.9999C66.917 35.9999 77.9929 27.941 77.9929 17.9999C77.9929 8.05885 66.917 0 53.2543 0C47.9452 0 43.0266 1.21686 38.9968 3.28817C45.3375 6.54728 49.478 11.9218 49.478 17.9999C49.478 24.0781 45.3375 29.4526 38.9968 32.7117C32.6561 29.4526 28.5156 24.0781 28.5156 17.9999C28.5156 17.9999 28.5156 17.9999 28.5156 17.9999C28.5156 27.941 39.5915 35.9999 53.2543 35.9999Z" fill="#001C9B"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7047 2.69812C4.67837 5.87331 0 11.5392 0 18.0001C0 27.9412 11.0759 36 24.7386 36C30.085 36 35.0353 34.766 39.0807 32.6681C38.8604 32.6706 38.6395 32.6718 38.4181 32.6718C20.0521 32.6718 5.16347 24.2618 5.16347 13.8876C5.16347 9.69517 7.59491 5.82356 11.7047 2.69812Z" fill="#001C9B"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.2953 2.69812C73.3216 5.87331 78 11.5392 78 18.0001C78 27.9412 66.9241 36 53.2614 36C47.915 36 42.9648 34.766 38.9193 32.6681C39.1396 32.6706 39.3605 32.6718 39.5819 32.6718C57.9479 32.6718 72.8365 24.2618 72.8365 13.8876C72.8365 9.69517 70.4051 5.82356 66.2953 2.69812Z" fill="#1A3ACC"></path>
</svg>
<br/><br/>

# Chat Prompt Design

## Overview

This project is designed to provide a structured approach to managing components, data, and data design for a responsive web application. The focus is on creating reusable components, managing data effectively, and ensuring a well-thought-out data design.

---

## Components

### Description

The components in this project are designed to be modular and reusable. Each component serves a specific purpose and can be easily integrated into various parts of the application. The components utilize Bootstrap's grid system to ensure responsiveness across different devices.

### Key Features

- **Flexbox Layout**: Components are arranged using Flexbox for a clean and organized layout.
- **Responsive Design**: Components adapt to different screen sizes using Bootstrap's media breakpoints.
- **Hover Effects**: Interactive elements provide visual feedback on user actions, enhancing user experience.

### Example

```html
<div class="response-container">
  <div class="response">Response 1</div>
  <div class="response">Response 2</div>
  <div class="response">Response 3</div>
</div>
```

---

## Data

### Description

Data management is crucial for the functionality of the application. This section outlines how data is structured, accessed, and manipulated within the application.

### Data Structure

- **JSON Format**: Data is stored in JSON format for easy parsing and manipulation.
- **API Integration**: The application interacts with external APIs to fetch and update data dynamically.

### Example

```json
{
  "responses": [
    {
      "id": 1,
      "text": "Response 1"
    },
    {
      "id": 2,
      "text": "Response 2"
    }
  ]
}
```

---

## Data Design


### Description

Data design focuses on how data is organized and structured within the application. A well-thought-out data design ensures efficient data retrieval and manipulation.

### Key Principles

- **Normalization**: Data is organized to reduce redundancy and improve data integrity.
- **Relationships**: Clear relationships between data entities are established to facilitate easy access and updates.
- **Scalability**: The data design is scalable to accommodate future growth and changes in data requirements.

### Example

- **Entities**: Responses, Users, and Settings.
- **Relationships**: Each response is associated with a user, and settings can be adjusted based on user preferences.

---

## Conclusion

This project aims to create a robust framework for managing components, data, and data design. By following best practices in component design and data management, the application will be efficient, scalable, and user-friendly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Bootstrap for responsive design.
- JSON for data management.
- Joel Dombek design concept.

<hr>
<article>
<!-- brand blue -->
  <span style="color:#1a3acc;background-color:#1a3acc;width:20px;display:inline-block;" title="#1a3acc">&nbsp;&squ;</span>
  <!-- cool blue -->
  <span style="color:#e0e9fe;background-color:#e0e9fe;width:20px;display:inline-block;" title="#e0e9fe">&nbsp;&squ;</span>
  <span style="color:#e4dfd9;background-color:#e4dfd9;width:20px;display:inline-block;" title="#e4dfd9">&nbsp;&squ;</span>
  <span style="color:#a3a3a3;background-color:#a3a3a3;width:20px;display:inline-block;" title="#a3a3a3">&nbsp;&squ;</span>
  <span style="color:#e4dfd9;background-color:#e4dfd9;width:20px;display:inline-block;" title="#e4dfd9">&nbsp;&squ;</span>
  <span style="color:#ab1acc;background-color:#ab1acc;width:20px;display:inline-block;" title="#ab1acc">&nbsp;&squ;</span>
  <span style="color:#84017E;background-color:#84017E;width:20px;display:inline-block;" title="#84017E">&nbsp;&squ;</span>
  <span style="color:#600000;background-color:#600000;width:20px;display:inline-block;" title="#600000">&nbsp;&squ;</span>
  <span style="color:#690808;background-color:#690808;width:20px;display:inline-block;" title="#690808">&nbsp;&squ;</span>
  <span style="color:#008080;background-color:#008080;width:20px;display:inline-block;" title="#008080">&nbsp;&squ;</span>
  <span style="color:#1ACCAB;background-color:#1ACCAB;width:20px;display:inline-block;" title="#1ACCAB">&nbsp;&squ;</span>
  <span style="color:#a6aaf4;background-color:#a6aaf4;width:20px;display:inline-block;" title="#a6aaf4">&nbsp;&squ;</span>
  <span style="color:#142a2d;background-color:#142a2d;width:20px;display:inline-block;" title="#142a2d">&nbsp;&squ;</span>
  <span style="color:#142a2d;background-color:#142a2d;width:20px;display:inline-block;" title="#142a2d">&nbsp;&squ;</span>
  <span style="color:#1A1E1C;background-color:#1A1E1C;width:20px;display:inline-block;" title="#1A1E1C">&nbsp;&squ;</span>
  <span style="color:#CCAB1A;background-color:#CCAB1A;width:20px;display:inline-block;" title="#CCAB1A">&nbsp;&squ;</span>
  <span style="color:#CCAB1A;background-color:#CCAB1A;width:20px;display:inline-block;" title="#CCAB1A">&nbsp;&squ;</span>
  <span style="color:#DEB887;background-color:#DEB887;width:20px;display:inline-block;" title="#DEB887">&nbsp;&squ;</span>
  <span style="color:#BBFF32;background-color:#BBFF32;width:20px;display:inline-block;" title="#BBFF32">&nbsp;&squ;</span>
  <span style="color:#14E158;background-color:#14E158;width:20px;display:inline-block;" title="#14E158">&nbsp;&squ;</span>
  <span style="color:#2e8c5f;background-color:#2e8c5f;width:20px;display:inline-block;" title="#2e8c5f">&nbsp;&squ;</span>
  <span style="color:#648476;background-color:#648476;width:20px;display:inline-block;" title="#648476">&nbsp;&squ;</span>
  <span style="color:#F0F4F7;background-color:#F0F4F7;width:20px;display:inline-block;" title="#F0F4F7">&nbsp;&squ;</span>
  <span style="color:#F7F2FB;background-color:#F7F2FB;width:20px;display:inline-block;" title="#F7F2FB">&nbsp;&squ;</span>
  <span style="color:#5A6771;background-color:#5A6771;width:20px;display:inline-block;" title="#5A6771">&nbsp;&squ;</span>
  <span style="color:#767676;background-color:#767676;width:20px;display:inline-block;" title="#767676">&nbsp;&squ;</span>
  <span style="color:#C4C4C4;background-color:#C4C4C4;width:20px;display:inline-block;" title="#C4C4C4">&nbsp;&squ;</span>
  <span style="color:#2D2828;background-color:#2D2828;width:20px;display:inline-block;" title="#2D2828">&nbsp;&squ;</span>
  <span style="color:#0A202E;background-color:#0A202E;width:20px;display:inline-block;" title="#0A202E">&nbsp;&squ;</span>
  <span style="color:#004161;background-color:#004161;width:20px;display:inline-block;" title="#004161">&nbsp;&squ;</span>
  <br/>
</article>

<hr>

<img style="padding:1em;background:transparent
;display:inline-block;" width="100px" src="https://joeldom.github.io/asset/chip-logo.png"/>&nbsp;
<svg width="100" height="100" viewBox="0 0 926 430" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M462.954 39.2754C415.113 14.5347 356.721 0 293.692 0C131.49 0 0 96.2585 0 214.999C0 333.74 131.49 429.999 293.692 429.999C357.052 429.999 415.726 415.311 463.707 390.333C463.456 390.463 463.205 390.593 462.954 390.723C387.679 351.795 338.524 287.599 338.524 214.999C338.524 142.399 387.678 78.2037 462.954 39.2754Z" fill="#1A3ACC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M632.216 429.999C794.417 429.999 925.908 333.74 925.908 214.999C925.908 96.2585 794.417 0 632.216 0C569.187 0 510.795 14.5347 462.954 39.2753C538.229 78.2036 587.384 142.399 587.384 214.999C587.384 287.599 538.229 351.795 462.954 390.723C422.335 369.717 389.322 341.354 367.533 308.284C414.985 380.305 515.673 429.999 632.216 429.999ZM344.49 258.329C340.578 244.333 338.523 229.842 338.523 214.999C338.523 214.999 338.523 214.999 338.523 214.999C338.523 229.842 340.578 244.333 344.49 258.329Z" fill="#001C9B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M138.956 32.2274C55.5407 70.1533 0 137.829 0 215.001C0 333.741 131.49 430 293.692 430C357.163 430 415.931 415.261 463.959 390.202C461.342 390.231 458.72 390.246 456.091 390.246C238.054 390.246 61.2996 289.794 61.2996 165.879C61.2996 115.803 90.1653 69.559 138.956 32.2274Z" fill="#001C9B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M787.044 32.2274C870.459 70.1533 926 137.829 926 215.001C926 333.741 794.51 430 632.308 430C568.837 430 510.069 415.261 462.041 390.202C464.658 390.231 467.28 390.246 469.909 390.246C687.946 390.246 864.7 289.794 864.7 165.879C864.7 115.803 835.835 69.559 787.044 32.2274Z" fill="#1A3ACC"/>
</svg>
<img style="padding:1em;background:transparent
;display:inline-block;" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png"/>
<img style="padding:1em;background:transparent
;display:inline-block;" width="100px" src="https://joeldom.github.io/asset/logos/Cursor-app.png"/>&nbsp;<svg width="100" height="100" viewBox="0 0 318 318" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1531_4309)">
<path d="M121.871 116.045V86.1283C121.871 83.6086 122.816 81.7181 125.019 80.4598L185.169 45.8198C193.357 41.0966 203.12 38.8931 213.195 38.8931C250.985 38.8931 274.919 68.1806 274.919 99.3557C274.919 101.559 274.919 104.079 274.603 106.599L212.25 70.0682C208.471 67.8646 204.691 67.8646 200.913 70.0682L121.871 116.045ZM262.32 232.563V161.076C262.32 156.666 260.431 153.518 256.652 151.314L177.61 105.337L203.432 90.5355C205.637 89.2771 207.527 89.2771 209.73 90.5355L269.88 125.175C287.201 135.254 298.852 156.666 298.852 177.45C298.852 201.383 284.682 223.429 262.32 232.563ZM103.291 169.581L77.4681 154.466C75.2645 153.208 74.3192 151.318 74.3192 148.798V79.5176C74.3192 45.8229 100.142 20.3133 135.098 20.3133C148.326 20.3133 160.604 24.7234 171 32.5954L108.962 68.4968C105.184 70.7004 103.294 73.8491 103.294 78.2593L103.291 169.581ZM158.874 201.702L121.871 180.918V136.831L158.874 116.048L195.874 136.831V180.918L158.874 201.702ZM182.649 297.436C169.422 297.436 157.143 293.026 146.748 285.154L208.785 249.253C212.564 247.049 214.453 243.9 214.453 239.49V148.165L240.592 163.281C242.796 164.538 243.741 166.429 243.741 168.949V238.229C243.741 271.924 217.603 297.436 182.649 297.436ZM108.014 227.211L47.8644 192.57C30.5429 182.492 18.8929 161.08 18.8929 140.297C18.8929 116.048 33.3787 94.3195 55.7365 85.1861V156.985C55.7365 161.395 57.6269 164.545 61.4049 166.748L140.135 212.408L114.312 227.211C112.108 228.469 110.218 228.469 108.014 227.211ZM104.552 278.856C68.9669 278.856 42.8281 252.088 42.8281 219.023C42.8281 216.503 43.1441 213.984 43.4572 211.464L105.494 247.365C109.272 249.569 113.053 249.569 116.831 247.365L195.874 201.704V231.622C195.874 234.141 194.929 236.032 192.724 237.289L132.575 271.929C124.387 276.653 114.628 278.856 104.552 278.856ZM182.649 316.329C220.754 316.329 252.559 289.248 259.805 253.346C295.073 244.214 317.747 211.148 317.747 177.454C317.747 155.408 308.301 133.996 291.295 118.565C292.87 111.951 293.816 105.337 293.816 98.7266C293.816 53.6949 257.284 19.9972 215.086 19.9972C206.585 19.9972 198.396 21.2554 190.209 24.0912C176.036 10.2346 156.51 1.41736 135.098 1.41736C96.9932 1.41736 65.1889 28.4984 57.9429 64.3997C22.6739 73.5331 0 106.599 0 140.293C0 162.338 9.44644 183.75 26.4518 199.182C24.8775 205.795 23.9322 212.408 23.9322 219.02C23.9322 264.052 60.4627 297.749 102.662 297.749C111.163 297.749 119.351 296.491 127.539 293.655C141.709 307.512 161.234 316.329 182.649 316.329Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1531_4309">
<rect width="317.747" height="317.747" fill="white"/>
</clipPath>
</defs>
</svg><!-- GAINAX --><img style="padding:2em 1em;background:pink
;display:inline-block;" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/GAINAX.svg/1280px-GAINAX.svg.png"/>
<span style="margin:0; padding:0 1em; display:inline-block;background:darkblue;"><svg width="200" height="80" viewBox="-2 0 175 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path id="path" d="M75.32 25.23L72.83 25.23L72.83 21.37L75.32 21.37C76.86 21.37 78.42 20.99 79.43 19.92C80.44 18.85 80.81 17.2 80.81 15.57C80.81 13.94 80.44 12.3 79.43 11.23C78.42 10.16 76.86 9.78 75.32 9.78C73.77 9.78 72.22 10.16 71.21 11.23C70.19 12.3 69.83 13.94 69.83 15.57L69.83 31.44L65.46 31.44L65.46 5.92L69.83 5.92L69.83 7.54L70.63 7.54C70.71 7.45 70.8 7.36 70.9 7.27C71.99 6.27 73.66 5.92 75.32 5.92C77.89 5.92 80.48 6.56 82.17 8.34C83.85 10.12 84.46 12.86 84.46 15.58C84.46 18.29 83.85 21.03 82.17 22.81C80.48 24.6 77.89 25.23 75.32 25.23Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M8.79 6.59L11.28 6.59L11.28 10.45L8.79 10.45C7.25 10.45 5.69 10.83 4.68 11.91C3.67 12.98 3.3 14.62 3.3 16.25C3.3 17.88 3.67 19.52 4.68 20.59C5.69 21.66 7.25 22.05 8.79 22.05C10.34 22.05 11.89 21.66 12.9 20.59C13.92 19.52 14.28 17.88 14.28 16.25L14.28 0.39L18.65 0.39L18.65 25.91L14.28 25.91L14.28 24.28L13.48 24.28C13.4 24.38 13.31 24.47 13.21 24.55C12.12 25.55 10.45 25.91 8.79 25.91C6.22 25.91 3.63 25.27 1.94 23.48C0.26 21.7 -0.35 18.97 -0.35 16.25C-0.35 13.53 0.26 10.8 1.94 9.01C3.63 7.23 6.22 6.59 8.79 6.59Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M40.59 15.91L40.59 17.46L28.95 17.46L28.95 14.36L36.67 14.36C36.49 13.23 36.08 12.18 35.36 11.42C34.3 10.31 32.69 9.91 31.08 9.91C29.48 9.91 27.86 10.31 26.81 11.42C25.76 12.52 25.38 14.22 25.38 15.91C25.38 17.6 25.76 19.3 26.81 20.41C27.86 21.52 29.48 21.91 31.08 21.91C32.69 21.91 34.3 21.52 35.36 20.41C35.5 20.25 35.64 20.08 35.76 19.9L40.08 19.9C39.71 21.24 39.1 22.45 38.2 23.4C36.44 25.25 33.75 25.91 31.08 25.91C28.41 25.91 25.72 25.25 23.97 23.4C22.21 21.55 21.58 18.72 21.58 15.91C21.58 13.1 22.21 10.27 23.97 8.42C25.72 6.58 28.41 5.92 31.08 5.92C33.75 5.92 36.44 6.58 38.2 8.42C39.96 10.27 40.59 13.1 40.59 15.91Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M62.52 15.91L62.52 17.46L50.88 17.46L50.88 14.36L58.61 14.36C58.43 13.23 58.02 12.18 57.29 11.42C56.24 10.31 54.63 9.91 53.02 9.91C51.42 9.91 49.8 10.31 48.75 11.42C47.7 12.52 47.32 14.22 47.32 15.91C47.32 17.6 47.7 19.3 48.75 20.41C49.8 21.52 51.42 21.91 53.02 21.91C54.63 21.91 56.24 21.52 57.29 20.41C57.44 20.25 57.58 20.08 57.7 19.9L62.02 19.9C61.64 21.24 61.04 22.45 60.14 23.4C58.38 25.25 55.69 25.91 53.02 25.91C50.35 25.91 47.66 25.25 45.9 23.4C44.15 21.55 43.52 18.72 43.52 15.91C43.52 13.1 44.15 10.27 45.9 8.42C47.66 6.58 50.35 5.92 53.02 5.92C55.69 5.92 58.38 6.58 60.14 8.42C61.89 10.27 62.52 13.1 62.52 15.91Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M96.9 25.91C99.57 25.91 102.26 25.52 104.01 24.43C105.77 23.34 106.4 21.67 106.4 20.01C106.4 18.35 105.77 16.68 104.01 15.59C102.26 14.5 99.57 14.11 96.9 14.11L96.99 14.11C95.85 14.11 94.7 13.96 93.96 13.53C93.21 13.11 92.94 12.46 92.94 11.82C92.94 11.17 93.21 10.53 93.96 10.1C94.7 9.68 95.85 9.53 96.99 9.53C98.13 9.53 99.28 9.68 100.03 10.1C100.78 10.53 101.04 11.17 101.04 11.82L105.49 11.82C105.49 10.16 104.92 8.49 103.34 7.4C101.75 6.31 99.32 5.92 96.9 5.92C94.48 5.92 92.05 6.31 90.46 7.4C88.87 8.49 88.3 10.16 88.3 11.82C88.3 13.48 88.87 15.15 90.46 16.24C92.05 17.33 94.48 17.72 96.9 17.72C98.16 17.72 99.53 17.87 100.36 18.29C101.19 18.71 101.48 19.36 101.48 20.01C101.48 20.65 101.19 21.3 100.36 21.72C99.53 22.14 98.26 22.3 97 22.3C95.74 22.3 94.47 22.14 93.65 21.72C92.82 21.3 92.52 20.65 92.52 20.01L87.4 20.01C87.4 21.67 88.03 23.34 89.78 24.43C91.54 25.52 94.22 25.91 96.9 25.91Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M128.33 15.91L128.33 17.46L116.69 17.46L116.69 14.36L124.42 14.36C124.24 13.23 123.83 12.18 123.1 11.42C122.05 10.31 120.44 9.91 118.83 9.91C117.23 9.91 115.61 10.31 114.56 11.42C113.51 12.52 113.13 14.22 113.13 15.91C113.13 17.6 113.51 19.3 114.56 20.41C115.61 21.52 117.23 21.91 118.83 21.91C120.44 21.91 122.05 21.52 123.1 20.41C123.25 20.25 123.39 20.08 123.51 19.9L127.83 19.9C127.45 21.24 126.85 22.45 125.95 23.4C124.19 25.25 121.5 25.91 118.83 25.91C116.16 25.91 113.47 25.25 111.71 23.4C109.96 21.55 109.33 18.72 109.33 15.91C109.33 13.1 109.96 10.27 111.71 8.42C113.47 6.58 116.16 5.92 118.83 5.92C121.5 5.92 124.19 6.58 125.95 8.42C127.7 10.27 128.33 13.1 128.33 15.91Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="path" d="M150.27 15.91L150.27 17.46L138.63 17.46L138.63 14.36L146.36 14.36C146.17 13.23 145.77 12.18 145.04 11.42C143.99 10.31 142.37 9.91 140.77 9.91C139.17 9.91 137.55 10.31 136.5 11.42C135.44 12.52 135.07 14.22 135.07 15.91C135.07 17.6 135.44 19.3 136.5 20.41C137.55 21.52 139.17 21.91 140.77 21.91C142.37 21.91 143.99 21.52 145.04 20.41C145.19 20.25 145.32 20.08 145.45 19.9L149.77 19.9C149.39 21.24 148.79 22.45 147.88 23.4C146.13 25.25 143.44 25.91 140.77 25.91C138.1 25.91 135.4 25.25 133.65 23.4C131.9 21.55 131.27 18.72 131.27 15.91C131.27 13.1 131.9 10.27 133.65 8.42C135.4 6.58 138.1 5.92 140.77 5.92C143.44 5.92 146.13 6.58 147.88 8.42C149.64 10.27 150.27 13.1 150.27 15.91Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path><rect id="rect" x="153.211426" y="-0.499512" width="4.371000" height="26.415646" fill="currentColor" fill-opacity="1.000000"></rect><path id="polygon" d="M165.04 15.31L172.21 25.91L166.79 25.91L159.62 15.31L166.79 6.81L172.21 6.81L165.04 15.31Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path></svg></span>
</body>
</html>