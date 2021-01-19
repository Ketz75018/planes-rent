<template>
  <div>
    <p>{{ vehicle.specifications_text }}</p>
    <h2 :class="$style.title">Features:</h2>
    <div :class="$style.featureGroup">
      <div :class="$style.featureImg">
        <img src="~/assets/images/cup.svg" />
      </div>
      <div>
        <h3 :class="$style.featureTitle">A challenge for a true champion</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
    <div :class="$style.featureGroup">
      <div :class="$style.featureImg">
        <img src="~/assets/images/pilot.svg" />
      </div>
      <div>
        <h3 :class="$style.featureTitle">Pilot's sweaty hands</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
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
.title,
.featureTitle {
  font-family: Codec Pro Bold;
  color: #012345;
}
.title {
  margin: 32px 0 16px 0;
  font-size: 24px;
  line-height: 21px;
}

.featureGroup {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.featureImg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin-right: 24px;
  width: 80px;
  height: 96px;

  border-radius: 16px;
  background: #f3f4f7;
}

.featureTitle {
  font-size: 16px;
  line-height: 152%;
}

@media (max-width: 448px) {
  .title {
    margin: 20px 0 20px 0;
    font-size: 20px;
  }
  .featureImg {
    width: 64px;
    height: 80px;
  }
}
</style>
