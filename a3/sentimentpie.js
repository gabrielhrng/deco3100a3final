var allLabels = ['Positive', 'Neutral','Negative'];

var allValues = [
  [53, 25.2, 21.8],
  [45.2, 43.1, 11.7]
];

var ultimateColors = [
  [ 'rgb(205, 152, 36)', 'rgb(177, 127, 38)','rgb(99, 79, 37)'],
  ['rgb(56, 75, 126)', 'rgb(34, 53, 101)','rgb(18, 36, 37)'],
];

var data = [{
  values: allValues[0],
  labels: allLabels,
  type: 'pie',
  name: 'Trump Tweets',
  marker: {
  colors: ultimateColors[0],
  textposition: "outside",
  automargin: true
  },
  domain: {
    row: 0,
    column: 0
  },
  hoverinfo: 'label+percent+name',
  textinfo: 'none'
},{
  values: allValues[1],
  labels: allLabels,
  type: 'pie',
  name: 'Obama Tweets',
  marker: {
    colors: ultimateColors[1],
    textposition: "outside",
    automargin: true
  },
  domain: {
    row: 0,
    column: 1
  },
  hoverinfo: 'label+percent+name',
  textinfo: 'none'
}];

var layout = {
  height: 400,

  grid: {rows: 1, columns: 2},
  margin: {"t": 80, "b": 0, "l": 0, "r": 0},
  showlegend: false,
};

Plotly.newPlot('sentimentpies', data, layout);