<template>
  <div>
    <v-row align="center" v-if="reverse">
      <v-col cols="7">
        <div :class="headerClass">{{title}}</div>
        <div class="mb-3">
          <div :class="textClass" v-for="(t, i) in text" :key="title+i">{{t}}</div>
        </div>
        <div :class="textClass" v-for="item in list" :key="item">
          <v-icon :class="iconClass">mdi-check-circle-outline</v-icon> {{item}}
        </div>
        <div class="my-5">
          <v-btn dark large outlined color="indigo" class="mr-3"
          v-for="btn in btns" :key="btn.url" @click="windowOpen(btn)">
            {{btn.text}}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-img :src="img" width="400"></v-img>
      </v-col>
    </v-row>

    <v-row align="center" v-else>
      <v-col cols="auto">
        <v-img :src="img" width="400"></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <div :class="headerClass">{{title}}</div>
        
        <div class="mb-3">
          <div :class="textClass" v-for="(t, i) in text" :key="title+i">{{t}}</div>
        </div>
        <div :class="textClass" v-for="item in list" :key="item">
          <v-icon :class="iconClass">mdi-check-circle-outline</v-icon> {{item}}
        </div>
        <div class="my-5">
          <v-btn dark large outlined color="indigo" class="mr-3"
          v-for="btn in btns" :key="btn.url" @click="windowOpen(btn)">
            {{btn.text}}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    reverse: Boolean,

    title: String,
    text: Array,
    list: Array,
    btns: Array,
    img: String,

    headerClass: String,
    textClass: String,
    iconClass: String
  },
  methods: {
    windowOpen(item) {
      window.open(item.url, 'blank')
    }
  }
}
</script>

<style scoped>
</style>