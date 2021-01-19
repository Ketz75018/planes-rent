<template>
  <div :class="$style.container">
    <div>
      <div :class="$style.errorNotification">
        An error has occured: {{ error.message || 'Unknown error' }}
      </div>
      <div :class="$style.errorInstruction">
        {{ error.instruction || 'Please refresh the page' }}
      </div>
      <button :class="$style.reloadButton">Reload Page</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      // <--- Send in the error
      type: Object,
      default: null,
    },
  },
}
</script>

<style module>
.container {
  padding: 56px 64px;

  min-width: fit-content;
  height: 708px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: #f3f4f7;
  border-radius: 48px;
}

.errorNotification {
  margin-bottom: 24px;
  min-width: fit-content;
  max-width: 415px;

  font-family: Codec Pro Bold;
  font-size: 40px;

  line-height: 120%;
  color: #012345;
}

.errorInstruction {
  font-size: 14px;
  min-width: fit-content;
  max-width: 415px;
}
.reloadButton {
  margin-top: 40px;
  padding: 17px 32px;
  height: 48px;
  border-radius: 12px;
}

@media (max-width: 645px) {
  .errorNotification {
    font-size: 24px;
  }
  .reloadButton {
    font-size: 14px;
  }
}
</style>
