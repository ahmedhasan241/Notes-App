<script setup>
const { supabase } = useSupabase();
const { user } = useAuth();

const notesInput = reactive({
  title: "",
  note: "",
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) return;

  await supabase.from("notes").insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user.value.id,
  });

  notesInput.title = "";
  notesInput.note = "";
};
</script>

<template>
  <NCard class="card">
    <input
      type="text"
      placeholder="My Notes Title"
      v-model="notesInput.title"
    />
    <textarea class="input" placeholder="my notes" v-model="notesInput.note" />
    <NButton @click="handleSubmit">Save Notes</NButton>
  </NCard>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.input,
input {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem;
}
</style>
