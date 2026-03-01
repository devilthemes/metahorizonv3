# Metahorizon Promo Video - Remotion Project

This directory contains the Remotion composition for creating the Metahorizon company services and product video.

## 📹 Video Specifications

- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 30 fps
- **Duration:** 30 seconds (900 frames)
- **Format:** MP4 (H.264)

## 🎬 Video Structure

| Scene | Time | Duration | Content |
|-------|------|----------|---------|
| 1. Opening | 0:00-0:04 | 4s | Logo animation with stats overlay |
| 2. Company Intro | 0:04-0:07 | 3s | Global offices map animation |
| 3. Services | 0:07-0:11 | 4s | 6 service cards with icons |
| 4. Documme | 0:11-0:15 | 4s | Product showcase with integrations |
| 5. Qvolv | 0:15-0:19 | 4s | AR/VR/MR product suite |
| 6. Academy | 0:19-0:22 | 3s | Training programs |
| 7. Why Metahorizon | 0:22-0:25 | 3s | Trust indicators |
| 8. CTA | 0:25-0:30 | 5s | Contact information |

## 🚀 Commands

### Development Mode
Open Remotion Studio for real-time preview:
```bash
npm run video:dev
# or
npx remotion studio src/remotion/index.tsx
```

### Preview
Preview the composition in browser:
```bash
npm run video:preview
# or
npx remotion preview src/remotion/index.tsx MetahorizonPromo
```

### Render Final Video
Render to MP4:
```bash
npm run video:render
# or
npx remotion render src/remotion/index.tsx MetahorizonPromo out/promo-video.mp4
```

The rendered video will be saved to `out/promo-video.mp4`

## 🎨 Customization

### Adjusting Timing
Edit `src/remotion/index.tsx` to change duration:
```typescript
<Composition
  id="MetahorizonPromo"
  component={MetahorizonPromo}
  durationInFrames={900}  // Change this (frames = seconds × 30)
  fps={30}
  width={1920}
  height={1080}
/>
```

### Modifying Scenes
Each scene is a separate React component in `src/remotion/MetahorizonPromo.tsx`:
- `OpeningScene` - Logo and hero stats
- `CompanyIntroScene` - Global map
- `ServicesScene` - Services grid
- `DocummeScene` - Documme product
- `QvolvScene` - Qvolv product
- `AcademyScene` - Training programs
- `WhyScene` - Trust indicators
- `CTAScene` - Call to action

### Changing Colors
Update the gradient colors throughout the file:
- Primary: `#00d9ff` (cyan)
- Secondary: `#00ff88` (green)
- Accent: `#e94560` (red/pink)

## 🎵 Adding Audio (Optional)

To add background music and voiceover:

1. Add audio files to `public/audio/`
2. Import in the component:
```typescript
import { Audio } from 'remotion';

// Then in your composition:
<Audio src="/audio/background-music.mp3" />
<Audio src="/audio/voiceover.mp3" />
```

3. Adjust volume with `volume` prop (0-1)

## 📦 Rendering Options

### Higher Quality
```bash
npx remotion render MetahorizonPromo out/promo-video.mp4 --codec h264 --crf 18
```

### Faster Render (lower quality)
```bash
npx remotion render MetahorizonPromo out/promo-video.mp4 --codec h264 --crf 28
```

### GIF Preview
```bash
npx remotion render MetahorizonPromo out/preview.gif
```

## 🛠️ Troubleshooting

### Build Errors
If you see TypeScript errors, ensure all React components have proper types.

### Render Fails
Try reducing the resolution for testing:
```typescript
width={1280}
height={720}
```

### Memory Issues
Close other applications and increase Node.js memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run video:render
```

## 📝 Notes

- All animations use Remotion's `interpolate()` for smooth transitions
- Scenes use `Sequence` for timeline management
- Components are fully typed with TypeScript
- Responsive to frame changes via `useCurrentFrame()` hook

## 📄 License

This video composition is proprietary to Metahorizon.

---

**Created:** February 28, 2026
**Version:** 1.0
