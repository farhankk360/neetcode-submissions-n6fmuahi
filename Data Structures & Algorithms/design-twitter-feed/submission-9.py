class Twitter:

    def __init__(self):
        self.tweets = collections.defaultdict(list)
        self.users = collections.defaultdict(set)
        self.timer = 0
        

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets[userId].append((self.timer, tweetId))
        self.timer -= 1
        

    def getNewsFeed(self, userId: int) -> List[int]:
        combinedTweets = list(self.tweets[userId])

        for followeeId in self.users[userId]:
            combinedTweets.extend(self.tweets[followeeId])
        
        combinedTweets.sort()
        return [tId for time, tId in combinedTweets[:10]]


    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.users[followerId].add(followeeId)
        

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.users[followerId].discard(followeeId)

