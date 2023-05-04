// LeetCode 661. Image Smoother

/**
 * @param {number[][]} img
 * @return {number[][]}
 */

var imageSmoother = function (img) {
  const smooth = (mat, m, n) => {
    let sum = 0,
      cells = 0;
    for (let i = m - 1; i <= m + 1; i++) {
      if (i < 0 || i >= mat.length) continue;
      for (let j = n - 1; j <= n + 1; j++) {
        if (j < 0 || j >= mat[0].length) continue;
        sum += mat[i][j];
        cells++;
      }
    }
    return Math.floor(sum / cells);
  };

  const newImg = [];
  for (let i = 0; i < img.length; i++) {
    newImg.push([]);
    for (let j = 0; j < img[0].length; j++) {
      newImg[i].push(smooth(img, i, j));
    }
  }

  return newImg;
};
