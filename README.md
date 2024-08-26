# spinfo.js   v0.1 (3.02 KB)

A simple circular loader with optional tips

## Installation and usage

1. Download spinfo.js and add it to your web directory
2. In your HTML head, enter
```
script type="text/javascript" src="path/to/spinfo.js"></script>
```
3. In a new script element AFTER spinfo.js has been loaded, you may begin modifying.

### How to modify

spinfo.js should be modified when your are sure the page has been loaded.
Here's an example...
```
addEventListener("load", spinfo.init);
```
Use spinfo.init AFTER modifications and customizations have been made. Anything after initialization will not apply.
Each function must be written as spinfo.FUNCTION(). The list of functions is as follows

| Name                 | Params                                                  | Usage                                                   |
| :------------------- | :-----------------------------------------------------: | :-----------------------------------------------------: |
| init                 | none                                                    | Initializes and applies modifications                   |
| setTips              | Stirng Array                                            | Sets list of tips used while loading                    |
| load                 | none                                                    | Begins loading                                          |
| stop                 | none                                                    | Ends loading                                            |
| setSpinfoStyles      | size, color, backgroundColor, borderWidth, speed, image | Sets customizations for the close button                |
| setDimPercent        | decimal                                                 | From 0.0 to 1.0 of how dark the screen is when loading  |

For an example of these in use, please check the index.html file.
