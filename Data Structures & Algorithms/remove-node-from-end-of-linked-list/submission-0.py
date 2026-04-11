class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        total_nodes = 0
        current_node = head

        while current_node:
            total_nodes += 1
            current_node = current_node.next

        nth_node_to_remove = total_nodes - n

        if nth_node_to_remove == 0:
            return head.next

        current_node = head
        prev = None
        i = 0

        while current_node:
            if i == nth_node_to_remove:
                next_node = current_node.next
                prev.next = next_node

                return head

            i += 1
            prev = current_node
            current_node = current_node.next
        
        return head