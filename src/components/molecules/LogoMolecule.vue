<template>
    <div class="logo-molecule">
        <span>TO</span>
        <Logo/>
        <span>DO</span>
    </div>
</template>
<script>
import Logo from "../../assets/icons/umbrella-solid.svg";
export default {
  name: "LogoMolecule",
  components: {
    Logo
  }
};
</script>
<style scoped>
div.logo-molecule > span {
  font-weight: bold;
  font-size: 26px;
  vertical-align: middle;
}
div.logo-molecule > svg {
  display: inline-block;
  height: 36px;
  width: 36px;
  vertical-align: bottom;
}
</style>