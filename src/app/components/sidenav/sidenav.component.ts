import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() isExpanded: boolean = true;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "home", name: "Home", icon: "dashboard" },
    { link: "transactions", name: "Transactions", icon: "account_balance" },
  ];

}
