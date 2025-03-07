import { StatusBarStyle } from 'expo-status-bar';

class StatusBar {
  public style: StatusBarStyle = 'auto';
}

class Font {
  public size: number = 14;
  public family: string = 'Roboto_300Light';
}

class Colors {
  public main: string = '';

  public bg_primary: string = '';
  public bg_secondary: string = '';
  public bg_tertiary: string = '';

  public text_primary: string = '';
  public text_secondary: string = '';

  public border: string = '';
}

export class Palette {
  private static instance: Palette;
  public colors: Colors;
  public statusBar: StatusBar;
  public font: Font;

  private constructor() {
    this.statusBar = new StatusBar();
    this.colors = new Colors();
    this.font = new Font();
    
    this.darkMode();
  }

  public static getInstance(): Palette {
    if (!Palette.instance) {
      Palette.instance = new Palette();
    }
    return Palette.instance;
  }

  public darkMode(): void {
    this.colors.main = '#8346E9';

    this.colors.bg_primary = '#1D1D35';
    this.colors.bg_secondary = '#2A2B43';
    this.colors.bg_tertiary = '#32334B';

    this.colors.text_primary = '#FFFFFF';
    this.colors.text_secondary = '#AFAFAF';

    this.colors.border = '#AFAFAF';

    this.statusBar.style = 'light';
  }
}
