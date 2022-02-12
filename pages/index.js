import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Cropper from "react-cropper";
import {
  Icon,
  Stack,
  Button,
  Select,
  Accordion,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { FiCrop, FiRotateCcw, FiRotateCw } from "react-icons/fi";
import { BsArrowsMove } from "react-icons/bs";
import { RiZoomInLine, RiZoomOutLine, RiDeleteBinLine } from "react-icons/ri";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
  FaArrowsAltH,
  FaArrowsAltV,
} from "react-icons/fa";

import ContentWrapper from "../components/ContentWrapper";
import ImageSelector from "../components/ImageSelector";
import ImageReset from "../components/ImageReset";
import ActionButton from "../components/ActionButton";
import AccordionSection from "../components/AccordionSection";
import AlertMessage from "../components/AlertMessage";
import Checkbox from "../components/Checkbox";
import CropScore from "../components/CropScore";

import "cropperjs/dist/cropper.css";
import styles from "../styles/Home.module.css";

import { presets } from "../data/presets.js";

export default function Home() {
  const initialSite = Object.keys(presets[0])[0];
  const { name, description, height, width } = presets[0][initialSite][0];

  const [image, setImage] = useState();
  const [baseImage, setBaseImage] = useState();
  const [cropper, setCropper] = useState();

  const [activePreset, setActivePreset] = useState({
    site: initialSite,
    name,
    description,
    height,
    width,
  });

  const [fileType, setFileType] = useState("jpg");

  const [dragArea, setDragArea] = useState({
    width: 0,
    height: 0,
  });

  const [customWidth, setCustomWidth] = useState(0);
  const [customHeight, setCustomHeight] = useState(0);
  const [customError, setCustomError] = useState("");

  const calcCustomRes = (res) =>
    res < 720 ? "SD" : res < 1920 ? "HD" : res < 3840 ? "FHD" : "UHD";

  const cropperRef = useRef(null);
  const onCrop = () => {
    let imageElement =
      cropperRef === null || cropperRef === 0 ? 0 : cropperRef.current;
    let cropper =
      imageElement === null || imageElement === 0 ? 0 : imageElement.cropper;
    setDragArea({
      ...dragArea,
      width: cropper.getCroppedCanvas().width,
      height: cropper.getCroppedCanvas().height,
    });

    setCustomWidth(cropper.getCroppedCanvas().width);
    setCustomHeight(cropper.getCroppedCanvas().height);

    setBaseImage(cropper.getCroppedCanvas().toDataURL());
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

  const zoomIn = () => cropper.zoom(0.1);
  const zoomOut = () => cropper.zoom(-0.1);
  const moveLeft = () => cropper.move(-10, 0);
  const moveRight = () => cropper.move(10, 0);
  const moveUp = () => cropper.move(0, -10);
  const moveDown = () => cropper.move(0, 10);
  const rotateLeft = () => cropper.rotate(-45);
  const rotateRight = () => cropper.rotate(45);
  const swapX = () =>
    cropper.getData().scaleX === 1 ? cropper.scaleX(-1) : cropper.scaleX(1);
  const swapY = () =>
    cropper.getData().scaleY === 1 ? cropper.scaleY(-1) : cropper.scaleY(1);

  const reset = () => cropper.reset();

  return (
    <div>
      <Head>
        <title>CropScore: An Online Image Cropper for Content Creators</title>
        <meta
          name="description"
          content="An Online Image Cropper for Content Creators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!image ? (
        <ContentWrapper>
          <div className={styles.heroArea}>
            <h1 className={styles.heroTitle}>
              An image cropper for content creators
            </h1>
            <p className={styles.heroSubTitle}>
              Resolutions and aspect ratios should be the last things you worry
              about.
            </p>

            <div className={styles.heroSelect}>
              <div>
                <p>
                  {" "}
                  Say goodbye to out of positioned, stretched, pixelated, etc
                  images
                </p>
                <p>
                  Stop spending time on trying to figure out the resolutions and
                  aspect ratios
                </p>
              </div>
              <div className={styles.imageSelectorArea}>
                <ImageSelector onChange={onChange} />
              </div>
            </div>
          </div>
        </ContentWrapper>
      ) : (
        <div className={styles.creatorArea}>
          <div className={styles.presets}>
            <Accordion defaultIndex={[0]} allowToggle>
              {presets.map((site, i) => {
                return (
                  <AccordionSection key={i} title={Object.keys(site)}>
                    {site[Object.keys(site)].map((param, index) => {
                      return (
                        <Checkbox
                          key={index}
                          index={!i && !index}
                          title={param.name}
                          isChecked={
                            activePreset.site
                              ? activePreset.site.toString() ==
                                  Object.keys(site).toString() &&
                                activePreset.name == param.name
                              : false
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setActivePreset({
                                ...activePreset,
                                site: Object.keys(site),
                                name: param.name,
                                description: param.description,
                                height: param.height,
                                width: param.width,
                              });
                              cropper.setAspectRatio(
                                param.width / param.height
                              );
                            } else {
                              setActivePreset({});
                              cropper.setAspectRatio(NaN);
                            }
                          }}
                        />
                      );
                    })}
                  </AccordionSection>
                );
              })}
              <AccordionSection title="Custom size">
                <h1>Set resolution:</h1>
                <div className={styles.customInput}>
                  <InputGroup>
                    <Input
                      placeholder={customWidth}
                      onChange={(e) => {
                        console.log("canvas", cropper.getCroppedCanvas().width);
                        console.log("boxdata", cropper.getCropBoxData().width);
                        console.log("data", cropper.getData().width);
                        console.log(
                          "image width: ",
                          cropper.getCanvasData().naturalWidth
                        );
                        console.log(
                          "image height: ",
                          cropper.getCanvasData().naturalHeight
                        );
                        const value = Number(e.target.value);
                        const previousValue = Number(
                          value.toString().slice(0, -1)
                        );
                        const imageWidth = cropper.getImageData().naturalWidth;
                        if (value <= imageWidth) {
                          if (activePreset.name) {
                            setActivePreset({});
                            cropper.setAspectRatio(NaN);
                          }
                          cropper.setData({ width: value });
                          setCustomError("");
                        } else {
                          setCustomError(`The max width is ${imageWidth}`);
                          e.target.value = previousValue;
                          e.target.value = previousValue;
                          cropper.setData({
                            width: previousValue,
                          });
                          setTimeout(() => {
                            setCustomError("");
                          }, 2000);
                        }
                      }}
                      type="number"
                    />
                    <InputRightAddon children="px" />
                  </InputGroup>
                  <div style={{ display: "grid", placeItems: "center" }}>
                    <p>x</p>
                  </div>
                  <InputGroup>
                    <Input
                      placeholder={customHeight}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const previousValue = Number(
                          value.toString().slice(0, -1)
                        );
                        const imageHeight =
                          cropper.getImageData().naturalHeight;
                        if (value <= imageHeight) {
                          if (activePreset.name) {
                            setActivePreset({});
                            cropper.setAspectRatio(NaN);
                          }
                          cropper.setData({ height: value });
                          setCustomError("");
                        } else {
                          setCustomError(`The max height is ${imageHeight}`);
                          e.target.value = previousValue;
                          e.target.value = previousValue;
                          cropper.setData({
                            height: previousValue,
                          });
                          setTimeout(() => {
                            setCustomError("");
                          }, 2000);
                        }
                      }}
                      type="number"
                    />
                    <InputRightAddon children="px" />
                  </InputGroup>
                </div>
                {customError && <AlertMessage message={customError} />}

                <h1>Pick an aspect ratio:</h1>
                <div className={styles.customInput}>
                  <InputGroup>
                    <Input placeholder="16" type="number" />
                    <InputRightAddon children="units" />
                  </InputGroup>
                  <div style={{ display: "grid", placeItems: "center" }}>
                    <p>x</p>
                  </div>
                  <InputGroup>
                    <Input placeholder="9" type="number" />
                    <InputRightAddon children="units" />
                  </InputGroup>
                </div>
              </AccordionSection>
            </Accordion>
          </div>

          <div
            style={{
              margin: "0 auto",
            }}
          >
            <Cropper
              src={image}
              style={{ height: "480px", width: "100%" }}
              aspectRatio={1600 / 840}
              guides={true}
              preview=".preview"
              crop={onCrop}
              ref={cropperRef}
              disable={false}
              // autoCropArea={1} //0.8 is default
              background={false}
              viewMode={2}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />
            <div className={styles.controls}>
              <Button
                onClick={() => {
                  cropper.setDragMode("crop");
                }}
                leftIcon={<Icon as={FiCrop} w={5} h={5} />}
                colorScheme="blue"
                variant="solid"
              >
                Draw crop
              </Button>

              <div style={{ display: "grid", gap: "10px" }}>
                <ActionButton
                  onClick={zoomIn}
                  icon={RiZoomInLine}
                  color="blue"
                  title="Zoom in"
                />
                <ActionButton
                  onClick={zoomOut}
                  icon={RiZoomOutLine}
                  color="blue"
                  title="Zoom out"
                />
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <ActionButton
                  onClick={moveLeft}
                  icon={FaArrowLeft}
                  color="blue"
                  title="Move left"
                />
                <ActionButton
                  onClick={moveRight}
                  icon={FaArrowRight}
                  color="blue"
                  title="Move right"
                />
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <ActionButton
                  onClick={moveUp}
                  icon={FaArrowUp}
                  color="blue"
                  title="Move up"
                />
                <ActionButton
                  onClick={moveDown}
                  icon={FaArrowDown}
                  color="blue"
                  title="Move Down"
                />
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <ActionButton
                  onClick={rotateLeft}
                  icon={FiRotateCcw}
                  color="blue"
                  title="Rotate left"
                />
                <ActionButton
                  onClick={rotateRight}
                  icon={FiRotateCw}
                  color="blue"
                  title="Rotate right"
                />
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <ActionButton
                  onClick={swapX}
                  icon={FaArrowsAltH}
                  color="blue"
                  title="Flip X axis"
                />
                <ActionButton
                  onClick={swapY}
                  icon={FaArrowsAltV}
                  color="blue"
                  title="Flip Y axis"
                />
              </div>
              <Button
                onClick={() => {
                  cropper.setDragMode("move");
                }}
                leftIcon={<Icon as={BsArrowsMove} w={5} h={5} />}
                colorScheme="blue"
                variant="solid"
              >
                Move image
              </Button>
            </div>

            <div className={styles.resets}>
              <ImageReset onChange={onChange} />
              <ActionButton
                onClick={reset}
                icon={RiDeleteBinLine}
                color="red"
                title="Reset crop"
              />
            </div>
          </div>

          <div className={styles.tools}>
            <div className={styles.titleBox}>
              {activePreset.site ? (
                <h1 className={styles.sectionTitle}>
                  {activePreset.site} {activePreset.name}:
                </h1>
              ) : (
                <h1 className={styles.sectionTitle}>Custom Resolution:</h1>
              )}
            </div>
            <div className={styles.descriptionBox}>
              {activePreset.site ? (
                <p>{activePreset.description}</p>
              ) : (
                <p>Draw any crop area you want</p>
              )}
            </div>

            <div className={styles.titleBox}>
              <h1 className={styles.sectionTitle}>Cropped Data:</h1>
            </div>

            <div className={styles.croppedInfo}>
              <div style={{ display: "grid", placeItems: "center" }}>
                <div>
                  <h1 className={styles.croppedRes}>{dragArea.width}</h1>
                  <p>Width</p>
                </div>
              </div>
              <div style={{ display: "grid", placeItems: "center" }}>
                <h1>X</h1>
              </div>
              <div style={{ display: "grid", placeItems: "center" }}>
                <div>
                  <h1 className={styles.croppedRes}>{dragArea.height}</h1>
                  <p>Height</p>
                </div>
              </div>
              <div>
                {/* <p>Res.score</p> */}
                {activePreset.width ? (
                  // <h1 className={styles.croppedRes}>
                  //   {Math.round((dragArea.width * 100) / activePreset.width)} %
                  // </h1>
                  <CropScore
                    score={Math.round(
                      (dragArea.width * 100) / activePreset.width
                    )}
                    value={Math.round(
                      (dragArea.width * 100) / activePreset.width
                    )}
                  />
                ) : (
                  <div>
                    <p>Res.score</p>
                    <h1 className={styles.croppedRes}>
                      {calcCustomRes(Math.round(dragArea.width))}
                    </h1>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.titleBox}>
              <h1 className={styles.sectionTitle}>Image Preview:</h1>
            </div>

            <div
              style={{
                height: "auto",
                width: "100%",
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <div
                className="preview"
                style={{
                  height: "200px",
                  overflow: "hidden",
                }}
              ></div>
            </div>

            <Stack direction="row" spacing={2}>
              <a download={`test.${fileType}`} href={baseImage}>
                <Button
                  onClick={() => {
                    cropper.getCroppedCanvas({
                      width: "90px",
                      height: "90px",
                    });
                  }}
                  rightIcon={<Icon as={HiDownload} w={5} h={5} />}
                  colorScheme="teal"
                  variant="solid"
                  w={150}
                >
                  Download
                </Button>
              </a>

              <Select
                w={24}
                onChange={(e) => {
                  setFileType(e.target.value);
                }}
              >
                <option value="jpg">.JPG</option>
                <option value="png">.PNG</option>
              </Select>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
}
