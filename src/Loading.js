import React from 'react';
import './loading.css'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'

function Loading() {
  return (
      <div className="Load">
          <BounceLoader loading />
          <BarLoader loading />
          <BeatLoader loading />

      </div>
  );

}

export default Loading;
