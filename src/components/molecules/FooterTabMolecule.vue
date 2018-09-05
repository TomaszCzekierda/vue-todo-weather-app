<template>
    <router-link class="footer-tab-molecule" v-bind:class="{selected: selected}" v-bind:to="to">
        <BadgeAtom v-if="alerts" v-bind:label="alerts" />
        <ToDoIcon v-if="type==='todo'"/>
        <WeatherIcon v-if="type==='weather'"/>
        <span>{{label}}</span>
    </router-link>
</template>
<script>
import ToDoIcon from "../../assets/icons/th-list-solid.svg";
import WeatherIcon from "../../assets/icons/sun-solid.svg";
import BadgeAtom from "../atoms/BadgeAtom.vue";

export default {
  name: "FooterTabMolecule",
  props: {
    label: String,
    type: String,
    alerts: Number,
    to: String,
    selected: Boolean
  },
  components: {
    ToDoIcon,
    WeatherIcon,
    BadgeAtom
  }
};
</script>
<style scoped>
.footer-tab-molecule {
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: white;
}

.footer-tab-molecule.selected {
  background: gray;
}

.footer-tab-molecule > span:not(.badge-atom) {
  color: white;
  font-weight: 900;
  font-size: 12px;
}

.footer-tab-molecule > span.badge-atom {
  position: absolute;
  right: 50%;
  margin-right: -40px;
}

.footer-tab-molecule > svg {
  color: white;
  display: block;
  height: 24px;
  width: 24px;
  margin: 0px auto;
  padding-bottom: 10px;
}
</style>