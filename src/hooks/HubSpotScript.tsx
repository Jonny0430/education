import { useEffect } from 'react';

export const HubSpotScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-na2.hs-scripts.com/243152650.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
