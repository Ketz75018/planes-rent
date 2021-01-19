<template>
  <div>
    <p :class="$style.description">{{ vehicle.term_text }}</p>
    <h2 :class="$style.title">Additional conditions:</h2>
    <ul :class="$style.list">
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    vehicle: Object,
  },
}
</script>

<style module>
.title {
  margin: 16px 0;
  font-family: Codec Pro Bold;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
}

.list {
  list-style: square outside none;
  margin: 0 0 0 11px;
  padding: 0 0 33px 0;
}

.description,
.list > li {
  font-size: 14px;
}

.list > li {
  display: list-item;
  margin-bottom: 16px;
  padding-left: 20px;
}

::marker {
  color: #f84ab3;
}

@media (max-width: 448px) {
  .title {
    margin: 16px 0;
    font-size: 16px;
  }
  .list {
    padding-bottom: 0;
  }
  .list > li {
    margin-bottom: 8px;
  }
}
</style>
