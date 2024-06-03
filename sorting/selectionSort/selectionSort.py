def selectionSort(array):
    for i in range(0, len(array)):
        min = i
        for j in range(i+1 , len(array)):
            if array[min] > array[j]:
                min = j
        array[i] , array[min] = array[min] , array[i]
    return array


result = selectionSort([0, 2, 34, 22, 10, 19])
print(result)
