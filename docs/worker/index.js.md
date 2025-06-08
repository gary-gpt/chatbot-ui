---
source: worker/index.js
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 66b222a9779b247c4376c34a4205ad58aa1d9581fdb747f125be0bae013be26d
---
# Source Code Documentation

## Configuration Parameter: `__WB_DISABLE_DEV_LOGS`

This source code file contains a single configuration parameter, `__WB_DISABLE_DEV_LOGS`.

### Description

The `__WB_DISABLE_DEV_LOGS` parameter is a Boolean flag used to control the logging of development logs in the application. 

### Value

This parameter is set to `true`. 

```python
self.__WB_DISABLE_DEV_LOGS = true
```

### Usage

When `__WB_DISABLE_DEV_LOGS` is set to `true`, the application will not log any development logs. This is typically used in a production environment where development logs are not necessary and can save storage space.

If you want to enable development logs, you can set this parameter to `false`. This is typically used in a development or testing environment where you want to track the detailed logs for debugging or testing purposes.

### Example

To enable development logs, you can set `__WB_DISABLE_DEV_LOGS` to `false` as shown below:

```python
self.__WB_DISABLE_DEV_LOGS = false
```

This will allow the application to log development logs.

### Note

Be careful when changing the value of this parameter. Enabling development logs in a production environment can consume significant storage space and may impact the performance of the application.
