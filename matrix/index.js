// MATRIX

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = (matrix) => {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;

      // saveTopLeft

      let topLeft = matrix[top][left];

      // move bottom left into top left
      matrix[top][left] = matrix[bottom][left];


      
    }
  }
};

// console.log(
//   rot([
//     [1, 2],
//     [4, 5],
//   ])
// );

// console.log(
//   rot([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// [7, 8, 9],
// [1, 2, 3],
// [4, 5, 6],

// ! out:[[4,1],[5,2]]
// console.log(
//   rot([
//     [3, 4],
//     [6, 2],
//   ])
// );
// ! out:[[6,3],[2,4]]

// const rotate = function (matrix) {
//   // console.log(matrix)
//   for (const row of matrix) {
//     console.log(row);
//   }
//   const len = matrix.length;

//   const swapItem = (matrix, i, j) => {
//     console.log(matrix[i][j], `${i} is ith row index`,matrix[j][i], `${j} is jth index`);

//     [ matrix[j][i] , matrix[i][j] ] =   [ matrix[i][j], matrix[j][i] ];

//     for (const row of matrix) {
//       console.log(row);
//     }
//   };

//   for (let i = 0; i < len; i++) {
//     const row = matrix[i];

//     // console.log(row , `row ${i+1}`);

//     for (let j = 0; j < i; j++) {
//       // swapItem(matrix, i, j);

//       const temp1 = row[j];
//       console.log(temp1,`c:-> row:${i} -- col:${j}`)
//       const temp2 = row[i];

//     }
//   }
// };

// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// // ! Output: [[7,4,1],[8,5,2],[9,6,3]]

// // console.log(
// //   rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
// // );
// // Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// /*
// *
// * n == matrix.length == matrix[i].length
// * 1 <= n <= 20
// * -1000 <= matrix[i][j] <= 1000
// *

// */

const trans = (matrix) => {
  console.log(matrix);

  const swapItem = (mat, i, j) => {
    console.log(
      mat[i][j],
      `${i} is ith row index ,`,
      mat[j][i],
      ` ${j} is jth index`
    );

    [mat[j][i], mat[i][j]] = [mat[i][j], mat[j][i]];

    for (const row of matrix) {
      console.log(row);
    }
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix.length; col++) {
      swapItem(matrix,row,col);
    }
  }
  console.log(matrix);
  // console.log('before reverse');
  // for (const row of matrix) {
  //   row.reverse();
  // }

  // console.log(matrix);
};

// console.log(
//   trans([
//     [1, 2],
//     [4, 5],
//   ])
// );

console.log(
  trans([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
