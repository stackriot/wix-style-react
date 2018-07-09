import React from 'react';
import PropTypes from 'prop-types';
import ImageViewer from '../../src/ImageViewer';

const style = {
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '0 25px 25px'
};

const Example = () =>
  <div>
    <div className="ltr" style={style}>Without image<br/><br/><ImageViewer dataHook="empty-image-viewer" onAddImage={() => {}}/></div>
    <div className="ltr" style={style}>With image<br/><br/><ImageViewer onRemoveImage={() => {}} onUpdateImage={() => {}} imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"/></div>
    <div className="ltr" style={style}>With error<br/><br/><ImageViewer dataHook="empty-image-viewer" error errorMessage="Just a demo" onAddImage={() => {}}/></div>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
