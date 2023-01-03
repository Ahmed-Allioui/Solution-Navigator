<template>
  <main class="contact-page">
    <StandardPageComponent title="Kontakt">
      <div class="contact-container">
        <div class="text-container">
          <div><strong>André Kless:</strong></div>
          <br>
          <div>
            <ul>
              <li class="icon-container">
                <div>
                  <Cellphone class="icon" /> <a href="tel:+49 2241 865 695">+49 2241 865 695</a>
                </div>
              </li>
              <li class="icon-container">
                <div>
                  <Message class="icon" /> <a href="mailto:andre.kless@h-brs.de">andre.kless@h-brs.de</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-container">
          <div><strong>Ahmed Allioui:</strong></div>
          <br>
          <div>
            <ul>
              <li class="icon-container">
                <div>
                  <Cellphone class="icon" /> <a href="tel:+49 1789 045 629">+49 1789 045 629</a>
                </div>
              </li>
              <li class="icon-container">
                <div>
                  <Message class="icon" /> <a href="mailto:ahmed.allioui@smail.inf.h-brs.de">ahmed.allioui@smail.inf.h-brs.de</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StandardPageComponent>
  </main>
</template>

<script setup>
import StandardPageComponent from '@/components/atoms/StandardPageComponent.vue';
import { Cellphone, Message } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  
}

.text-container {
  text-align: start;
  font-size: calc(15px + 0.2vw);
  min-width: 400px;
}

.icon-container {
  display: flex;
  flex-direction: row;
}

.icon {
  width: 20px;
  vertical-align: middle;
}
</style>