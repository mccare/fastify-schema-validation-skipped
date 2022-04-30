# Schema validation 

Schema validation is skipped if there is no body present in a POST request even when the body has required attributes.

* run the server with `yarn dev`
* `curl -X POST http://localhost:3000`

The response then is `200` instead of `400` for bad request.
