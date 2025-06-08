# Function Documentation

## uploadProfileImage

This function is used to upload a profile image to the Supabase storage. The image is stored in a bucket named "profile_images". 

### Parameters

The function takes two parameters:

- `profile`: This is an object of type `Tables<"profiles">`. It represents the profile of the user whose image is being uploaded.
- `image`: This is a `File` object. It represents the image file to be uploaded.

### Functionality

The function first checks if the size of the image file is less than 2MB. If the size exceeds the limit, an error is thrown.

The function then checks if there is an existing image for the profile. If there is, the function deletes the old image from the storage.

The function then uploads the new image to the storage. If there is an error during the upload, an error is thrown.

After the upload, the function retrieves the public URL of the uploaded image.

### Return Value

The function returns an object with two properties:

- `path`: This is a string representing the path of the uploaded image in the storage.
- `url`: This is a string representing the public URL of the uploaded image.

### Errors

The function can throw the following errors:

- "Image must be less than 2MB": This error is thrown if the size of the image file exceeds 2MB.
- "Error deleting old image": This error is thrown if there is an error while deleting the old image from the storage.
- "Error uploading image": This error is thrown if there is an error while uploading the new image to the storage.

### Example

```javascript
const profile = { user_id: "123", image_path: "old_image_path" };
const image = new File([""], "filename", { type: "image/png", size: 1000000 });

uploadProfileImage(profile, image)
  .then(({ path, url }) => console.log(`Image uploaded at path: ${path}. Public URL: ${url}`))
  .catch(error => console.error(`Error: ${error.message}`));
```

In this example, the function is called with a `profile` object and an `image` file. If the upload is successful, the path and public URL of the uploaded image are logged to the console. If there is an error, the error message is logged to the console.