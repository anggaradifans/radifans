# Animated Pixel Person Component

## Overview
This component implements a sprite-based animated pixel art character inspired by [hamardikan.dev](https://port.hamardikan.com/dev/). The character features:
- **Idle Animation**: Continuously cycles through standing poses
- **Interactive Animation**: Click to trigger a waving animation
- **Smooth Transitions**: Hover effects for better user experience

## Implementation Details

### Sprite Sheet
- **Location**: `/public/sprite-sheet.png`
- **Dimensions**: 1536 x 512 pixels (6 columns × 2 rows)
- **Frame Size**: 256 × 256 pixels per frame
- **Total Frames**: 12 frames

### Frame Layout
```
Row 1 (Y=0):     [0][1][2][3][4][5]  - Standing/Idle poses
Row 2 (Y=256):   [6][7][8][9][10][11] - Sitting & Waving animations
```

### Animation States

#### Idle Animation
- **Frames Used**: 0, 1, 2, 3 (top row)
- **Duration**: 200ms per frame
- **Loop**: Continuous

#### Waving Animation
- **Frames Used**: 9, 10, 11 (bottom row, last 3 frames)
- **Duration**: 200ms per frame
- **Trigger**: Click on character
- **Behavior**: Plays once, then returns to idle

## Technical Implementation

### CSS Technique
The animation uses the **CSS background-position** technique:
1. The entire sprite sheet is set as a background image
2. Only a 256×256px viewport is visible
3. JavaScript updates `background-position` to show different frames
4. `image-rendering: pixelated` keeps the pixel art crisp

### Key Features
- ✅ TypeScript support with proper typing
- ✅ React hooks for state management
- ✅ Automatic cleanup of intervals
- ✅ Smooth hover effects
- ✅ Click interaction feedback
- ✅ Responsive and performant

## Usage

### Basic Usage
```tsx
import AnimatedPixelPerson from '@/app/components/AnimatedPixelPerson'

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AnimatedPixelPerson />
    </div>
  )
}
```

### Customization Options

You can customize the component by modifying these constants in `AnimatedPixelPerson.tsx`:

```typescript
// Frame configuration
const FRAME_WIDTH = 256        // Width of each frame
const FRAME_HEIGHT = 256       // Height of each frame
const SPRITE_COLS = 6          // Number of columns in sprite sheet

// Animation frames
const IDLE_FRAMES = [0, 1, 2, 3]      // Which frames to use for idle
const WAVING_FRAMES = [9, 10, 11]     // Which frames to use for waving
const FRAME_DURATION = 200            // Milliseconds per frame
```

### Styling Customization

The component uses Tailwind CSS classes. You can modify:
- **Size**: Change `width` and `height` in the style prop
- **Hover Effect**: Modify `scale-105` class
- **Click Prompt**: Customize the "Click me!" text and styling

## Example Integrations

### In a Hero Section
```tsx
<section className="hero">
  <div className="container mx-auto flex items-center gap-8">
    <div className="flex-1">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a developer who loves pixel art!</p>
    </div>
    <AnimatedPixelPerson />
  </div>
</section>
```

### As a Profile Avatar
```tsx
<div className="profile-card">
  <AnimatedPixelPerson />
  <h2>John Doe</h2>
  <p>Full Stack Developer</p>
</div>
```

### In a Grid Layout
```tsx
<div className="grid grid-cols-3 gap-4">
  <AnimatedPixelPerson />
  <AnimatedPixelPerson />
  <AnimatedPixelPerson />
</div>
```

## Performance Notes
- Uses `setInterval` for frame animation (can be upgraded to `requestAnimationFrame` for better performance)
- Automatic cleanup prevents memory leaks
- Single sprite sheet means only one image request
- CSS-based animation is GPU-accelerated

## Future Enhancements
- [ ] Add more animation states (walking, jumping, etc.)
- [ ] Make frame sequences configurable via props
- [ ] Add sound effects on interaction
- [ ] Support for custom sprite sheets
- [ ] Add keyboard interaction
- [ ] Implement direction-based animations

## Credits
- Sprite sheet and animation concept inspired by [Hamardikan's Portfolio](https://port.hamardikan.com/dev/)
- Implementation adapted for React/Next.js with TypeScript
