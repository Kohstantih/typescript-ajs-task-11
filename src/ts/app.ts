import Cart from "./Cart";
import Movie from "./Movie";
import Smartphone from "./Smartphone";

const cart = new Cart();
const smartphone = new Smartphone(11, 'Samsung Galaxy Fold5', 200000, true, 1, 'SUMSUNG');

cart.add(new Movie(1, 'Мстители',1000, false, 1,  2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.'));
cart.add(new Movie(2, 'Король Ричард ', 4000, false, 1, 2021, 'США', 'Venus. Serena. Way to the top', ['биография', 'спорт', 'драма'], '144 мин.'));
cart.add(new Movie(3, 'Омерзительная восьмерка', 5000, false, 1, 2015, 'США', 'Don\'t come here without a good reason.', ['вестерн', 'криминал', 'триллер', 'драма', 'детектив'], '168 мин.'));

cart.add(smartphone);
cart.add(smartphone);

const total = cart.totalСost();
const totalDiscount = cart.totalСostDiscount(1);

console.log(total, totalDiscount);

cart.removeItem(1);