def binary_search(mlist, a):
    """
    normal binary search of sorted list for Olog(n)
    :param mlist: rotated sorted list
    :param a: nummber to look for
    :return: index of a
    """
    start = 0
    end = len(mlist) -1

    while start <= end:
        middle = (start + end)//2
        if a == mlist[middle]:
            return middle
        elif a > mlist[middle]:
            start = middle + 1
        else:
            end = middle -1
    return -1

def custom_binary_search(mlist, a):
    """
    search a rotated sorted list for the index of a number in the list (along the 
    lines of binary search
    :param mlist: rotated sorted list
    :param a: nummber to look for
    :return: index of a
    """
    start = 0
    end = len(mlist) - 1

    while start <= end:
        middle = (start + end) // 2
        if a == mlist[middle]:
            return middle
        #the left side is in the correct order
        elif mlist[start] < mlist[middle]:
            if a <= mlist[middle]:
                return binary_search(mlist[start: middle], a)
            else:
                return middle + custom_binary_search(mlist[middle:], a)

        #the right side is in correct order
        else:
            if mlist[middle] < a <= mlist[len(mlist) - 1]:
                return middle + binary_search(mlist[middle: len(mlist)], a)
            else:
                return custom_binary_search(mlist[start: middle], a)

    return -1


if __name__ == "__main__":

    mlist = [ 1,  2, 15, 24, 24, 30, 47, 54, 68, 71, 76, 76, 83, 83, 83, 83, 84, 94, 99]
    rotate_mmlist = [76, 76, 83, 83, 83, 83, 84, 94, 99, 1,  2, 15, 24, 24, 30, 47, 54, 68, 71]

    for i, a in enumerate(mlist):
        idx = binary_search(mlist, a)
        print(f"a: {a}, idx: {idx}, actual: {i}")

    for i, a in enumerate(rotate_mmlist):
        idx2 = custom_binary_search(rotate_mmlist, a)
        print(f"a: {a}, idx: {idx2}, actual: {i}")


