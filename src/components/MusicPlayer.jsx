import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioUrl = '/music.mp3';
  
    const toggleAudio = () => {
      const audio = document.getElementById('musica');
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div>
        <audio id="musica" src={audioUrl} loop autoPlay={isPlaying} />
        <Button onClick={toggleAudio}>
          {isPlaying ? <FaVolumeUp></FaVolumeUp> : <FaVolumeMute></FaVolumeMute>}
        </Button>
      </div>
    );
  };

  export default MusicPlayer;