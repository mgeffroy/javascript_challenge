// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select tbody
var tbody = d3.select("tbody");

tableData.forEach(UFOSightings => {
   // console.log(UFOSightings);
    // MaKe table rows 
     var row = tbody.append("tr");

Object.entries(UFOSightings).forEach(([key, value]) => {
   // console.log(key, value);
    
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
button.on("click", runEnter);
form.on("submit", runEnter);

// Create runFilter function 
function runEnter() {
    /// Prevent page from refreshing
    d3.event.preventDefault();
    
    // Input variables and value 
    var inputVal = form.property("value");

 // Use form to filter by date
   var filteredData=  tableData.filter(ufoDate => ufoDate.datetime === inputVal);
   console.log(filteredData);
   // Clear tbody 
   tbody.html("")

  //// Add new filtered data to the table 
    filteredData.forEach(UFOSightings => {
    // Male table rows 
     var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
    
    // Make space for table data 
    var cell = row.append("td");
    
    // Add values 
    cell.text(value);
});
});
}