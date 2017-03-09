# Group User API
This is a user API.

## User List [/user]

### All user [GET]

+ Response 200 (application/json)

	+ Body

		[
			{
				"uid":1,
				"username":"username"
			},
			{
				"uid":2,
				"username":"hogehoge"
			}
		]

## User Detail [/user/{user_id}]

### Show user detail [GET]

+ Parameters

	+ user_id (number,required) - user id

+ Response 200 (application/json)

	+ Body

		{
			"uid":1,
			"username":"username",
			"img":"http://hogehoge.com/user/img/foobar.jpg",
			"foo":"bar"
		}