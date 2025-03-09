const properties = {
  showTitles: true,
  title: '',
  subtitle: '',
  footnote: '',
  showDetails: true,
  qHyperCubeDef: {
    qDimensions: [],
    qMeasures: [],
    qInitialDataFetch: [
      {
        qWidth: 10,
        qHeight: 1000,
      },
    ],
  },
  referenceLines: [
    {
      label: 'Target',
      value: 100,
      style: {
        color: 'red',
        lineStyle: 'dashed',
      },
    },
    {
      label: 'Average',
      value: 50,
      style: {
        color: 'blue',
        lineStyle: 'dotted',
      },
    },
  ],
  trendLines: [
    {
      label: 'Trend',
      expression: 'sum(sales)',
      style: {
        color: 'green',
        lineStyle: 'solid',
      },
    },
  ],
  axisLabels: {
    x: 'Month',
    y: 'Sales',
  },
  dataPoints: {
    show: true,
  },
  gridLines: {
    show: true
  },
  axisLine: {
    show: true
  },
  axisLabel: {
    show: true,
  },
  axisTick: {
    show: true
  },
};

export default properties;
