import Vue from 'vue'
import {
    Button, 
    Container,
    Header,
    Main,
    Footer,
    Carousel,
    CarouselItem,
    Row,
    Col,
    Drawer,
    Dialog,
    Message,
} from 'element-ui'

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Drawer);
Vue.use(Dialog);
Vue.prototype.$message = Message;

