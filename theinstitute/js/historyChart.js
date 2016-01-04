/**
 * Created by elliotcobb on 1/2/16.
 */

// Get the context of the canvas element we want to select
var ctx = document.getElementById("historyChart").getContext("2d");

var chartData = {
    labels: ["Jacob Barr", "Elaine Bledsoe", "Jehan Madhani", "Danny Garfield", "Emily Baker", "John Merfeld", "Sam Gordon", "Ceili Hale", "Elliot Cobb", "Ari Glasgow", "Sarah Gruen", "Jacob Hafey", "Mehgan Wales", "Ben Meyerson", "Chloe Hyman", "Lily Blumkin"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(25,164,93,0.5)",
            strokeColor: "rgba(25,164,93,0.8)",
            highlightFill: "rgba(25,164,93,0.75)",
            highlightStroke: "rgba(25,164,93,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 33, 24, 24, 22, 60, 44, 77, 55, 68]
        },
    ]
};

var myBarChart = new Chart(ctx).Bar(chartData, {scaleShowGridLines : false});