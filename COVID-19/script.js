document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.rootnet.in/covid19-in/stats/latest';
    const tableBody = document.getElementById('covidData');
  
    // 🔗 API Integration (fetch/async-await)
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const regionalData = data.data.regional;
            // 🧠 Looping through data (forEach)
            regionalData.forEach((state, index) => {
                const row = document.createElement('tr');
                const totalCases = state.confirmedCasesIndian + state.confirmedCasesForeign;
                
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${state.loc}</td>
                    <td>${state.confirmedCasesIndian}</td>
                    <td>${state.confirmedCasesForeign}</td>
                    <td>${state.discharged}</td>
                    <td>${state.deaths}</td>
                    <td>${totalCases}</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">Error loading data. Please try again later.</td></tr>';
        });
});
