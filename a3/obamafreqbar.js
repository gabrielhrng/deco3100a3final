function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/deco3100a3final/main/a3/data/obama_tweet_frequency.csv", function(data){ processData1(data) } );
  
  };
   
  function processData1(allRows) {
  
   console.log(allRows);
   var x = [], y = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x.push( row['date'] );
     y.push( row['frequency'] );
   }
   console.log( 'X',x, 'Y',y );
   makePlotly1( x, y );
  }
  
  function makePlotly1( x, y){
   var plotDiv = document.getElementById("plot");
   var traces = [{
     x: x, 
     y: y,
     type:'bar',
     
   }];
  
   Plotly.newPlot('obamabar', traces, 
    );
  };
   makeplot();