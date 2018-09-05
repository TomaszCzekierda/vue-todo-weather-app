<template>
    <div class="weather-item-organism">
        <ListItemAtom>
            <Rain v-if="forecast==='rain'"/>
            <Sun v-if="forecast==='sun'"/>
            <Clouds v-if="forecast==='clouds'"/>
            <Storm v-if="forecast==='storm'"/>
            <div>{{date}}</div>
        </ListItemAtom>
    </div>
</template>
<script>
import ListItemAtom from "../atoms/ListItemAtom.vue";
import Sun from "../../assets/icons/sun-solid.svg";
import Storm from "../../assets/icons/bolt-solid.svg";
import Clouds from "../../assets/icons/cloud-solid.svg";
import Rain from "../../assets/icons/tint-solid.svg";
export default {
  name: "WeatherItemOrganism",
  props: {
    date: String,
    forecast: String
  },
  components: {
    ListItemAtom,
    Sun,
    Storm,
    Clouds,
    Rain
  }
};
</script>
<style scoped>
.weather-item-organism {
  margin-bottom: 10px;
}
.weather-item-organism > .list-item-atom > div {
  line-height: 40px;
  font-weight: bold;
}
.weather-item-organism > .list-item-atom > svg {
  float: right;
  width: 40px;
  height: 40px;
}
</style>