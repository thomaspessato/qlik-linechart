export function formatChartData(data) {
  const formattedData = {
    xAxis: [],
    series: []
  };

  // Format xAxis data
  formattedData.xAxis = data.qHyperCube.qDataPages[0].qMatrix.map(row => row[0].qText);

  // Format series data
  for (let i = 1; i < data.qHyperCube.qDataPages[0].qMatrix[0].length; i++) {
    const seriesData = {
      name: data.qHyperCube.qDimensionInfo[i].qFallbackTitle,
      data: data.qHyperCube.qDataPages[0].qMatrix.map(row => row[i].qNum)
    };
    formattedData.series.push(seriesData);
  }

  return formattedData;
}
