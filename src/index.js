import "regenerator-runtime";
import $ from "jquery";
import './scss/app.scss';
import 'bootstrap';
import 'owl.carousel';
import './components/navbar-item.js';
import './components/footer-item.js';
import './components/modal-item.js';
import main from './script/main.js';

$('.upcoming').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

main();