import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Iframe from 'react-iframe'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg & <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      {/* <iframe src="https://lichess.org/tv/frame?theme=brown&bg=dark" style="width: 400px; height: 444px;" allowtransparency="true" frameborder="0"></iframe> */}
      {/* <Iframe url="https://lichess.org/tv/frame?theme=blue&bg=dark"
        width="400px"
        height="444px"
        allowtransparency="true"
        frameborder="0"
        position="relative" /> */}
    </div>

  );
}

export default App;
