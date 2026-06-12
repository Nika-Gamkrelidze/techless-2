# Higgsfield asset pack for techless-2

Five short cinematic loops to generate on [higgsfield.ai](https://higgsfield.ai), then drop
into `public/media/`. Once the files exist, ask Claude to "wire the Higgsfield videos" —
the integration plan is at the bottom.

## Shared style (paste into every prompt)

> Dark cinematic tech atmosphere, deep navy background (#060b1a), electric blue (#1e6bff)
> and cyan (#45c8ff) light accents, soft volumetric glow, shallow depth of field,
> premium minimal aesthetic, no text, no logos, no people's faces, slow graceful motion,
> seamless loop.

Settings: 16:9, 5 seconds, highest quality export. Use a slow camera move
(Higgsfield's camera controls are the point — prefer "dolly in slow" or "orbit slow").

## The five assets

| File | Used for | Prompt (append shared style) |
|---|---|---|
| `hero-loop.mp4` | Home hero background | Slow dolly through a dark modern office lobby at night, glass walls catching blue light streaks, bokeh city lights far behind |
| `web-loop.mp4` | Web Development page | Macro glide over glowing UI wireframes and flowing code fragments materializing in dark space, blue grid horizon |
| `mobile-loop.mp4` | Mobile Apps page | Slow orbit around a sleek smartphone floating in dark space, screen casting cyan glow, light particles drifting |
| `hardware-loop.mp4` | Hardware Design page | Extreme macro dolly across a dark PCB motherboard, traces lighting up in electric blue pulses, soldered components in shallow focus |
| `support-loop.mp4` | Contact Center page | Abstract sound waves and voice waveforms rippling in dark space, blue and cyan light ribbons, slow push-in |

## Compress before committing (keeps pages fast)

```bash
# ~1–2 MB per loop, still looks great as a dimmed background
ffmpeg -i input.mp4 -an -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/media/hero-loop.mp4
```

Also export one poster frame per video (`hero-poster.jpg` etc., ~80 KB JPEG) — it shows
instantly while the video buffers and is the fallback for reduced-motion users.

## Integration plan (Claude does this once files exist)

- `<video autoplay muted loop playsinline poster=...>` behind the hero/service-hero
  content, under a navy scrim so text contrast is unchanged
- `prefers-reduced-motion: reduce` → poster image only, no video
- Mobile (`max-width: 760px`) → poster only, saving bandwidth
- Videos are decorative (`aria-hidden`), zero SEO impact — all text stays in static HTML
