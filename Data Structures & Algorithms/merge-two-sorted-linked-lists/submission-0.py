# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # [1,2,4] [1,3,5]
        #      ^       ^

        if not list1:
            return list2
        
        if not list2:
            return list1

        p1, p2 = list1, list2
        
        head = None
        tail = None

        while p1 or p2:
            v1 = p1.val if p1 else float('inf')
            v2 = p2.val if p2 else float('inf')
            
            current_min = min(v1, v2)
            
            if p1 and current_min == p1.val:
                p1 = p1.next
            else:
                p2 = p2.next

            new_node = ListNode(current_min)

            if not head:
                head = new_node
            
            elif not head.next:
                head.next = new_node
                tail = head.next
            else:
                tail.next = new_node
                tail = tail.next


        return head
            
                



       