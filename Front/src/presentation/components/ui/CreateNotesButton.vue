<script lang="ts" setup>
import IconEdit from '../../../assets/images/note_alt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useModalStore } from '../../../core/application/stores/modalStore';
import CreateNotesDialog from './CreateNotesDialog.vue';

const modalStore = useModalStore();
const buttons = [
  { icon: IconEdit },
];
</script>

<template>
  <div class="fab-container">
    <button class="fab" :class="{ rotate: modalStore.isRotate }" @click="modalStore.toggleMenu()">+</button>
    <button v-for="(btn, index) in buttons" :key="index" class="fab child"
      :class="['translate-index-' + (index + 1), { visible: modalStore.openMenu }]" @click="modalStore.openModal()">
      <component :is="btn.icon" />
    </button>
  </div>
  <CreateNotesDialog />
</template>
<style scoped src="../../../assets/Styles/Components/CreateNotesButton.css"></style>