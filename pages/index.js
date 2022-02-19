import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Cropper from "react-cropper";
import {
  Icon,
  Button,
  Select,
  Accordion,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import {
  FiCrop,
  FiRotateCcw,
  FiRotateCw,
  FiLock,
  FiUnlock,
} from "react-icons/fi";
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
import CheckBox from "../components/CheckBox";
import CropScore from "../components/CropScore";
import DescriptionCard from "../components/DescriptionCard";

import "cropperjs/dist/cropper.css";
import styles from "../styles/Home.module.css";

import { presets } from "../data/presets.js";

export default function Home() {
  const initialSite = Object.keys(presets[0])[0];
  const { name, description, height, width } = presets[0][initialSite][0];

  const [image, setImage] = useState();
  const [baseImage, setBaseImage] = useState();
  const [fileName, setFileName] = useState("");
  const [cropper, setCropper] = useState();

  const [activePreset, setActivePreset] = useState({
    site: initialSite,
    name,
    description,
    height,
    width,
  });

  const [dragArea, setDragArea] = useState({
    width,
    height,
  });

  const [fileType, setFileType] = useState("jpg");

  const [customResolutionError, setCustomResolutionError] = useState("");
  const [customRatioLock, setCustomRatioLock] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (cropper) {
      const x = cropper.getData().x;
      if (customRatioLock) {
        cropper.setAspectRatio(dragArea.width / dragArea.height);
      } else {
        cropper.setAspectRatio(NaN);
      }
      cropper.setData({ width: dragArea.width, height: dragArea.height, x, y });
    }
  }, [customRatioLock]);

  const calcCustomRes = (res) =>
    res < 720 ? "SD" : res < 1920 ? "HD" : res < 3840 ? "FHD" : "UHD";

  const getFileName = (file) => file.substr(0, file.lastIndexOf(".")) || x;

  const cropperRef = useRef(null);
  const onCrop = () => {
    let cropper = cropperRef.current.cropper;
    setDragArea({
      ...dragArea,
      width: cropper.getCroppedCanvas().width,
      height: cropper.getCroppedCanvas().height,
    });

    setX(cropper.getData().x);
    setY(cropper.getData().y);

    setBaseImage(cropper.getCroppedCanvas().toDataURL());
  };

  const onCropMove = () => {
    if (cropper) {
      setX(cropper.getData().x);
      setY(cropper.getData().y);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
      setFileName(getFileName(e.dataTransfer.files[0].name));
    } else if (e.target) {
      files = e.target.files;
      setFileName(getFileName(e.target.files[0].name));
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
              about
            </p>

            <div className={styles.heroSelect}>
              <div className={styles.heroDescriptionArea}>
                <DescriptionCard
                  image="/graphics/close.png"
                  description="Say goodbye to squeezed, stretched and pixelated images"
                />
                <DescriptionCard
                  image="/graphics/close.png"
                  description="Stop spending time trying to figure out resolutions
                  and aspect ratios"
                />
                <DescriptionCard
                  image="/graphics/close.png"
                  description="Avoid using multiple tools and creating templates for each media type"
                />
                <DescriptionCard
                  image="/graphics/check.png"
                  description="Let CropScore sort it all out for you!"
                />
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
                        <CheckBox
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
                              setCustomRatioLock(false);
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
                              cropper.setData({
                                width: dragArea.width,
                                height: dragArea.height,
                                x,
                                y,
                              });
                            }
                          }}
                        />
                      );
                    })}
                  </AccordionSection>
                );
              })}
              <AccordionSection title="Custom size">
                <h1>Set resolution / aspect ratio:</h1>
                <div className={styles.customInput}>
                  <InputGroup>
                    <Input
                      placeholder={dragArea.width}
                      value={dragArea.width || ""}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const previousValue =
                          Number(value.toString().slice(0, -1)) || 0;
                        const containerWidth = cropper.getContainerData().width;
                        const naturalImageWidth =
                          cropper.getImageData().naturalWidth;
                        const canvasWidth = cropper.getCanvasData().width;

                        if (canvasWidth > containerWidth) {
                          const maxCropperWidth = Math.round(
                            containerWidth / (canvasWidth / naturalImageWidth)
                          );
                          if (value <= maxCropperWidth) {
                            console.log("image OUTSIDE the width of container");
                            if (activePreset.name) {
                              setActivePreset({});
                              cropper.setAspectRatio(NaN);
                            }
                            cropper.setData({ width: value, x, y });

                            setCustomResolutionError("");
                          } else {
                            setCustomResolutionError(
                              `The max width is ${maxCropperWidth}px`
                            );
                            e.target.value = previousValue;
                            cropper.setData({
                              width: previousValue,
                              x,
                              y,
                            });
                            setTimeout(() => {
                              setCustomResolutionError("");
                            }, 2000);
                          }
                        } else {
                          console.log("image INSIDE the width of container");
                          if (value <= naturalImageWidth) {
                            if (activePreset.name) {
                              setActivePreset({});
                              cropper.setAspectRatio(NaN);
                            }
                            cropper.setData({ width: value, x, y });
                            setCustomResolutionError("");
                          } else {
                            setCustomResolutionError(
                              `The max width is ${naturalImageWidth}px`
                            );
                            e.target.value = previousValue;
                            cropper.setData({
                              width: previousValue,
                              x,
                              y,
                            });
                            setTimeout(() => {
                              setCustomResolutionError("");
                            }, 2000);
                          }
                        }
                      }}
                      isDisabled={customRatioLock}
                      type="number"
                    />
                    <InputRightAddon children="px" />
                  </InputGroup>
                  <div style={{ display: "grid", placeItems: "center" }}>
                    <p>x</p>
                  </div>
                  <InputGroup>
                    <Input
                      placeholder={dragArea.height}
                      value={dragArea.height || ""}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const previousValue =
                          Number(value.toString().slice(0, -1)) || 0;
                        const containerHeight =
                          cropper.getContainerData().height;
                        const naturalImageHeight =
                          cropper.getImageData().naturalHeight;
                        const canvasHeight = cropper.getCanvasData().height;

                        if (canvasHeight > containerHeight) {
                          const maxCropperHeight = Math.round(
                            containerHeight /
                              (canvasHeight / naturalImageHeight)
                          );
                          if (value <= maxCropperHeight) {
                            console.log(
                              "image OUTSIDE the height of container"
                            );
                            if (activePreset.name) {
                              setActivePreset({});
                              cropper.setAspectRatio(NaN);
                            }
                            cropper.setData({ height: value, x, y });
                            setCustomResolutionError("");
                          } else {
                            setCustomResolutionError(
                              `The max height is ${maxCropperHeight}px`
                            );
                            e.target.value = previousValue;
                            cropper.setData({
                              height: previousValue,
                              x,
                              y,
                            });
                            setTimeout(() => {
                              setCustomResolutionError("");
                            }, 2000);
                          }
                        } else {
                          console.log("image INSIDE the height of container");
                          if (value <= naturalImageHeight) {
                            if (activePreset.name) {
                              setActivePreset({});
                              cropper.setAspectRatio(NaN);
                            }
                            cropper.setData({ height: value, x, y });
                            setCustomResolutionError("");
                          } else {
                            setCustomResolutionError(
                              `The max height is ${naturalImageHeight}px`
                            );
                            e.target.value = previousValue;
                            cropper.setData({
                              height: previousValue,
                              x,
                              y,
                            });
                            setTimeout(() => {
                              setCustomResolutionError("");
                            }, 2000);
                          }
                        }
                      }}
                      isDisabled={customRatioLock}
                      type="number"
                    />
                    <InputRightAddon children="px" />
                  </InputGroup>
                </div>
                {customResolutionError && (
                  <AlertMessage message={customResolutionError} />
                )}

                <Button
                  onClick={() => {
                    setCustomRatioLock(!customRatioLock);
                    setActivePreset({});
                    setX(cropper.getData().x);
                    setY(cropper.getData().y);
                  }}
                  leftIcon={
                    customRatioLock ? (
                      <Icon as={FiLock} w={5} h={5} />
                    ) : (
                      <Icon as={FiUnlock} w={5} h={5} />
                    )
                  }
                  colorScheme="teal"
                  variant="solid"
                >
                  {customRatioLock ? "Locked In" : "Lock In"}
                </Button>
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
              aspectRatio={width / height}
              guides={true}
              preview=".preview"
              crop={onCrop}
              cropmove={onCropMove}
              ref={cropperRef}
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
                {activePreset.width ? (
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
                      {!dragArea.width || !dragArea.height
                        ? "-"
                        : calcCustomRes(Math.round(dragArea.width))}
                    </h1>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.titleBox}>
              <h1 className={styles.sectionTitle}>Image Preview:</h1>
            </div>
            <div>
              <div
                className="preview"
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "20px",
                  display: `${
                    dragArea.width == 0 || dragArea.height == 0
                      ? "none"
                      : "block"
                  }`,
                }}
              ></div>
            </div>
            {(dragArea.width == 0 || dragArea.height == 0) && (
              <div className={styles.descriptionBox}>
                <p>Preview not available.</p>
                <p>
                  Please set{" "}
                  {dragArea.width == 0 && dragArea.height == 0
                    ? "width and height"
                    : dragArea.width == 0
                    ? "width"
                    : "height"}
                  .
                </p>
              </div>
            )}

            <div className={styles.downloadArea}>
              <a href={baseImage} download={`${fileName}-cropped.${fileType}`}>
                <Button
                  rightIcon={<Icon as={HiDownload} w={5} h={5} />}
                  colorScheme="teal"
                  variant="solid"
                  isDisabled={!dragArea.width || !dragArea.height}
                  w="100%"
                >
                  Download
                </Button>
              </a>

              <Select
                onChange={(e) => {
                  setFileType(e.target.value);
                }}
                isDisabled={!dragArea.width || !dragArea.height}
              >
                <option value="jpg">.JPG</option>
                <option value="png">.PNG</option>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
