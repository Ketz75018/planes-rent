<template>
  <header :class="$style.header">
    <nuxt-link :class="$style.flexGroup" to="/"
      ><img :class="$style.logo" src="~/assets/images/logo.svg" alt="Logo"
    /></nuxt-link>
    <span :class="$style.hidden"> World's first affordable airsharing </span>
    <div :class="[$style.flexGroup, $style.nightModeGroup]">
      <img
        :class="$style.icon"
        src="~/assets/images/Moon.svg"
        alt="Night Mode"
      />
      <span :class="[$style.marginLeft, $style.hidden]">Night Mode</span>
    </div>
    <nuxt-link to="#"
      ><img
        :class="$style.icon"
        src="~/assets/images/Messages.svg"
        alt="messages"
    /></nuxt-link>
    <nuxt-link to="#"
      ><img
        :class="$style.icon"
        src="~/assets/images/Bell.svg"
        alt="notifications"
    /></nuxt-link>
    <!-- This data should be fetched from the server -->
    <div :class="[$style.flexGroup, $style.userGroup]">
      <span :class="$style.userName">Bessie Cooper</span>
      <img
        :class="[$style.marginLeft, $style.userImage]"
        src="~/assets/images/UserImg.jpg"
        alt="user-avatar"
      />
    </div>
  </header>
</template>

<script></script>

<style module>
.header {
  margin-bottom: 40px;
  width: 100%;
  height: 48px;

  display: grid;
  grid-template-columns:
    minmax(max-content, 0.2fr) auto minmax(max-content, 0.2fr)
    fit-content(40%) minmax(max-content, 0.1fr) fit-content(40%);
  column-gap: 2rem;
  align-items: center;
}

.header > a {
  line-height: 0;
  text-decoration: none;
}

.flexGroup {
  display: flex;
  align-items: center;
}

.flexGroup > img {
  flex-shrink: 0;
}

.marginLeft {
  margin-left: 16px;
}

.nightModeGroup,
.userGroup {
  cursor: pointer;
}

.userName {
  font-family: Codec Pro Bold;
  color: #012345;
  padding-right: 16px;
  white-space: nowrap;
}

.userImage {
  border-radius: 50%;
  min-height: 32px;
  min-width: 32px;
}

.icon,
.nightModeGroup,
.logo {
  user-select: none;
}

.icon:hover,
.nightModeGroup:hover > .icon {
  transform: scale(1.3, 1.3);
  transition: transform 0.3s;
  cursor: pointer;
}

.nightModeGroup > span {
  position: relative;
}
.nightModeGroup > span::after {
  border-radius: 1em;
  border-top: 0.1em solid #2f56b0;
  content: '';
  position: absolute;
  right: 100%;
  bottom: 0.14em;
  left: 0;
  transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
}
.nightModeGroup:hover > span::after {
  right: 0;
}

@media (max-width: 991px) {
  .hidden {
    display: none;
  }
  .flexGroup > img {
    flex-shrink: 1;
  }
  .header {
    grid-template-columns:
      auto minmax(max-content, 0.2fr)
      minmax(max-content, 0.1fr) minmax(max-content, 0.1fr) fit-content(40%);
    column-gap: 1rem;
  }
}

@media (max-width: 645px) {
  .userName {
    display: none;
  }
}

@media (max-width: 448px) {
  .header {
    margin-bottom: 8px;

    padding: 12px 16px;
    grid-template-columns:
      minmax(135px, auto) minmax(max-content, 0.2fr)
      minmax(max-content, 0.1fr) minmax(max-content, 0.1fr) fit-content(40%);
    column-gap: 0.5rem;
    min-width: fit-content;
  }

  .logo,
  .userImage {
    height: 32px;
  }

  .icon {
    height: 17px;
  }
}
</style>
