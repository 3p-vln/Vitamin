import { renderRecCard } from '../components/render-card.ts';

export default async function getPersonalPack(){
  await renderRecCard('.your-pack__cards', 'white');
}