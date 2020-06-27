<template>
    <div class="modal">
        <div class="modal__bck"></div>
        <div class="modal__block">
            <div class="modal__text">
                {{text}}
            </div>
            <div class="modal__buttons">
                <tButton
                        :name="'accept'"
                        :className="'green'"
                        :clickButton="modalButtonTrue"></tButton>
                <tButton
                        :name="'cancel'"
                        :className="'red'"
                        :clickButton="modalButtonFalse"></tButton>

            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>