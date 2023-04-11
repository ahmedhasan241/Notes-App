import { Title } from '../.nuxt/components';
<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();

const notes = ref();

if (process.client) {
  notes.value = await supabase
    .from("notes")
    .select()
    .eq("user_id", user.value.id);
}

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesForm />
      <div class="card-container" v-if="notes.data">
        <NCard class="card" v-for="note in notes.data" :key="note.id">
          <h2>{{ note.title }}</h2>
          <p>{{ note.note }}</p>
        </NCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}

.card-container {
  margin-top: 1.5rem;
}

h3 {
  font-size: 3rem;
}

.card {
  padding: 1rem;
  margin-top: 1.5rem;
}

.card h2 {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
