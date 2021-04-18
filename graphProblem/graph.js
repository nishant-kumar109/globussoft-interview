
class Graph{
  constructor(){
      this.friendList = {};      // adjacencyList
  }

  createUser(user){
      if(!this.friendList[user]) this.friendList[user] = { "follow": [], "followedBy": [] };
  }


  makeFriendship(user1,user2){                  // addEdges
     this.friendList[user1].follow.push(user2)
     this.friendList[user2].followedBy.push(user1)
  }


  unfollowFriend(user1, user2){
      this.friendList[user1].follow = this.friendList[user1].follow.filter(
          user => user !== user2
      );
      this.friendList[user2].followedBy = this.friendList[user2].followedBy.filter(
          user => user !== user1
      );
  }

}



let input = 
{
  "friends": [
	{
  	"A": "B"
	},
	{
  	"A": "D"
	},
	{
  	"C": "B"
	},
	{
  	"C": "F"
	},
	{
  	"E": "F"
	}
	]
}


let graph = new Graph();

input.friends.map(frnd => {
  graph.createUser(Object.keys(frnd))
  graph.createUser(Object.values(frnd))
  graph.makeFriendship(...Object.keys(frnd), ...Object.values(frnd))
})

// graph after creating users and friendship
console.log('graph after creating users and friendship  : ', graph.friendList)

graph.unfollowFriend('A', 'B')

// graph after unfollowing each other friendship
console.log('graph after unfollowing each other friendship  : ',  graph.friendList)

