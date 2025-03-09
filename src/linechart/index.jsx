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
      label: {
        show: data.dataPoints.show,
      },
      markLine: {
        data: [
          { type: 'max', name: 'Max' },
        ],
      },
    });
  }

  useEffect(() => {
    const chart = chartRef.current.getEchartsInstance();

    const options = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: formattedData.categories,
        axisLabel: {
          show: data.axisLabel.show, // Show x-axis labels
        },
        axisTick: {
          show: data.axisTick.show, // Show x-axis tick marks
        },
        axisLine: {
          show: data.axisLine.show, // Show x-axis line
        },
        splitLine: {
          show: data.gridLines.show, // Show x-axis grid lines
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: data.axisLabel.show, // Show y-axis labels
        },
        splitLine: {
          show: data.gridLines.show, // Show x-axis grid lines
        },
      },
      series: series,
      trendLine: {
        data: [
          { type: 'trend', name: 'Trend' },
        ],
      },
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <ReactECharts ref={chartRef} option={{}} style={{ width: '100%', height: '400px' }} />;
};

export default LineChart;
