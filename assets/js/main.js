import { initHeaderMenu } from "./components/header.js";
import { initCarousels } from "./components/carouselConfig.js";
import { initScrollAnimation } from "./components/scrollAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
    initHeaderMenu();
    initCarousels();
    initScrollAnimation();
});