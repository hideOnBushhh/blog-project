<template>
<div id="Articles">
  <div v-if="search.length == 0">
    <ul>
      <li class="descriptionList" v-for="item in list" v-html="item.description">
      </li>
    </ul>
  </div>
  <div v-else-if="Number(search) == Number(search)">
    <li class="descriptionList" v-html="list[search].contentFile"></li>
  </div>
  <div v-else-if="search == 'me'">
    <Me/>
  </div>
</div>
</template>

<script>
import Me from "./Me"
export default {
  name: 'Articles',
  data() {
    return {
      list: dataArticle.list,
      search: search
    }
  },
  components: {
    Me
  }
}
</script>

</script>
