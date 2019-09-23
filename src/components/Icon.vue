<template>
  <div>
    <!-- Created using Krita: http://krita.org -->
    <svg xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:krita="http://krita.org/namespaces/svg/krita"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        viewBox="0 0 144 144">
    <defs/>
    <g id="group0" transform="matrix(1.0993636372 0 0 1.1540662477 11.602054576 7.1749185984)" fill="none">
    <path id="shape0" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0C0.108844 73.5782 0.163265 110.748 0.163265 111.51"/>
    <path id="shape1" transform="translate(0.25959183673, 6.5306122449)" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0L96.3557 0"/>
    <path id="shape2" transform="translate(85.224489796, 7.0204081633)" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0L0 10.8252"/>
    <path id="shape0" transform="matrix(0.99999998406 0 0 0.99999998276 30.239866327 6.9792746111)" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0L0 10.8252"/>
    <rect id="shape3" transform="translate(11.848163265, 18.617142857)" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" width="96.72" height="75.84"/>
    <path id="shape4" transform="translate(28.563382638, 26.161193545)" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" d="M64.8275 0.0543926L64.8275 7.26334C51.569 19.4842 38.3105 31.7051 25.052 43.926L30.9854 49.4872L26.81 52.9887L20.6569 46.3976L9.66919 56.0782L8.35067 61.4334L0 60.8155L0 52.3708L5.27411 52.3708L16.4816 42.8961L10.1087 37.129L14.7235 33.2699L20.2754 38.1044L56.6966 0C58.8703 0.322475 61.5806 0.340605 64.8275 0.0543926Z"/>
    </g>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Icon',
  props: {
      loader: Boolean,
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
svg {
  max-height: 240px;
  path {
    fill-opacity: 0;
    stroke: #000;
    stroke-width: 3;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: draw 4s linear 0s infinite alternate;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
