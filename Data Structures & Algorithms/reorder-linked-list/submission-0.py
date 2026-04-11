class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        
        # --- STEP 1: FIND THE MIDDLE ---
        # [1] -> [2] -> [3] -> [4]
        #  ^p1    ^p2               (Start)
        #         ^p1          ^p2  (End of loop)
        p1, p2 = head, head
        while p2 and p2.next:
            p1 = p1.next
            p2 = p2.next.next

        # --- STEP 2: SPLIT THE LIST ---
        # List A: [1] -> [2] -> NULL
        # List B: [3] -> [4] -> NULL
        second_half = p1.next
        prev = p1.next = None

        # --- STEP 3: REVERSE THE SECOND HALF ---
        # List B starts as: [3] -> [4]
        # Loop 1: [3] -> NULL
        # Loop 2: [4] -> [3] -> NULL
        # Result: 'prev' now points to [4]
        while second_half:
            tmp = second_half.next
            second_half.next = prev
            prev = second_half
            second_half = tmp

        # --- STEP 4: ZIP THE TWO HALVES ---
        # Half 1: [1] -> [2]
        # Half 2: [4] -> [3]
        first_half, second_half = head, prev

        while second_half:
            # Save the "next" spots so we don't lose them
            tmp1, tmp2 = first_half.next, second_half.next
            
            # Connect: [1] -> [4]
            first_half.next = second_half
            
            # Connect: [4] -> [2]
            second_half.next = tmp1

            # Move pointers forward to repeat: [2] and [3]
            # Final result: [1] -> [4] -> [2] -> [3]
            first_half, second_half = tmp1, tmp2
