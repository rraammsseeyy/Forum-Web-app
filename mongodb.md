`Model` is the name of the db.Table 


to find a user with a given email

`const findEmail = await Model.findOne({email:emai})`

to find a user with a given email with a given password

`const findEmailWithPasssword = await Model.findOne({email:emai, password:password})`

to find all users

`const findEmail = await Model.find()`