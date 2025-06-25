export interface SlideTransition {
  type: 'fade' | 'slide' | 'zoom' | 'none';
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export interface Slide {
  id: string;
  title?: string;
  content: React.ReactNode;
  transition?: SlideTransition;
  background?: string;
  layout?: 'default' | 'centered' | 'split' | 'full';
  notes?: string;
}

export interface Presentation {
  id: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  slides: Slide[];
  theme?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  settings?: {
    showProgress?: boolean;
    showSlideNumbers?: boolean;
    loop?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    availableThemes?: ('light' | 'dark')[];
    defaultTheme?: 'light' | 'dark';
  };
}