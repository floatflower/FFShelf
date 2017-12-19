<template>
    <div class="ff-shelf">
        <div class="dialog-frame">
        </div>
        <div class="dialog">
            <div class="dialog-drawer"></div>
            <div class="dialog-header">
                Hello
            </div>
            <div class="dialog-gallery"></div>
            <div class="dialog-close"><i class="fa fa-times" aria-hidden="true"></i></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');
    $dialog-width: 960px;
    $dialog-height: 600px;
    $dialog-background-color: #fff;
    $dialog-padding: 0px;

    .ff-shelf {
        font-family: 'Titillium Web', sans-serif;
        .dialog-frame {

            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            position: fixed;



        }

        .dialog {

            width: $dialog-width;
            height: $dialog-height;
            background: $dialog-background-color;
            padding: $dialog-padding;
            border: none;
            margin: -1 * ($dialog-height/2) 0 0 -1*($dialog-width/2);
            top: 50%;
            left: 50%;
            position: fixed;
            box-sizing: border-box;
            border-radius: 3px;
            z-index: 999;
            overflow: hidden;

            .dialog-drawer {
                width: 300px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                box-shadow: 0 1px 5px #ccc;
                box-sizing: border-box;
                z-index: 1002;
                background-color: $dialog-background-color;
            }

            .dialog-gallery {
                width: 660px;
                height: 100%;
                position: absolute;
                left: 300px;
                z-index: 1000;
            }

            .dialog-header {
                position: absolute;
                text-align: center;
                width: 960px;
                padding: 12px;
                box-sizing: border-box;
                box-shadow: 1px 0 5px #ccc;
                z-index: 1003;
                font-size: 16px;
                background-color: $dialog-background-color;
            }

            .dialog-close {
                position: absolute;
                right: 0;
                top: 0;
                margin: 10px 15px;
                color: #aaa;

                i {
                    font-size: 12px;
                }

                &:hover {
                    color: #333;
                }

                z-index: 1004;

            }

        }

    }
</style>