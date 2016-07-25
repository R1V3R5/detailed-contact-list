import angular from 'angular';
import 'angular-ui-router';
import { config } from './config'
import { serverConstant } from './server.constant';
import { HomeController } from './controllers/home.controller';
import { LayoutController } from './controllers/layout.controller';
import { AddController } from './controllers/add.controller';
import { ContactService } from './services/contact.service';


angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('HomeController', HomeController)
  .controller('LayoutController', LayoutController)
  .controller('AddController', AddController)
  .service('ContactService', ContactService)
;  