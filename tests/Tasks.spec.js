import {
  mount,
  createLocalVue
} from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Tasks from "@/components/Tasks.vue";

describe("Tasks.vue", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    const tasks = [
      "foo", "baz", "bar"
    ];

    wrapper = mount(Tasks, {
      localVue: localVue,
      propsData: {
        tasks: tasks
      }
    });
  });

  it("Emit data", () => {
    expect(wrapper.find("div.card-body").exists()).toBe(true);
  })

  // it("Emit input value", () => {
  //   wrapper.find("input").setValue(text);
  //   wrapper.find("button.btn").trigger("click");
  //   expect(wrapper.emitted("new-task-text")[0][0]).toBe(text);
  // })
});
