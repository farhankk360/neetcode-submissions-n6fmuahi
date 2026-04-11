class MaxHeap:
    def __init__(self, arr):
        self.heap = arr
        self.heapify()

    def length(self):
        return len(self.heap)

    def insert(self, element):
        self.heap.append(element)
        self.shiftUp(len(self.heap) - 1)

    def extract(self):
        if not self.heap: return 0
        if len(self.heap) == 1: return self.heap.pop()

        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.shiftDown(0)

        return root
    
    def heapify(self):
        n = len(self.heap)

        for i in range(n // 2 - 1, -1, -1):
            self.shiftDown(i)

    def shiftUp(self, i):
        parent = (i - 1) // 2

        if i > 0 and self.heap[i] > self.heap[parent]:
            self.heap[i], self.heap[parent] = self.heap[parent], self.heap[i]
            self.shiftUp(parent)

    def shiftDown(self, i):
        largest = i
        left, right = 2 * i + 1, 2 * i + 2
        n = len(self.heap)

        if left < n and self.heap[left] > self.heap[largest]:
            largest = left
        
        if right < n and self.heap[right] > self.heap[largest]:
            largest = right

        if largest != i:
            self.heap[i], self.heap[largest] = self.heap[largest], self.heap[i]
            self.shiftDown(largest)


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = MaxHeap(stones)

        while maxHeap.length() > 1:
            first = maxHeap.extract()
            second = maxHeap.extract()

            if first > second:
                maxHeap.insert(first - second)
            
        return maxHeap.extract()



