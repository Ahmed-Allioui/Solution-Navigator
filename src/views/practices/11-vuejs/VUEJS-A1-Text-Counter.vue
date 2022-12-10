<template>
    <div class="text-container">
    <label>Geben Sie einen Text ein:</label>
    <textarea @input="update" v-model="text"></textarea>
    <label>Anzahl der Buchstaben: <strong>{{letters}}</strong></label>
    <label>Anzahl der Leerzeichen: <strong>{{spaces}}</strong></label>
    <label>Anzahl der Worte: <strong>{{words}}</strong></label>
  </div>
</template>
  
<script>
export default {
    data() {
        return {
            text: '',
            letters: 0,
            spaces: 0,
            words: 0
        }
    },
    methods: {
        update() {
            let letters = 0, spaces = 0, words = 0, wordContainsLetter = 0;
            for(let c of this.text) {
                if(this.isLetter(c)) {
                    letters++;
                    wordContainsLetter = 1;
                } else if (c == ' ') {
                    spaces++;
                    words += wordContainsLetter;
                    wordContainsLetter = 0;
                }
            }
            words += wordContainsLetter;
            this.letters = letters;
            this.spaces = spaces;
            this.words = words;
        },
        isLetter(character) {
            return character.match(/[a-z]/i)
        }
    }
}
</script>
    
<style lang="scss" scoped>
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    height: 200px;
  }
}
</style>