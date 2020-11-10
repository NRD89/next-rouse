// const multipleSizesWebp = require('../images/${path}?webp?resize');
// const multipleSizes = require('../images/${path}?resize');

const Image = ({ path, width, height }) => {
  return (
    <picture>
      <source srcSet={require(`../images/${path}?resize&format=webp`).srcSet} type="image/webp" />
      <source srcSet={require(`../images/${path}?resize`).srcSet} type="image/png" />
      <source srcSet={require(`../images/${path}?resize`).srcSet} type="image/jpg" />
      <img loading="lazy" srcSet={require(`../images/${path}?resize`).srcSet} src={require(`../images/${path}`).src} />
    </picture>
  )
}

export default Image
