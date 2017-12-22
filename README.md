FFShelf
===

## Information
If you have good idea with this project, please contact me, I will be glad to see your mail! :)
+ Developer: FloatFlower.Huang
+ Email: mail@floatflower.me
+ Website: https://blog.floatflower.me

## Using the component
1. Import javascript file to you html file:
```html
<script type= text/javascript src="/path/to/ffshelf.min.js"></script> 
```
2. Declare a component what you want
```html
<div id="app">
    <button v-on:click="openFFshelf">Open</button>
    <ffshelf category-url="/the/url/returns/cateogry-list" v-on:confirm="onConfirm" ref="instance1"></ffshelf>
</div>

<script>
    new Vue({
        el: '#app',
        // ... whatever ...
        methods: {
            openFFshelf: function() {
                this.$refs["instance1"].open();
            },
            onConfirm: function(files) {
                // the "files" parameter is an array contains the file we selected.
            }
        },
        components: {
            'ffshelf': FFShelf
        }
    })
</script>
```
3. And press the button, you will get this:
![FFShelf demo](https://i.imgur.com/bGTRJlK.gif)

### Data should return from category-url
Some data is required in response body:
```json
[
  {
    "id": "CATEGORY_ID", 
    "name": "CATEGORY_NAME",
    "icon": "CATEGORY_ICON",
    "getUrl": "GET_FILES_LIST_URL",
    "postUrl": "POST_FILE_URL"
  }
 ]
```
| field | value | required? | detail |
|-------|-------|-----------|--------|
| id | string, the identifier of the category. | required | This field is CRUCIAL data, because it used by cache array. |
| name | string, the name of the category. | required | This field is IMPORTANT data, it used to show the category name. |
| icon | string, the icon of the category. | optional | You can use [fontawesome](http://fontawesome.io/), [ionicons](http://ionicons.com/), or other font icon, but keep in mind that you should import the css or js by yourself. |
| getUrl | string, the url to get the category list | required | The field is CRUCIAL data, the component will request the url to get the list of files in the category. |
| postUrl | string, the url to upload files to the category. | optional | If the parameter is defined, the component will allow user to upload file via this component. |

### Data will be used in files list
```json
[
  {
    "filename": "FILENAME",
    "filetype": "FILETYPE",
    "fileurl": "FILE_URL"
  }
]
```
| field | value | required? | detail |
|-------|-------|-----------|--------|
| filename | string, the display name of the file. | required | The filename will be display in file list item. |
| filetype | string, the icon of the file. | optional | The icon that represent the file type. |
| fileurl | string, the url of the file. | required | The real url of the file. |

#### Icon supported file type
+ png/jpg/bmp/gif/svg, use "picture" keyword for default picture icon.
+ zip/7z/rar/iso, use "compress" keyword for default compressed file icon.
+ document/ppt/els/ppt/csv/txt, use "file" keyword for default file icon.
+ if the component get the file type unknown, it will use "file" icon. 

## Build the lib
The library build with [rollup](https://github.com/rollup/rollup):
1. If you want to build js file with watching files change, use:
```shell
npm run rollup-watch
```
2. If you want to build one time, use:
```shell
npm run rollup
```
