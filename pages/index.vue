<template>
  <div v-if="vehicles.length" :class="$style.container">
    <form :class="$style.form" @submit.prevent>
      <div>
        <span>Rent</span>
        <select
          v-model="chosenType"
          name="filter"
          :class="$style.select"
          @change="filterVehicles(chosenType)"
        >
          <option value="whatever">whatever</option>
          <option v-for="(option, index) in types" :key="index" :value="option">
            {{ option }}
          </option>
          <img src="~/assets/images/down-arrow.svg" />
        </select>
      </div>
      <div :class="$style.buttonGroup">
        <span>Add New</span>
        <button :class="$style.button">
          <img src="~/assets/images/Plus.svg" alt="plus" />
        </button>
      </div>
    </form>
    <div :class="$style.cards">
      <VehicleCard
        v-for="vehicle in vehicles"
        :key="vehicle.id"
        :vehicle="vehicle"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      chosenType: 'whatever',
    }
  },
  computed: mapState({
    vehicles: ({ vehicle }) =>
      vehicle.filteredVehicles.length
        ? vehicle.filteredVehicles
        : vehicle.vehicles,
    types: (state) => state.vehicle.vehicleTypes,
  }),
  beforeDestroy() {
    this.filterVehicles('whatever')
  },
  methods: mapActions({
    filterVehicles: 'vehicle/filterVehicles',
  }),
}
</script>

<style module>
.form {
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  font-family: Codec Pro Bold;
  font-size: 40px;
  color: #012345;
}

.container {
  padding: 56px 64px;

  min-width: fit-content;
  min-height: 708px;

  background: #f3f4f7;
  border-radius: 48px;
}

.select,
.select::after {
  position: relative;
  padding-right: 18px;
  cursor: pointer;
  color: #4959ff;
  background: url('../assets/images/down-arrow.svg') 12px no-repeat;
  background-position: right center;
}

.select:hover {
  color: #333daf;
  transition: all 0.2s;
}

.buttonGroup {
  margin-left: auto;
  font-size: 20px;
  line-height: 140%;
  color: #4959ff;
  user-select: none;
}

.button {
  margin-left: 20px;
  border-radius: 16px;
  width: 48px;
  height: 48px;
}

.buttonGroup:hover {
  cursor: pointer;
}

.buttonGroup:hover > span {
  color: #333daf;
  text-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.buttonGroup:hover > .button {
  background: #333daf;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.buttonGroup:active > .button {
  box-shadow: none;
  transform: translate(1px, 1px);
  background: #4959ff;
}
.buttonGroup:active > .button > img {
  transform: none;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px 32px;
  justify-items: center;
}

.cards > a {
  display: flex;
}

@media (max-width: 991px) {
  .form {
    font-size: 24px;
  }
}

@media (max-width: 645px) {
  .container {
    padding: 26px 16px;
  }
  .form {
    margin-bottom: 26px;
  }

  .buttonGroup {
    font-size: 16px;
  }

  .button {
    margin-left: 12px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .cards {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 12px;
  }
}
</style>
