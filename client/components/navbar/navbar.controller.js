'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
		{
    'title': 'Setting',
    'state': 'main'
  }		 
				 ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $mdSidenav) {
		this.$mdSidenav = $mdSidenav;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

   openSideNavPanel() {
        this.$mdSidenav('left').toggle();
		 console.log("hit 1");
    };

  }



angular.module('maerkApp')
  .controller('NavbarController', NavbarController);


