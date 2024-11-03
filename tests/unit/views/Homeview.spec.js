import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  test("matches snapshot", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});