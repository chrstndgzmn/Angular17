import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  //true = dark
  public darkModeSignal = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'false')
  );

  public constructor() {
    effect(() => {
      window.localStorage.setItem(
        'darkModeSignal',
        JSON.stringify(this.darkModeSignal())
      );
    });
  }

  public updateDarkMode() {
    this.darkModeSignal.update(value => !value);
  }
}
