var allLabels = ['Positive Tweets', 'Neutral Tweets','Negative Tweets'];

var allValues = [
  [8848,4221, 3647],
  [2830, 2698, 729]
];

var ultimateColors = [
  [ 'rgb(242, 55, 94)', 'rgb(168, 29, 46)','rgb(41, 1, 10)'],
  ['rgb(56, 75, 126)', 'rgb(34, 53, 101)','rgb(18, 36, 37)'],
];

var data = [{
  values: allValues[0],
  labels: allLabels,
  type: 'pie',
  name: 'Trump',
  marker: {
  colors: ultimateColors[0],
  textposition: "outside",
  automargin: true
  },
  domain: {
    row: 0,
    column: 0
  },
  hoverinfo: 'allValues[0]',
  textinfo: 'nothing'
},{
  values: allValues[1],
  labels: allLabels,
  type: 'pie',
  name: 'Obama',
  marker: {
    colors: ultimateColors[1],
    textposition: "outside",
    automargin: true
  },
  domain: {
    row: 0,
    column: 1
  },
  hoverinfo: 'allValues[1]',
  textinfo: 'nothing'
}];

var layout = {
  height: 400,

  grid: {rows: 1, columns: 2},
  margin: {"t": 80, "b": 0, "l": 0, "r": 0},
  showlegend: false,
};

Plotly.newPlot('sentimentpies', data, layout);
