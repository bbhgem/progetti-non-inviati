function searchjob(title, location) {
    title = title.toLowerCase();
    location = location.toLowerCase();

    const result = [];
    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        if (jobTitle.includes(title) && jobLocation.includes(location)) {
            result.push(job)
        }
    });
    return {
        count: result.length,
        result
    }
}

function search() {
    const title = document.getElementById("searchjob").value;
    const location = document.getElementById("searchplace").value;

    const searchResult = searchjob(title, location)
    console.log(searchResult)
    return searchResult
}

const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    showResults(search())
})


function showResults(searchResults){
    const resultsContainer = document.createElement("div");
    const resultsH2 = document.createElement("h2");
    resultsH2.innerHTML = "Results";
    resultsH2.classList.add("results");
    const resultsParagraph = document.createElement("p");
    resultsParagraph.innerHTML = "These entries match your search:";
    resultsParagraph.classList.add("results");

    const resultsTable = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableHeaderRow = document.createElement("tr");
    const tableHeaderTitle = document.createElement("th");
    tableHeaderTitle.innerHTML = "Title";
    const tableHeaderPosition = document.createElement("th")
    tableHeaderPosition.innerHTML = "Position";
    const tableBody = document.createElement("tbody");

    searchResults.result.forEach(searchItem => {
        const tableRow = document.createElement("tr");
        const tableCellTitle = document.createElement("td");
        tableCellTitle.innerHTML = `${searchItem.title},`;
        const tableCellLocation = document.createElement("td");
        tableCellLocation.innerHTML = `${searchItem.location}`;
        tableRow.append(tableCellTitle);
        tableRow.append(tableCellLocation);
        tableBody.append(tableRow);
    })

    tableHeaderRow.append(tableHeaderTitle);
    tableHeaderRow.append(tableHeaderPosition);
    tableHeader.append(tableHeaderRow);
    resultsTable.append(tableHeader);
    resultsTable.append(tableBody);

    resultsContainer.append(resultsH2);
    resultsContainer.append(resultsParagraph);
    resultsContainer.append(resultsTable);
    document.body.append(resultsContainer);
}


