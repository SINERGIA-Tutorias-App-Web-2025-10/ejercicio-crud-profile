import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";


//PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

//PrimeFlex
import 'primeflex/primeflex.css';


// PrimeIcons
import "primeicons/primeicons.css";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import Checkbox from "primevue/checkbox";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Row from "primevue/row";
import Drawer from "primevue/drawer";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Toolbar from "primevue/toolbar";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanel from "primevue/tabpanel";


import Toast from "primevue/toast";


//importado de manera local de "router/index.js" creado y ubicado en src
import SelectButton from "primevue/selectbutton";
import Tabs from "primevue/tabs";
import DataView from "primevue/dataview";
import Panel from "primevue/panel";







//create app instance
const app=createApp(App)

//use Vue i18n
app.use(i18n)


// Use PrimeVue
app.use(PrimeVue, { theme: { preset: Aura }, ripple: true })
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService);


// Use PrimeVue Components
app.component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('pv-tabs', Tabs)
    .component('pv-tab-list', TabList)
    .component('pv-tab', Tab)
    .component('pv-tab-panel', TabPanel)
    .component('pv-data-view', DataView);

app.mount('#app')