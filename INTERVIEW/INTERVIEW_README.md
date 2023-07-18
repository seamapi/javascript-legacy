# ----------------------------------------------------

# OVERVIEW

# ----------------------------------------------------

> Before you start, hit the FORK button at the top left of the page, then you'll be able
> to edit files!

In this challenge you'll be modifying Seam's client library for Typescript to add support for creating
an access code. We want to see that you can implement features in an unfamiliar codebase.

The codebase has already been cloned to this directory. The codebase is real and open-source, you can
find it on github here: https://github.com/seamapi/seamapi-javascript

You are welcome to google for this challenge! Also, your interviewer is here to give you as many points
as possible, they are on your team, ask them questions!

# ----------------------------------------------------

# Full Problem

# ----------------------------------------------------

Seam is introducing a new API endpoint for creating an access code, the endpoint is
`/access_codes/create`.

This endpoint creates an access code. After an access code has been created,
`/access_codes/list` will return the newly created access code and any others
that had been created.

We want to build a client binding for this feature, so that users can call `seam.access_codes.create(deviceId)` to create
access codes.

In this task you'll modify our client library to support creating an access code. You should then use some code you
wrote to create an access code on one of the devices given by the API (any device works).

** There is some sample code at the bottom of this file to help you!**

# ----------------------------------------------------

## Additional Details

# ----------------------------------------------------

Example request / response

```ts
// Request
POST /access_codes/create
{ "code": "1234", "device_id": "some-uuid" }
```

```ts
// Response
{
	"action_attempt": {
     "attempt_attempt_id": "a1595050-1a36-444e-b5b1-4ff2ca97798f",
		 "status": "pending"
	}
}
```

When the action attempt successfully finishes execution (HINT: there’s an /action_attempts/get endpoint) it will return this object:

```ts
{
	"action_attempt": {
		"attempt_attempt_id": "a1595050-1a36-444e-b5b1-4ff2ca97798f",
		"status": "success",
		"result": {
			"access_code": {
        "access_code_id": "some-uuid",
				"code": "1234"
      }
		}
	}
}
```

# Quick Tips

- You can hold cmd or ctrl to click to definition!
- You can search the project with the magnifying glass on the left side

# ----------------------------------------------------

# GET STARTED

# ----------------------------------------------------

Open `INTERVIEW/RUN-ME.js` in the StackBlitz editor,
we've left a couple function calls that might help you get
started.
