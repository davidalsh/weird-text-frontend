<template>
  <div class="w-2/5">
    <div class="bg-white border border-gray-200 rounded-lg">
      <form
        method="post"
        @keydown.enter.prevent="submitForm"
        @submit.prevent="submitForm"
      >
        <div class="p-4">
          <textarea
            v-model="text"
            class="p-4 w-full bg-gray-100 rounded-lg"
            placeholder="Enter your text here"
          ></textarea>
        </div>

        <div class="flex justify-end p-4 border-t border-gray-100">
          <Button
            :text="handlerName"
            :background="buttonBackground"
            :borderColor="buttonBorderColor"
          />
        </div>
      </form>
      <div v-if="responseData" class="p-4 border-t border-gray-100">
        <span class="">Response data:</span>
        <p v-html="formattedResponseData" class="font-mono"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";

defineProps({
  handlerName: String,
  buttonBackground: String,
  buttonBorderColor: String,
});
const route = useRoute();
const text = ref("");
const responseData = ref("");
const formattedResponseData = computed(() => {
  return responseData.value.replace(/\n/g, "\\n");
});

async function submitForm() {
  try {
    const cleanedText = text.value.replace(/\\n/g, "\n");
    const response = await axios.post(`api/v1/${route.name}/`, {
      text: cleanedText,
    });
    responseData.value = response.data.text;
  } catch (error) {
    console.log("error", error);
  }
}
</script>
