import {
  mount,
  createLocalVue
} from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import NewTask from "@/components/NewTask.vue";

describe("NewTask.vue", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);

    wrapper = mount(NewTask, {
      localVue: localVue
    });
  });

  it("Emit", () => {
    const text = "example";
    wrapper.setData({
      text: text
    });
    wrapper.find("button.btn").trigger("click");
    console.log(wrapper.emitted("new-task-text"));
    expect(wrapper.emitted("new-task-text")[0][0]).toBe(text);
  })
});
