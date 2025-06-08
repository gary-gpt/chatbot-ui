# Function Documentation

## createResponse

This function is used to create a new `Response` object with the provided data and status. The data is converted into a JSON string and the content type is set as "application/json".

**Syntax:**

```javascript
createResponse(data: object, status: number): Response
```

**Parameters:**

- `data: object` - This is the data that you want to include in the response. It should be an object that can be converted into a JSON string.

- `status: number` - This is the HTTP status code that you want to set for the response.

**Returns:**

This function returns a new `Response` object with the provided data and status.

**Example:**

```javascript
const data = { message: "Hello, World!" };
const status = 200;
const response = createResponse(data, status);
```

In this example, the `createResponse` function is used to create a new `Response` object with the message "Hello, World!" and the status code 200. The `Response` object is then stored in the `response` variable.