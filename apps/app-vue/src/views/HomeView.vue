<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section>
      <h1>App Vue</h1>
    </section>

    <section>
      <h2>Stencil Components</h2>
      <div class="component-row">
        <my-button />
      </div>
    </section>
  </main>
</template>

<style>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
section {
  margin-bottom: 1rem;
}

.component-row {
  background-color: #ddd;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
