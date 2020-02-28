import "./helpers/postDate";
import scrollSmooth from "./helpers/smooth-scroll.js";
// import example from './modules/example.js';

import mainForm from "./modules/main-form.js";
import menu from "./modules/menu.js";
import reviews from "./modules/reviews.js";
import people from "./modules/people.js";
import clients from "./modules/clients.js";
import footer from "./modules/footer.js";
import stat from "./modules/stat.js";
import wPopup from "./modules/wPopup.js";

function main() {
  scrollSmooth();
  menu();
 	reviews();
	people();
	clients();
	mainForm();
  footer();
  stat();
  wPopup();
}

main();
