import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Icon, Stack, Button } from "@chakra-ui/react";
import { HiUpload, IoCrop, BsArrowsMove, HiDownload } from "react-icons/md";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const hashnode = {
  width: 720,
  height: 480,
  // ratio: this.width / this.height,
};
const dev = {};
const medium = {};

const defaultImage = "https://picsum.photos/seed/picsum/720/480";

export default function Home() {
  const [image, setImage] = useState(defaultImage);
  const [cropData, setCropData] = useState();
  const [cropper, setCropper] = useState();

  const cropperRef = useRef(null);
  const onCrop = () => {
    // let imageElement =
    //   cropperRef === null || cropperRef === 0 ? 0 : cropperRef.current;
    // let cropper =
    //   imageElement === null || imageElement === 0 ? 0 : imageElement.cropper;
    // console.log(cropper.getCroppedCanvas().toDataURL());
  };

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Blog cover resizer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>The image resizer</h1>
      <p>Leave the image resizing issues at bay</p>
      <div
        style={{
          width: `1200px`,
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <p>Select the image you want to crop</p>
        <input type="file" onChange={onChange} />
        <button>Use test image</button>
        <hr />
        <h1>You are creating: Hasnode Blog cover</h1>
        <Cropper
          src={image}
          style={{ height: "480px", width: "100%" }}
          initialAspectRatio={16 / 9}
          guides={true}
          // crop={onCrop}
          ref={cropperRef}
          disable={false}
          // viewMode={1}
          // minCropBoxHeight={10}
          // minCropBoxWidth={10}
          // background="black"
          // zoom={4}
          // responsive={true}
          // movable={true}
          // autoCropArea={1}
          // checkOrientation={false}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={() => {
            cropper.setDragMode("move");
          }}
        >
          Move mode
        </button>
        <button
          className={styles.button}
          onClick={() => {
            cropper.setDragMode("crop");
          }}
        >
          Crop mode
        </button>
        <button onClick={getCropData}>Crop</button>
      </div>

      {/* <Stack direction="row" spacing={4}>
        <Button
          leftIcon={<Icon as={IoCrop} />}
          colorScheme="teal"
          variant="outline"
        >
          Crop
        </Button>
        <Button
          leftIcon={<Icon as={BsArrowsMove} />}
          colorScheme="teal"
          variant="outline"
        >
          Move
        </Button>
        <Button
          rightIcon={<Icon as={HiDownload} />}
          colorScheme="teal"
          variant="solid"
        >
          Download
        </Button>
      </Stack> */}
      <h1>Hashnode:</h1>
      <button
        onClick={() => {
          cropper.setAspectRatio(16 / 8);
        }}
      >
        Blog Cover (16:9 ratio)
      </button>
      <h3>DEV</h3>
      <Footer />
    </div>
  );
}
