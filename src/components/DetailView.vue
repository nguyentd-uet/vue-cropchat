<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.picture.url" />
      </div>
      <div class="info">
        <span>{{ this.picture.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ this.picture.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          POST
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../data'
export default {
  data () {
    return {
      'pictures': data.pictures,
      picture: '',
      id: 0
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.picture = JSON.parse(localStorage.getItem('cats'))[this.id]
  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
