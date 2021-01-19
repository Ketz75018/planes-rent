<template>
  <nuxt-link :to="'/vehicle/' + vehicle.id + '/specification'">
    <div :class="$style.container">
      <img :src="vehicle.preview" :alt="vehicle.name" />
      <div>
        <p :class="$style.cardName">{{ vehicle.name }}</p>
        <p :class="$style.cardDescription">{{ vehicle.description }}</p>
        <div :class="$style.cardPrice">{{ vehicle.rent }} $/h</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style module>
.container {
  display: flex;
  height: 164px;
  max-width: 440px;
  width: 350px;
  background: #fcfcfc;
  border-radius: 32px;
  padding: 25px 32px;
}

.container > img {
  margin-right: 24px;
  min-width: 88px;
  height: 88px;
  border-radius: 24px;
}

.cardName {
  font-family: Codec Pro Bold;
  color: #012345;
}

.cardDescription {
  font-size: 12px;
  line-height: 148%;
}

.cardPrice {
  font-family: Codec Pro Bold;
  font-size: 14px;
  line-height: 148%;
  color: #f84ab3;
}

.container:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.container:active {
  box-shadow: none;
}

@media (max-width: 645px) {
  .container {
    height: unset;
    min-height: 164px;
    max-height: 250px;

    width: unset;
    max-width: 345px;
    min-width: min-content;
  }
}
</style>
