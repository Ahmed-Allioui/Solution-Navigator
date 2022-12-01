<template>
  <h1>Responsiv mit Flexbox Desktop-First</h1>
  <div v-if="www" class="main-container">
    <div class="header">
      <div class="titel-container">WWW-Navigator</div>
      <div class="topic-container">
        <button
          v-bind:class="{
            light: isTopicClicked(topic),
            primary: !isTopicClicked(topic),
          }"
          @click="setTopic(topic)"
          v-for="(topic, index) in Object.keys(www)"
          :key="index"
        >
          {{ topic }}
        </button>
      </div>
    </div>
    <div class="sidebar container">
      <button
        v-bind:class="{
          light: isSubtopicClicked(subtopic),
          primary: !isSubtopicClicked(subtopic),
        }"
        @click="setSubtopic(subtopic)"
        v-for="(subtopic, index) in Object.keys(www[topic])"
        :key="index"
      >
        {{ subtopic }}
      </button>
    </div>
    <div class="body container">
      <div>{{ www[topic][subtopic].content }}</div>
    </div>
    <div class="footer container">
      <div>sources</div>
      <ul>
        <li
          v-for="(reference, index) in www[topic][subtopic].references"
          :key="index"
        >
          <a v-bind:href="reference">Source [{{ index + 1 }}]</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      www: null,
      topic: "",
      subtopic: "",
    };
  },
  mounted() {
    (async () => {
      fetch("/ressource/aj/www.json")
        .then((resp) => resp.json())
        .then((json) => {
          this.www = json;
          this.topic = Object.keys(this.www)[0];
          this.subtopic = Object.keys(this.www[this.topic])[0];
        });
    })();
  },
  methods: {
    setTopic(topic) {
      this.topic = topic;
      this.subtopic = Object.keys(this.www[topic])[0];
    },
    setSubtopic(subtopic) {
      this.subtopic = subtopic;
    },
    isTopicClicked(topic) {
      return topic == this.topic;
    },
    isSubtopicClicked(subtopic) {
      return subtopic == this.subtopic;
    },
  },
};
</script>

<style lang="scss" scoped>
$ipad-width: "1000px"; // these values are only approximation
$phone-width: "700px";
.main-container {
  //min-height: 150vh;
  display: grid;
  gap: 0.5vw;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "sidebar"
    "body"
    "footer";
  @media screen and (min-width: $phone-width) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 4fr auto;
    grid-template-areas:
      "header header"
      "sidebar body"
      "footer footer";
  }

  @media screen and (min-width: $ipad-width) {
    grid-template-columns: 3fr 10fr 3fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header header header"
      "sidebar body footer";
  }
  .header {
    grid-area: header;
    background-color: rgb(204, 215, 236);
    padding: 5px;

    .titel-container {
      text-align: center;
      font-size: xx-large;
      font-weight: bold;
    }

    .topic-container {
      display: flex;
      justify-content: center;
      column-gap: 0.5vw;

      button {
        padding-left: 2vw;
        padding-right: 2vw;
      }
    }
  }
  .body {
    grid-area: body;
    background-color: rgb(177, 196, 233);
  }
  .sidebar {
    grid-area: sidebar;
    background-color: rgb(191, 206, 235);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media screen and (min-width: $phone-width) {
      flex-direction: column;
      justify-content: start;
      button {
        width: 100%;
      }
    }
  }
  .footer {
    grid-area: footer;
    background-color: rgb(191, 206, 235);
  }
}

.container {
  padding: calc(10px + 1vw);
  height: 100%;
}
</style>