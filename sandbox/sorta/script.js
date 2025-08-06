// Chart.js setup
const ctx = document.getElementById('sortChart').getContext('2d');
let chart = null;
let data = [];

// Random name and data generation
function generateRandomName(index) {
    const prefixes = ['Item', '!Special', '#Unique', 'Data', 'Record', 'File'];
    const specialChars = ['', '@', '#', '$', '%'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const special = specialChars[Math.floor(Math.random() * specialChars.length)];
    return `${special}${prefix}${index}`;
}

function generateNewData() {
    const size = Math.floor(Math.random() * 98) + 2; // 2–99
    data = Array.from({ length: size }, (_, i) => ({
        name: generateRandomName(i + 1),
        count: Math.floor(Math.random() * 100) + 1,
        icon: ['🍎', '🍌', '🍒', '🍇', '🍊'][Math.floor(Math.random() * 5)]
    }));
    console.log('Generated Data:', data);
    updateChart();
    document.getElementById('output').innerText = 'Generated new dataset. Click a sort button to process.';
    document.getElementById('deltaOutput').innerText = 'Delta: Not calculated yet';
}

// Chart update function
function updateChart(sortedData = data) {
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(obj => `${obj.icon} ${obj.name}`),
            datasets: [{
                label: 'Count',
                data: sortedData.map(obj => obj.count),
                backgroundColor: sortedData.map(obj => obj.count % 2 === 0 ? 'rgba(75, 192, 192, 0.5)' : 'rgba(255, 99, 132, 0.5)'),
                borderColor: sortedData.map(obj => obj.count % 2 === 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, ticks: { color: '#fff' } },
                x: { ticks: { color: '#fff', font: { size: 12 } } }
            },
            plugins: {
                legend: { labels: { color: '#fff' } },
                tooltip: { enabled: true }
            },
            animation: { duration: 1000 }
        }
    });
}

// Merge Sort implementation
function mergeSortObjects(arr, keyFunction) {
    if (arr.length <= 1) {
        console.log(`Chunk size: ${arr.length}`);
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    console.log(`Dividing chunk of size ${arr.length} into ${mid} and ${arr.length - mid}`);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return mergeObjects(mergeSortObjects(left, keyFunction), mergeSortObjects(right, keyFunction), keyFunction);
}

function mergeObjects(left, right, keyFunction) {
    let result = [],
        leftIndex = 0,
        rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (keyFunction(left[leftIndex]) <= keyFunction(right[rightIndex])) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Async Even/Odd Merge Sort
async function mergeSortEvenOdd(arr, keyFunction, preferOdd = true) {
    const even = arr.filter(obj => keyFunction(obj) % 2 === 0);
    const odd = arr.filter(obj => keyFunction(obj) % 2 !== 0);
    console.log(`Even count: ${even.length}, Odd count: ${odd.length}`);
    const [sortedEven, sortedOdd] = await Promise.all([
        mergeSortObjects(even, keyFunction),
        mergeSortObjects(odd, keyFunction)
    ]);
    console.log('Sorted Even:', sortedEven);
    console.log('Sorted Odd:', sortedOdd);
    const result = preferOdd ? [...sortedOdd, ...sortedEven] : [...sortedEven, ...sortedOdd];
    console.log('Sorted Result:', result);
    return { result, even: sortedEven, odd: sortedOdd, evenCount: even.length, oddCount: odd.length };
}

// Windows-like name sorting
function windowsLikeSort(obj) {
    const name = obj.name.toLowerCase();
    const firstChar = name[0];
    const weight = /[a-z]/.test(firstChar) ? 2 : /\d/.test(firstChar) ? 1 : 0;
    return [weight, name];
}

// Button handlers
async function sortOddFirst() {
    const keyFunction = obj => obj.count; // Sort by count
    const { result } = await mergeSortEvenOdd(data, keyFunction, true);
    updateChart(result);
    document.getElementById('output').innerText = 'Sorted with odd counts first.';
    document.getElementById('deltaOutput').innerText = 'Delta: Not calculated yet';
}

async function sortEvenFirst() {
    const keyFunction = obj => obj.count; // Sort by count
    const { result } = await mergeSortEvenOdd(data, keyFunction, false);
    updateChart(result);
    document.getElementById('output').innerText = 'Sorted with even counts first.';
    document.getElementById('deltaOutput').innerText = 'Delta: Not calculated yet';
}

async function compareSorts() {
    const keyFunction = obj => obj.count;
    const { even, odd, evenCount, oddCount } = await mergeSortEvenOdd(data, keyFunction, true);
    const delta = Math.abs(oddCount - evenCount);
    console.log(`Delta (odd vs even count): ${delta}`);
    console.log(`Frequency Variation: ${oddCount} odd, ${evenCount} even`);

    // Compare sorted orders (e.g., name differences)
    const oddNames = odd.map(obj => obj.name).join(', ');
    const evenNames = even.map(obj => obj.name).join(', ');
    console.log(`Odd Names: ${oddNames}`);
    console.log(`Even Names: ${evenNames}`);

    document.getElementById('output').innerText = `Compared odd and even sorts. Delta: ${delta}`;
    document.getElementById('deltaOutput').innerText = `Delta: ${delta} (${oddCount} odd, ${evenCount} even)`;
}

// Initialize with random data
generateNewData();