<template>
  <div id="app">
    <HeaderAtom>
      <LogoMolecule />
    </HeaderAtom>
    <BodyAtom>
      <router-view/>
    </BodyAtom>
    <FooterAtom>
      <FooterTabMolecule label="TODO" type="todo" :alerts=notFinishedTodos v-bind:selected="routeName==='todo'" to="/"/>
      <FooterTabMolecule label="WEATHER" type="weather" v-bind:selected="routeName==='weather'" to="/weather"/>
    </FooterAtom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderAtom from "./components/atoms/HeaderAtom.vue";
import BodyAtom from "./components/atoms/BodyAtom.vue";
import FooterAtom from "./components/atoms/FooterAtom.vue";
import LogoMolecule from "./components/molecules/LogoMolecule.vue";
import FooterTabMolecule from "./components/molecules/FooterTabMolecule.vue";

export default {
  name: "app",
  data() {
    return {
      routeName: this.$route.name
    };
  },
  watch: {
    $route(to, from) {
      this.routeName = to.name;
    }
  },
  computed: {
    ...mapGetters("todoStore", {
      notFinishedTodos: "notFinishedTodos"
    })
  },
  components: {
    HeaderAtom,
    BodyAtom,
    FooterAtom,
    LogoMolecule,
    FooterTabMolecule
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
h1 {
  margin: 0;
}

html,
body,
body > div {
  height: 100%;
  margin: 0;
}
</style>
