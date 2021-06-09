import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Models
import { ThemeSetting } from 'src/app/models/theme-setting.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeSettingService {

  settings: ThemeSetting = {
    url: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private document
    ) {
    this.loadSettingTheme();
   }

  // Metodo para guardar tema en el localStorage
  saveTheme() {
    localStorage.setItem('settingTheme', JSON.stringify(this.settings));
  }

  // Metodo para carga el tema guardado en el localStorage
  loadSettingTheme() {
    if ( localStorage.getItem('settingTheme')) {
      this.settings = JSON.parse(localStorage.getItem('settingTheme'));
      this.setTheme(this.settings.theme);
    } else {
      this.setTheme(this.settings.theme);
    }
  }

  // Metodo para aplicar el tema guarddo en el localStorage
  setTheme( theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.url = url;
    this.saveTheme();
  }

}

