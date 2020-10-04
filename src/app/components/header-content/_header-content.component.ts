import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ScreenSub } from '../../core/models/screensub.model';

@Component({
  selector: 'app-cpn-header',
  templateUrl: './_header-content.component.html',
})
export class HeaderContentComponent implements OnInit {
  url: string;
  subRoutes: ScreenSub;

  @Input('url')
  set name(url: string) {
    this.url = url;
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRoutesSubUrl(this.url).subscribe((data) => {
      (this.subRoutes = data), console.log(this.subRoutes);
    });
  }
}
