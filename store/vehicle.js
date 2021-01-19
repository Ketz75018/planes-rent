import request from '@/api/request'
import extractTypes from '@/utils/extractTypes'

export const state = () => ({
  vehicles: [],
  vehicle: {},
  filteredVehicles: [],
})

export const getters = {
  getVehicleById: (state) => (id) =>
    state.vehicles.find((vehicle) => vehicle.id === id),
  filterVehiclesByType: (state) => (type) =>
    state.vehicles.filter((vehicle) => vehicle.type === type),
}

export const mutations = {
  SET_VEHICLES(state, vehicles) {
    state.vehicles = vehicles
  },
  SET_VEHICLE(state, vehicle) {
    state.vehicle = vehicle
  },
  SET_VEHICLE_TYPES(state, types) {
    state.vehicleTypes = types
  },
  SET_FILTERED_VEHICLES(state, filteredVehicles) {
    state.filteredVehicles = filteredVehicles
  },
}
export const actions = {
  async fetchVehicles({ commit }) {
    const response = await request()
    commit('SET_VEHICLES', response)
    commit('SET_VEHICLE_TYPES', extractTypes(response))
  },
  async fetchVehicle({ commit, getters }, id) {
    const vehicle = getters.getVehicleById(id)
    if (vehicle) {
      commit('SET_VEHICLE', vehicle)
    } else {
      const response = await request()
      const filteredVehicle = response.find((veh) => veh.id === id)
      if (!filteredVehicle) {
        throw Error
      }
      commit('SET_VEHICLE', filteredVehicle)
    }
  },
  filterVehicles({ commit, getters }, type) {
    if (type === 'whatever') {
      commit('SET_FILTERED_VEHICLES', [])
    }
    const filteredVehicles = getters.filterVehiclesByType(type)
    commit('SET_FILTERED_VEHICLES', filteredVehicles)
  },
}
