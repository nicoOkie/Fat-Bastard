/**
 * NPM import
 */
import React, { useState } from 'react';
import AudioPlayer from 'react-modular-audio-player';
import { MdHeadset } from 'react-icons/md';

/**
 * Local import
 */
import FullScreen from 'src/containers/Fullscreen';
import Menu from 'src/containers/Navmenu';

// Styles
import './nav.scss';

/**
 * Code
 */

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);

  // const newArrayPlayer = [];
  // for (let index = 0; index < playerDatas.length; index += 1) {
  //   const arrayPlayer = [playerDatas[index], playerMusic[index]];
  //   newArrayPlayer.push(arrayPlayer);
  // }

  const playlist = [
    {
      src: 'src/assets/audios/the-fat-bastard-gang-band-official-all-bastards.mp3',
      title: 'All Bastards',
      artist: 'FAT',
    },
    {
      src: 'src/assets/audios/the-fat-bastard-gangband-official-king-of-the-world.mp3',
      title: 'King of The World',
      artist: 'FAT',
    },
  ];

  // {unitedItems.map(unitedItem => (
  //   <Section key={unitedItem.title} {...unitedItem} />
  // ))}

  return (
    <>
      <div className="nav">
        {width > 899 ? <FullScreen /> : <Menu />}
      </div>
      <div className="onglet-audio">
        <p className="onglet-title"><MdHeadset /></p>
        <div className="player-audio">
          <AudioPlayer
            audioFiles={playlist}
            playerWidth="10em"
            fontSize="1.5rem"
            iconSize="1.5rem"
          />
        </div>
      </div>
    </>
  );
};

/**
 * Export
 */
export default Nav;
