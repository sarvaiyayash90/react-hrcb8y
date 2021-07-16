import React from 'react';

const RFinput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default RFinput;
