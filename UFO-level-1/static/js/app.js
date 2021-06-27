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
