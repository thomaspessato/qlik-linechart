import { createRoot } from 'react-dom/client';
import React from 'react';
import { useLayout } from '@nebula.js/stardust';
import LineChart from './linechart';

export function render(element) {
  const domNode = element;
  const root = createRoot(domNode);
  const layout = useLayout();
  root.render(
    <div>
      <h1>Line Chart Visualization</h1>
      <LineChart data={layout} />
    </div>
  );
}