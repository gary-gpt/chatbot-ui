---
source: lib/export-old-data.ts
generated: '2025-06-08T13:21:01.631Z'
tags: []
hash: fd630eeaf26cccbecc77a30d5d18564d4501aada25a8bb30cc80c7b240be570c
---
# Documentation

## Function: exportLocalStorageAsJSON

This function exports the data stored in the local storage of the browser as a JSON file. The function does not take any parameters.

### Process

1. The function first initializes an empty object `data` to store key-value pairs from the local storage.

2. It then iterates over each item in the local storage. For each item, it retrieves the key and the corresponding value and stores them in the `data` object. If the key is `null`, it skips the item.

3. The `data` object is then converted into a JSON string using `JSON.stringify()`.

4. The JSON string is converted into a blob with the type "application/json".

5. A URL is created for the blob using `URL.createObjectURL()`.

6. A new anchor (`<a>`) element is created and appended to the document body. The `href` attribute of the anchor element is set to the blob URL and the `download` attribute is set to "chatbot-ui-data.json", which will be the name of the downloaded file.

7. The anchor element is programmatically clicked to start the download of the file.

8. After the download starts, the anchor element is removed from the document body and the blob URL is revoked using `URL.revokeObjectURL()`.

### Usage

This function can be used to export the data stored in the local storage of the browser as a JSON file. This can be useful for debugging purposes or for allowing users to export their data.

```javascript
exportLocalStorageAsJSON();
```

This will create a download for a file named "chatbot-ui-data.json" containing the data from the local storage in JSON format.
