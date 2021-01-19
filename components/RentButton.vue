<template>
  <div :class="$style.rentBlock">
    <span
      >Rent for <span :class="$style.price"> {{ vehicle.rent }} $/h</span></span
    >
    <button :class="$style.rentButton">Rent now</button>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    vehicle: Object,
  },
}
</script>

<style module>
.rentBlock {
  font-family: Codec Pro Bold;
  margin-top: 32px;
  display: flex;
  align-items: center;

  height: 80px;

  margin-top: 45px;
  padding: 32px;

  font-size: 20px;
  line-height: 140%;
  color: #012345;

  background: #f3f4f7;
  border-radius: 16px;
  box-shadow: 0px 0px 25px 8px rgb(255, 255, 255);
}
.price {
  color: #4959ff;
}

.rentButton {
  margin-left: auto;
  padding: 0;
  width: 136px;
  height: 48px;
  border-radius: 12px;
}

@media (max-width: 448px) {
  .rentBlock {
    margin-top: 32px;

    font-size: 16px;
  }
  .rentButton {
    width: 111px;
    height: 44px;
    font-size: 12px;
  }
}
</style>
