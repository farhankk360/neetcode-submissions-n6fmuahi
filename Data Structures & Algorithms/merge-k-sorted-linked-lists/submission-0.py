class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None

        while len(lists) > 1:
            list_one = lists.pop()
            list_two = lists.pop()

            left_head, right_head = list_one, list_two
            temp_list_head = ListNode()
            temp_list_tail = temp_list_head

            while left_head and right_head:
                if left_head.val < right_head.val:
                    temp_list_tail.next = ListNode(left_head.val)
                    temp_list_tail = temp_list_tail.next
                    left_head = left_head.next
                else:
                    temp_list_tail.next = ListNode(right_head.val)
                    temp_list_tail = temp_list_tail.next
                    right_head = right_head.next
            
            temp_list_tail.next = left_head or right_head
            lists.append(temp_list_head.next)

        return lists[0]