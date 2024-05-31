import {Component, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog, MatDialogClose} from "@angular/material/dialog";
import {SignInChangeComponent} from "../../auth/sign-in-change/sign-in-change.component";
import {SignUpChangeComponent} from "../../auth/sign-up-change/sign-up-change.component";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeService} from "../../../core/service/theme.service";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";

@Component({
  selector: 'app-navigate-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    MatDialogClose,
    NavMenuComponent
  ],
  templateUrl: './navigate-bar.component.html',
})
export class NavigateBarComponent {

  checked: boolean = false;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private dialog: MatDialog,
              public themeService: ThemeService,){
  }

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

  onSignIn(){
    const dialogRef = this.dialog.open(SignInChangeComponent, {
      width: '90vw',
      height: '80vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' ,  result);
    });

  }

  onSignUp(){
    const dialogRef = this.dialog.open(SignUpChangeComponent, {
      width: '90vw',
      height: '80vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' ,  result);
    });
  }

  menuTrigger(){
    this.trigger.closeMenu();
  }
  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

  protected readonly Menu =Menu;
}

const Menu = [
  {
    label:'Website',
    route: '/website'
  },
  {
    label:'Help',
    route: '/help'
  },
  {
    label:'About',
    route: '/about'
  },

]
