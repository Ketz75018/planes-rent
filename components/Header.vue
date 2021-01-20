<template>
  <header :class="$style.header">
    <nuxt-link :class="[$style.flexGroup, $style.a]" to="/"
      ><img :class="$style.logo" src="~/assets/images/logo.svg" alt="Logo"
    /></nuxt-link>
    <div :class="[$style.hidden, $style.description, $style.b]">
      World's first affordable airsharing
    </div>
    <div :class="[$style.flexGroup, $style.nightModeGroup, $style.c]">
      <img
        :class="$style.icon"
        src="~/assets/images/Moon.svg"
        alt="Night Mode"
      />
      <span :class="[$style.marginLeft, $style.hidden]">Night Mode</span>
    </div>
    <div :class="$style.d">
      <img
        :class="$style.icon"
        src="~/assets/images/Messages.svg"
        alt="messages"
      />
    </div>
    <div to="#" :class="$style.e">
      <img
        :class="$style.icon"
        src="~/assets/images/Bell.svg"
        alt="notifications"
      />
    </div>
    <!-- This data should be fetched from the server -->
    <div :class="[$style.flexGroup, $style.userGroup, $style.f]">
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
  grid-template-areas: "a b c d e f";
  grid-template-columns:
    minmax(max-content, 0.2fr) minmax(max-content, 1fr) minmax(
      max-content,
      0.2fr
    )
    minmax(max-content, min-content) minmax(max-content, 0.1fr)
    minmax(max-content, min-content);
  column-gap: 2rem;
}

/* area-templates for IE 11 grid-support */

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}
.e {
  grid-area: e;
}
.f {
  grid-area: f;
}

.d,
.e,
.b,
.a {
  line-height: 0;
  align-self: center;
}

/* area-templates for IE 11 grid-support */

.flexGroup {
  display: flex;
  align-items: center;
  align-self: center; /* IE 11 grid-support */
}

.description {
  align-self: center; /* IE 11 grid-support */
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
  display: block;
}
.nightModeGroup > span::after {
  border-radius: 1em;
  border-top: 0.1em solid #677b8f;
  content: "";
  position: absolute;
  right: 100%;
  bottom: 0;
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
      minmax(max-content, 1fr) minmax(max-content, 0.2fr)
      minmax(max-content, 0.1fr) minmax(max-content, 0.1fr) minmax(max-content, min-content);
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
      minmax(135px, 1fr) minmax(max-content, 0.2fr)
      minmax(max-content, 0.1fr) minmax(max-content, 0.1fr) minmax(max-content, min-content);
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
