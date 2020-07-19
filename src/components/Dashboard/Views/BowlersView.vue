<template>
  <div>
    <div class="bowlers">
      <h1 class="title">Tops 10 Number of Over</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
%text {
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  color: white;
}
.title {
  @extend %text;
  padding: 0 9px;
  font-size: 43px;
  margin: 0;
  font-weight: 700;
  background: linear-gradient(135deg, #fff 10%, #e86c9a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 27px;
  }
}
.bowlers {
  display: block;
  width: 100%;
  height: 381px;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 21px;
  border-radius: 5px;
  position: relative;
  z-index: 2;
}
</style>
