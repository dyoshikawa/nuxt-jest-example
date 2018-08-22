import {
  mount,
  createLocalVue
} from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import NewTask from "@/components/NewTask.vue";

describe("NewTask.vue", () => {
  let wrapper;
  let text;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);

    wrapper = mount(NewTask, {
      localVue: localVue
    });

    text = "example";
  });

  it("Emit data", () => {
    wrapper.setData({
      text: text
    });
    wrapper.find("button.btn").trigger("click");
    // console.log(wrapper.emitted("new-task-text"));
    expect(wrapper.emitted("new-task-text")[0][0]).toBe(text);
  })

  it("Emit input value", () => {
    wrapper.find("input").setValue(text);
    wrapper.find("button.btn").trigger("click");
    expect(wrapper.emitted("new-task-text")[0][0]).toBe(text);
  })
});
