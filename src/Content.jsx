import { useEffect, useState } from 'react';
import './App.css'; // Assuming the CSS is in App.css or similar

const Content = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after the component mounts
    setLoaded(true);
  }, []);

  return (
    <div id="Content" className={loaded ? 'loaded' : ''}>
      {/* Your content here */}
    </div>
  );
};

export default Content;
