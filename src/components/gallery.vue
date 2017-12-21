<template>
    <div class="dialog-gallery">
        <div class="gallery-content">
            <table class="file-table">
                <thead>
                    <tr>
                        <td>Filename</td>
                        <td>Datetime</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="file in files">
                        <td>{{ file.name }}</td>
                        <td>{{ file.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                files: []
            }
        },
        mounted: function() {
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
            this.files.push({name: "File1", date: "2017-10-20 12:11:13"});
        }
    }
</script>

<style lang="scss" module>
    .dialog-gallery {
        width: 660px;
        height: 100%;
        position: absolute;
        left: 300px;
        z-index: 1000;
        padding: 0 30px;
        box-sizing: border-box;

        .gallery-content {

            margin: 40px 0 80px 0;
            box-sizing: border-box;
            width: 600px;
            height: 480px;
            position: absolute;
            overflow-x: hidden;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 4px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                background-color: rgba(0,0,0,0);
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: #546E7A;
                border-radius: 1px;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: #37474F;
            }

            table.file-table {

                border-bottom: 1px solid #ddd;
                border-top: 1px solid #ddd;
                width: 100%;
                border-collapse: collapse;

                & > thead {
                    & > tr {

                        & > td {
                            padding: 10px;
                            border-bottom: 1px solid #ddd;
                        }
                    }
                }

                & > tbody {
                    & > tr {
                        border-bottom: 1px solid #ccc;
                        & > td {
                            padding: 10px;
                            border-bottom: 1px solid #ccc;
                            display: table-cell;

                        }

                        &:hover {
                            background-color: #ECEFF1;
                        }

                    }
                }

            }
        }
    }
</style>