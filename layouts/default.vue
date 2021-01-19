<template>
  <div class="app">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('nuxtServerInit')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'An error has occured',
      })
    }
  },
}
</script>

<style>
@font-face {
  font-family: 'Codec Pro Bold';
  src: local('Codec Pro Bold'),
    url('~assets/fonts/CodecPro-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Codec Pro News';
  src: local('Codec-Pro-News'),
    url('~assets/fonts/CodecPro-News.ttf') format('truetype');
}

*,
*::before,
*::after {
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
}

html {
  font-family: Codec Pro News;
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: 24px;
  letter-spacing: 0px;
  color: #677b8f;
  text-align: left;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  margin: 0;
  padding: 0;
}

body {
  padding: 48px 64px;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  outline: none;
}

select::-ms-expand {
  display: none;
}

button {
  font-family: Codec Pro Bold;
  color: white;
  white-space: nowrap;
  line-height: 14px;
  cursor: pointer;
  border: none;
  box-shadow: none;
  background: #4959ff;
  user-select: none;
}
button:hover {
  background: #333daf;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
button:active {
  padding: 0;
  box-shadow: none;
  transform: translate(1px, 1px);
  background: #4959ff;
}

button:active,
button:focus {
  outline: none;
}

button:disabled {
  opacity: 0.5;
}

a,
a:visited {
  color: #677b8f;
  text-decoration: none;
}

.nuxt-link-active {
  color: #4959ff !important;
}

.app {
  margin: 0 auto;
  max-width: 1852px;
}

@media (max-width: 645px) {
  body {
    padding: 32px;
  }
}

@media (max-width: 448px) {
  body {
    padding: 0 0 20px 0;
  }
}
</style>
