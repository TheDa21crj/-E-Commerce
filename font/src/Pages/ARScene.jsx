import React, { useEffect, useRef } from "react";
import { createHash } from "crypto";
import "aframe";
import "ar.js/aframe/build/aframe-ar.js";

const ARScene = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });
  }, []);

  return (
    <a-scene embedded arjs="debugUIEnabled:false;">
      <a-assets>
        <a-asset-item id="my-model" src="path/to/your/model.glb"></a-asset-item>
      </a-assets>
      <a-marker preset="hiro">
        <a-entity
          gltf-model="#my-model"
          scale="0.5 0.5 0.5"
          position="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera>
        <a-entity
          geometry="primitive: plane; width: 16; height: 9"
          material="shader: flat; src: #video"
          position="0 0 -10"
          rotation="0 180 0"
        ></a-entity>
      </a-entity>
      <a-video
        id="video"
        ref={videoRef}
        rotation="-90 0 0"
        position="0 0 0"
        width="16"
        height="9"
        autoplay
        loop
        muted
      ></a-video>
    </a-scene>
  );
};

export default ARScene;
