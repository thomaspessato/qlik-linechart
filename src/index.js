import { useEffect, useElement, useLayout } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';

import ext from './ext';
import { render } from './root';

/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(galaxy),
    component() {
      const el = useElement();
      const layout = useLayout();

      useEffect(() => {
        // do some heavy update
        console.log(el);
      }, [layout]);

      render(el);
    },
  };
}
