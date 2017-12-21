<template>
    <div class="buttons">
        <button class="cancel">Close</button>
        <button class="ok">OK!</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.buttons {
    position: absolute;
    bottom: 30px;
    right: 30px;
    button {
        border: none;
        padding: 8px 16px;
        border-radius: 3px;
        font-size: 14px;
    }

    button.ok {
        background-color: #78909C;
    }

    button.cancel {
        margin-right: 5px;
        background-color: #CFD8DC;
    }
}
</style>