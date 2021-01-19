<template>
  <div>
    <p>{{ vehicle.team_text }}</p>
    <h2 :class="$style.title">Qualified specialists</h2>
    <div :class="$style.teamGroup">
      <div :class="$style.teamGroupMember">
        <img :class="$style.teamMemberImg" src="~/assets/team/McKinney.png" />
        <div :class="$style.teamMemberInfo">
          <h3>Marvin McKinney</h3>
          <p>Pilot assistant</p>
        </div>
      </div>
      <div :class="$style.teamGroupMember">
        <img :class="$style.teamMemberImg" src="~/assets/team/Nguyen.png" />
        <div :class="$style.teamMemberInfo">
          <h3>Savannah Nguyen</h3>
          <p>Mechanic</p>
        </div>
      </div>
      <div :class="$style.teamGroupMember">
        <img :class="$style.teamMemberImg" src="~/assets/team/Courtney.png" />
        <div :class="$style.teamMemberInfo">
          <h3>Courtney Henry</h3>
          <p>Stewardess</p>
        </div>
      </div>
    </div>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
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
  margin: 32px 0 16px 0;
  font-family: Codec Pro Bold;
  font-size: 24px;
  line-height: 21px;
  color: #012345;
}
p {
  font-size: 14px;
}
.teamGroup {
  margin: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.teamMemberImg {
  flex-shrink: 0;
  margin-right: 25px;
  min-height: 96px;
  border-radius: 16px;
}
.teamMemberInfo {
  margin-top: 16px;
}
.teamMemberInfo > h3 {
  margin: 16px 0 0 0;

  font-family: Codec Pro Bold;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
}
.teamMemberInfo > p {
  margin: 8px 0 0 0;
  font-size: 12px;
  line-height: 148%;
}

@media (max-width: 645px) {
  .teamGroup {
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
  }
  .teamGroupMember {
    display: flex;
    margin-bottom: 12px;
  }
}

@media (max-width: 448px) {
  .title {
    margin: 20px 0;
    font-size: 20px;
  }
  .teamGroup {
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
  }
  .teamGroupMember {
    display: flex;
    margin-bottom: 12px;
  }
  .teamMemberInfo {
    margin-top: 0;
  }
}
</style>
