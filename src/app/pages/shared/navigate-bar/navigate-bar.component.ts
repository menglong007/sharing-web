import {Component, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog, MatDialogClose} from "@angular/material/dialog";
import {SignInChangeComponent} from "../../auth/sign-in-change/sign-in-change.component";
import {SignUpChangeComponent} from "../../auth/sign-up-change/sign-up-change.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeService} from "../../../core/service/theme.service";
import {AuthService} from "../../../core/service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButton} from "@angular/material/button";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {NavMenuResComponent} from "./nav-menu-responsive/nav-menu-res.component";

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
    NavMenuComponent,
    NgClass,
    NgIf,
    MatButton,
    NavMenuComponent,
    NavMenuComponent,
    NavMenuComponent,
    NavMenuResComponent
  ],
  templateUrl: './navigate-bar.component.html',
})
export class NavigateBarComponent {

  checked: boolean = false;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private dialog: MatDialog,
              public themeService: ThemeService,
              public authService: AuthService,
              private snackBar:MatSnackBar){
  }

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

  onSignIn(){
    const dialogRef = this.dialog.open(SignInChangeComponent, {
      maxWidth: '90vw',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' ,  result);
    });

  }

  onSignUp(){
    const dialogRef = this.dialog.open(SignUpChangeComponent, {
      maxWidth: '90vw',
      maxHeight: '100vh',
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

  onSignOut(){
    const ref = this.snackBar.open('Are you sure you want to log out?','yes',{
      duration: 3000,
      verticalPosition:'top'
    })
    ref.onAction().subscribe(result => {
      this.authService.signOut();
    })
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
