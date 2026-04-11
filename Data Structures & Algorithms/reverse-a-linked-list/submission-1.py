# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        stack = []
        current = head

        while current:
            stack.append(current)
            current = current.next

        new_head = None
        new_tail = None

        while stack:
            current_node = stack.pop()
            new_node = ListNode(val=current_node.val)
    
            if not new_head:
                new_head = new_node
            elif not new_tail:
                new_tail = new_node
                new_head.next = new_tail
            else:
                new_tail.next = new_node
                new_tail = new_tail.next

        return new_head
            

            


            

            

        