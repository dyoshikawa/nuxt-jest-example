import { shallowMount } from "@vue/test-utils";
import NewTodo from "@/components/NewTodo.vue";

describe("NewTodo.vue", () => {
  it("インプットタグをレンダリングする", () => {
    const wrapper = shallowMount(NewTodo);

    expect(wrapper.find("input.new").exists()).toBe(true);
  });
});
