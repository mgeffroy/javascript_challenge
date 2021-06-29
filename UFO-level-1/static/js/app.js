// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select tbody
var tbody = d3.select("tbody");

tableData.forEach(function(UFOSightings) {
    console.log(UFOSightings);
    // Male table rows 
     var row = tbody.append("tr");

Object.entries(UFOSightings).forEach(function([key, value]) {
    console.log(key, value);
    
    // Make space for table data 
    var cell = row.append("td");
    
    // Add values 
    cell.text(value);
});
});

// Make the filter work
//Start by selecting the button and the filter bar.
// Select the button
var button = d3.select("#filter-btn");

// Select the filter
var form = d3.select("#datetime");

//Create event handlers 
button.on("click", runDate);
form.on("submit", runDate);

// Create runFilter function 
function runDate() {
    d3.event.preventDefault();
    var 
}