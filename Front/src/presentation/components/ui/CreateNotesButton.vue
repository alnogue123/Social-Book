<script lang="ts" setup>
import { ref } from 'vue';
import IconEdit from '../../../assets/images/note_alt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { Dialog, Button } from 'primevue';

const openMenu = ref<boolean>(false);
const isRotate = ref<boolean>(false);
const visible = ref<boolean>(false);

function toggleMenu() {
  openMenu.value = !openMenu.value;
  isRotate.value = !isRotate.value;
}

const buttons = [
  { icon: IconEdit },
];

function styleChild(index: number) {
  const offset = (index + 1) * 70;
  return {
    transform: openMenu.value
      ? `translateY(-${offset}px)`
      : 'translateY(0)',
    transitionDelay: `${index * 0.05}s`,
  };
}

function openModal() {
  visible.value = true;
}

function closeModal() {
  const userResponse = confirm('Are you sure you want to stop creating the note?');
  if (userResponse) {
    visible.value = false;
  }
}

</script>

<template>
  <div class="fab-container">
    <button class="fab" :class="{ rotate: isRotate }" @click="toggleMenu">+</button>
    <button v-for="(btn, index) in buttons" :key="index" class="fab child" :class="{ visible: openMenu }"
      :style="styleChild(index)" @click="openModal()">
      <component :is="btn.icon" />
    </button>
  </div>

  <Dialog class="dialog" v-model:visible="visible" modal header="Create Note" :style="{ width: '110rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <template #header class="headerModal">
      <div class="custom-header">
        <h2>Create Note</h2>
      </div>
    </template>
    <div class="GeneralContainer">
      <div class="titleInputContainer">
        <QuillEditor theme="snow" class="titleEditor" style="color: black; height: 3rem;" :toolbar="[
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }], 
          [{ size: ['small', false, 'large', 'huge'] }], 
          ['bold', 'italic', 'underline', 'strike'], 
          [{ color: [] }, { background: [] }], 
          [{ script: 'sub' }, { script: 'super' }], 
          [{ list: 'ordered' }, { list: 'bullet' }], 
          [{ indent: '-1' }, { indent: '+1' }],
          [{ align: [] }], 
          ['blockquote', 'code-block'], 
          ['link', 'image', 'video'], 
          ['clean']
        ]" />
      </div>
    </div>
    <template #footer>
      <Button label="Guardar" icon="pi pi-check" />
      <Button label="Cancelar" icon="pi pi-times" class="p-button-secondary" @click="closeModal()" />
    </template>
  </Dialog>
</template>
<style scoped src="../../../assets/Styles/Components/CreateNotesButton.css"></style>