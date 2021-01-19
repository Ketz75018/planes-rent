<template>
  <div :class="$style.vehicleContainer">
    <img :src="vehicle.image" :alt="vehicle.name" :class="$style.vehicleImg" />
    <div>
      <h1 :class="$style.title">{{ vehicle.name }}</h1>
      <nav :class="$style.nav">
        <nuxt-link to="specification">Specification</nuxt-link>
        <nuxt-link to="team">Team</nuxt-link>
        <nuxt-link to="rent_terms">Rent terms</nuxt-link>
      </nav>
      <nuxt-child :vehicle="vehicle"></nuxt-child>
      <rent-button :class="$style.rentButton" :vehicle="vehicle" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RentButton from '~/components/RentButton.vue'

export default {
  components: { RentButton },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('vehicle/fetchVehicle', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Something went wrong',
        instruction: 'Return to the front page',
      })
    }
  },
  computed: mapState({
    vehicle: (state) => state.vehicle.vehicle,
  }),
}
</script>

<style module>
.vehicleContainer {
  display: grid;
  grid-template-columns: 46% 46%;
  gap: 5%;
}

.vehicleImg {
  object-fit: fill;
  border-radius: 24px;
  width: 100%;
  max-height: 100%;
}

.title {
  font-family: Codec Pro Bold;
  margin-top: 32px;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
}

.nav {
  font-family: Codec Pro Bold;
  margin: 32px 0;
}

.nav > a {
  padding-right: 32px;
}
.nav > a:hover {
  color: #4959ff;
}

.rentButton {
  position: sticky;
  bottom: 32px;
  width: 100%;
}

@media (max-width: 991px) {
  .vehicleContainer {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    gap: 0;
  }
}

@media (max-width: 448px) {
  .title {
    margin-top: 0;
  }
  .vehicleContainer {
    padding: 0 16px 16px 16px;
  }
  .vehicleImg {
    border-radius: 16px;
  }
  .title {
    margin-top: 22px;
    font-size: 24px;
  }
  .nav {
    margin-top: 16px;
    margin-bottom: 20px;
  }
  .nav > a {
    padding-right: 20px;
  }
}
</style>
