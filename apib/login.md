# Group Login API
This is a login API.

## Login [/login]

### Login by email [POST /login]

+ Request (application/x-www-form-urlencoded)

	+ Attributes

		+ email:info@hogehoge.com (string,required) - email
		+ password:password (string,required) - password

+ Response 200 (application/json)

		{
			"uid":1,
			"username":"username"
		}

+ Response 404 (application/json)

		{
			"error":true,
			"message":"Invalid email or password"
		}