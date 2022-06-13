

module.exports.userSignUp = async(req, res, next)=>{
  try {
    let userList = req.body;
    console.log('inside user ', userList);

    let successList = [];
    let failuireList = [];

    let userDetails = userList.map((user)=>{
      let detail = {};
      detail['name'] = user.name;
      detail['username'] = user.name.toLowerCase() +'@'+ user.company.toLowerCase()+'.ai';
      detail['password'] = user.company.toLowerCase()+'@'+'123';
      return detail;
    })

    res.status(200).json({success : true, data : userDetails, message : 'user is created successfully'})
  } catch (error) {
    console.log(error)
  }
}


response =>
	"success" : [
		{
			"name" : "xyz",
			"username" : "xyz@saarthi.ai",
			"password" : "Saarthi@123"	
		},
		
	],
	"failure" : [
		{
		"name" : "def",
		message : {
			"name already exist",
			"email already exist"
			}
		}
	]






// [
//   {
//     "name": "abc",
//     "email": "abc@gmail.com",
//     "company": "Saarthi",
//   },
//   {
//     "name": "def",
//     "email": "def@gmail.com",
//     "company": "Saarthi"
//   }
// ]

// response =>
// [
//   {
//     "name" : "abc",
//     "username" : "abc@saarthi.ai",  name + company + .ai
//     "password" : "Saarthi@123"	
//   },
//   {
//     "name" : "def",
//     "username" : "def@saarthi.ai",
//     "password" : "Saarthi@123"	
//   }
// ]

// validation : 
// no duplicate in name, email
// reponse =>
// [
//   {
//     "name" : "abc",
//     message : {
//     "name already exist",
//     email already exist
//     }
//   },