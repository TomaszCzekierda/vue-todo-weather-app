<template>
<div>
    <SectionAtom>
        <LoaderMolecule v-if="fetchStatus"/>
        <WeatherItemOrganism v-for="(day, index) in weather" :key="index" :date="day.date" :forecast="day.forecast"/>
    </SectionAtom>
</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import SectionAtom from "../atoms/SectionAtom.vue";
import LoaderMolecule from "../molecules/LoaderMolecule.vue";
import WeatherItemOrganism from "../organisms/WeatherItemOrganism.vue";
export default {
  name: "WeatherView",
  components: {
    SectionAtom,
    LoaderMolecule,
    WeatherItemOrganism
  },
  computed: {
    ...mapGetters("weatherStore", {
      weather: "getWeather",
      fetchStatus: "getFetchingStatus"
    })
  },
  created() {
    this.$store.dispatch("weatherStore/fetchWeather");
  }
};
</script>
<style scoped>
</style>