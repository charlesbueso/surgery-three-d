// import React from 'react';
// import surgery from './nature.mp4';
// import './VideoPlayer.css';

// const VideoPlayer = () => {
//   return (
//     <div className="video-container">
//       <video width="100%" height="100%" controls>
//         <source src={surgery} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

import React, { useState } from 'react';
import surgery from './nature.mp4';
import './VideoPlayer.css';
import { Dropdown } from '../models/Dropdown.js';

const VideoPlayer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const words = ['hello', 'world', 'bard'];

  const handleOptionSelect = (selectedWord) => {
    // Handle selected word here (e.g., display in UI)
    console.log('Selected word:', selectedWord);
  };

  return (
    <div className="video-container">
      <video width="100%" height="100%" controls>
        <source src={surgery} type="video/mp4" />
      </video>

      <Dropdown
        options={words}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};

export default VideoPlayer;