# Theme Implementation Guide

## Current Theme System

We have a dual-theme system (light/dark) that works as follows:

### 1. Theme Context
- `currentTheme` state in `PresentationContext`
- Toggle with 'T' key or theme button
- Applied via `ThemeWrapper` component with `light-theme` or `dark-theme` class

### 2. CSS Theme Rules

#### Light Theme Conversions:
- Dark backgrounds → Light backgrounds
  - `bg-slate-900` → `#f8fafc` (very light gray)
  - `bg-gray-50` → `#f9fafb` (near white)
  - `bg-gray-900` → `#f9fafb`
  
- Dark text → Dark text  
  - `text-white` → `#111827` (near black)
  - `text-gray-300` → `#475569` (medium gray)
  
#### Dark Theme Conversions:
- Light backgrounds → Dark backgrounds
  - `bg-gray-50` → `#0f172a` (very dark)
  - `bg-white` → `#1e293b` (dark slate)
  
- Light text → Light text
  - `text-gray-800` → `#e2e8f0` (light gray)
  - `text-gray-900` → `#f1f5f9` (very light)

### 3. Corporate Color Palette
- **Primary**: Blue (#0066CC)
- **Accent**: Orange (#FF6B35) - use sparingly
- **Success**: Green (#00A86B)
- **Error**: Red (#DC3545)
- **Neutral**: Gray (#6C757D)

### 4. Best Practices for Slides

#### DO:
- Use semantic color classes (bg-slate-900, text-white)
- Let CSS handle theme switching automatically
- Use consistent backgrounds across slides
- Test both themes before finalizing

#### DON'T:
- Use gradient backgrounds (they don't theme well)
- Mix light and dark backgrounds in same presentation
- Use inline styles for colors
- Hardcode specific hex colors

### 5. Common Patterns

#### Full-screen dark slide (themes automatically):
```tsx
<div className="min-h-screen bg-slate-900 text-white p-8">
```

#### Full-screen light slide (themes automatically):
```tsx
<div className="min-h-screen bg-gray-50">
```

#### Cards that work in both themes:
```tsx
<div className="bg-white rounded-xl p-6 border border-gray-200">
```

### 6. Testing Themes
1. Press 'T' to toggle between themes
2. Check text contrast on all backgrounds
3. Ensure colored elements (orange, blue) remain visible
4. Verify borders and shadows are visible

## Current Status
- All presentations support theme switching
- MDM slides: ✅ Fully themed
- Process Framework: ✅ Fully themed  
- Metering Update: ✅ Fixed to support themes

The theme system ensures presentations look professional in both corporate environments (light theme) and modern displays (dark theme).