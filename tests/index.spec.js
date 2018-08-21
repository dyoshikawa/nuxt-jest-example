import { shallowMount } from "@vue/test-utils";
import NewTask from "@/components/NewTask.vue";
import BootStrapVue from "bootstrap-vue";
import Vue from "vue";
Vue.use(BootStrapVue);

describe("NewTodo.vue", () => {
  it("インプットタグをレンダリングする", () => {
    const wrapper = shallowMount(NewTask);

    expect(wrapper.find("div").exists()).toBe(true);
  });
});
