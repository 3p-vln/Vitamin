import { initHeader } from '../components/header';
import { recommendationsProductsSlider } from '../home/recommendations-products-home-slider.ts';
import { renderCards } from '../home/render-cards-recommendations.ts';
import { feedbackSlider } from '../components/feedback-slider.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import {stop} from '../components/stopPreload.ts';


document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  recommendationsProductsSlider()
  await renderCards()
  feedbackSlider();
  stop();
});

removeSkeletons();
