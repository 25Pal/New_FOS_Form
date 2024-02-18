import React from 'react';
import LabelHeadingComponet from './LabelHeadingComponet';

const ParentComponent = ({ childComponent,mainHeading }) => {
  return (
    <>
    <div className="m-4 ">
    <LabelHeadingComponet mainHeading={mainHeading} />
    <div className="container bg-white p-4 rounded-4" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.8)' }}>
      {childComponent}
    </div>
    </div>
    
    
    </>
  );
}

export default ParentComponent;
