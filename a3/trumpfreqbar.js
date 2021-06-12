function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/deco3100a3final/main/a3/data/trump_tweet_frequency.csv", function(data){ processData(data) } );

};
 
function processData(allRows) {

 console.log(allRows);
 var x = [], y = [];

 for (var i=0; i<allRows.length; i++) {
   row = allRows[i];
   x.push( row['date'] );
   y.push( row['frequency'] );
 }
 console.log( 'X',x, 'Y',y );
 makePlotly( x, y );
}

function makePlotly( x, y){
 var plotDiv = document.getElementById("plot");
 var traces = [{
   x: x, 
   y: y,
   type:'bar',
   
 }];

 Plotly.newPlot('trumpbar', traces, 
  );
};
 makeplot();