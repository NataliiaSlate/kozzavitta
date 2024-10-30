import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'ngt-header',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule, AvatarGroupModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  onClick(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null): void {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
