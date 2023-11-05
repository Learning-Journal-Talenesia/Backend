const SlugBuilder = {
  build: (str) => {
    return str
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  },
  changeSlugToNormal: (str) => {
    return str.toLowerCase().replace(/-/g, " ");
  },
};

export default SlugBuilder;
