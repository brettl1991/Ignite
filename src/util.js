//Media resize

export const smallImage = (imagaPath, size) => {
  const image = imagaPath.match(/media\/screenshots/)
    ? imagaPath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagaPath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
