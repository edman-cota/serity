/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import DetailTab from "./DetailTab";
import Activities from "../Activities/Activities";

export const allIngredients = [
  { icon: "🍅", label: "Detail", component: <DetailTab /> },
  { icon: "🥬", label: "Lettuce", component: <DetailTab /> },
  { icon: "🧀", label: "Activities", component: <Activities /> },
];
const [detail, lettuce, activities] = allIngredients;

export const initialTabs = [detail, lettuce, activities];

// export const initialTabs = [DetailTab, Activity, Activity];
