import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const formattedData = {
    categories: data.qHyperCube.qDataPages[0].qMatrix.map(row => row[0].qText),
    values: data.qHyperCube.qDataPages[0].qMatrix.map(row => row[1].qNum),
  };

  // check measure index inside qMatrix
  const measureIndex = data.qHyperCube.qDimensionInfo.length;
  const numberOfMeasures = data.qHyperCube.qMeasureInfo.length;

  const series = [];
  for(let i = measureIndex; i <= numberOfMeasures; i++) {
    series.push({
      name: data.qHyperCube.qMeasureInfo[i - 1].qFallbackTitle,
      data: data.qHyperCube.qDataPages[0].qMatrix.map(row => row[i].qNum),
      type: 'line',
      areaStyle: {},
    });
  }

  console.log(formattedData);

  useEffect(() => {
    const chart = chartRef.current.getEchartsInstance();

    const options = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: formattedData.categories,
      },
      yAxis: {
        type: 'value',
      },
      series: series
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <ReactECharts ref={chartRef} option={{}} style={{ width: '100%', height: '400px' }} />;
};

export default LineChart;
