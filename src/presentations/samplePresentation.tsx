import React from 'react';
import { Presentation } from '../types/presentation';
import { Card } from '../components/common';

export const samplePresentation: Presentation = {
  id: 'sample-presentation',
  title: 'Sample Presentation',
  description: 'A demonstration of the presentation system',
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
      title: 'Welcome to Dynamic Presentations',
      layout: 'centered',
      transition: { type: 'zoom' },
      content: (
        <>
          <h2 style={{ marginBottom: '2rem' }}>Build Beautiful Presentations with React</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>
            Press arrow keys to navigate, F for fullscreen, P to play/pause
          </p>
        </>
      ),
    },
    {
      id: 'slide-2',
      title: 'Features',
      transition: { type: 'slide' },
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <Card>
            <h3>🎨 Customizable Themes</h3>
            <p>Consistent color scheme and typography throughout your presentation</p>
          </Card>
          <Card>
            <h3>🎭 Smooth Transitions</h3>
            <p>Multiple transition effects: fade, slide, zoom</p>
          </Card>
          <Card>
            <h3>📱 Responsive Design</h3>
            <p>Works perfectly on all screen sizes</p>
          </Card>
          <Card>
            <h3>⌨️ Keyboard Navigation</h3>
            <p>Navigate with arrow keys, shortcuts for common actions</p>
          </Card>
        </div>
      ),
    },
    {
      id: 'slide-3',
      title: 'Code Example',
      transition: { type: 'fade' },
      content: (
        <>
          <p>Creating a new presentation is simple:</p>
          <pre style={{ fontSize: '0.9rem' }}>
            <code>{`const myPresentation: Presentation = {
  id: 'my-presentation',
  title: 'My Awesome Presentation',
  slides: [
    {
      id: 'intro',
      title: 'Introduction',
      content: <div>Your content here</div>
    }
  ]
};`}</code>
          </pre>
        </>
      ),
    },
    {
      id: 'slide-4',
      title: 'Layouts',
      layout: 'split',
      transition: { type: 'slide' },
      content: (
        <>
          <div>
            <h3>Multiple Layout Options</h3>
            <ul style={{ lineHeight: 2 }}>
              <li>Default layout</li>
              <li>Centered layout</li>
              <li>Split layout (like this one)</li>
              <li>Full-screen layout</li>
            </ul>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card variant="elevated" style={{ padding: '2rem', textAlign: 'center' }}>
              <h4>Split Layout</h4>
              <p>Perfect for comparisons or side-by-side content</p>
            </Card>
          </div>
        </>
      ),
    },
    {
      id: 'slide-5',
      title: 'Thank You!',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      content: (
        <>
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Thank You!</h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
            Ready to create your own presentations?
          </p>
        </>
      ),
    },
  ],
};