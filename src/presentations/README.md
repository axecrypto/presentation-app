# Creating New Presentations

To create a new presentation, follow this structure:

```typescript
import React from 'react';
import { Presentation } from '../types/presentation';

export const myPresentation: Presentation = {
  id: 'unique-id',
  title: 'Your Presentation Title',
  description: 'Optional description',
  author: 'Your Name',
  date: new Date().toISOString(),
  settings: {
    showProgress: true,
    showSlideNumbers: true,
    loop: false,
    autoPlay: false,
    autoPlayInterval: 5000,
  },
  slides: [
    {
      id: 'slide-1',
      title: 'Slide Title',
      layout: 'default', // or 'centered', 'split', 'full'
      transition: { type: 'fade' }, // or 'slide', 'zoom', 'none'
      content: (
        <div>
          Your slide content here
        </div>
      ),
    },
  ],
};
```

## Slide Layouts

- **default**: Standard layout with title at top
- **centered**: Content centered vertically and horizontally
- **split**: Two-column layout
- **full**: Full-screen content without padding

## Transition Types

- **fade**: Fade in/out
- **slide**: Slide from right to left
- **zoom**: Zoom in effect
- **none**: No transition

## Using Components

Import and use the common components for consistent styling:

```typescript
import { Card, Button, Container } from '../components/common';
```