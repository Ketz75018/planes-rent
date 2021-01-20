<template>
  <nuxt-link
    :to="'/vehicle/' + vehicle.id + '/specification'"
    :class="$style.cardContainer"
  >
    <div :class="$style.card">
      <img :src="vehicle.preview" :alt="vehicle.name" />
      <div :class="$style.cardInfo">
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
};
</script>

<style module>
.cardContainer {
  flex: 1 1 340px;
  margin: 0 0 32px 32px;
  max-width: 400px;
}
.card {
  display: flex;
  align-items: flex-start;

  padding: 25px 32px;
  height: 164px;

  background: #fcfcfc;
  border-radius: 32px;
}

.card > img {
  margin-right: 24px;

  min-width: 88px;
  height: 88px;

  border-radius: 24px;
}

.cardInfo {
  align-self: center;
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

.card:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card:active {
  box-shadow: none;
}

@media (max-width: 645px) {
  .cardContainer {
    margin: 0 0 12px 0;
  }
  .card {
    min-width: min-content;
  }
}
</style>
