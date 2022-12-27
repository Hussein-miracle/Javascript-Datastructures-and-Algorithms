def rotate(matrix) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    print(matrix)
    # transpose
    for row in range(len(matrix)):
        for col in range(row, len(matrix)):
            temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp

    # reverse
    for row in matrix:
        row.reverse()
    print(matrix)


print(rotate([
    [1, 2],
    [4, 5],
]))
