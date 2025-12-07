# Mapbox Integration Guide

## 🗺️ Getting Started with Mapbox

This project now includes a beautiful, interactive Mapbox implementation with modern design and smooth animations.

### 1. Get Your Mapbox Token

1. Go to [Mapbox Account](https://account.mapbox.com/access-tokens/)
2. Sign up or log in
3. Create a new access token (or use the default public token)
4. Copy your token

### 2. Configure Your Token

Create a `.env` file in the root directory:

```bash
VITE_MAPBOX_TOKEN=your_actual_mapbox_token_here
```

**Important:** Add `.env` to your `.gitignore` to keep your token secure!

### 3. Run the Application

The dev server should already be running, but if not:

```bash
npm run dev
```

## ✨ Features

- **Interactive Map**: Click anywhere to add custom markers
- **Custom Markers**: Beautiful animated pins with pulsing effects
- **Marker Management**: Click markers to view details and remove them
- **Navigation Controls**: Zoom, rotate, and navigate the map
- **Geolocation**: Find your current location
- **Fullscreen Mode**: Expand the map to fullscreen
- **Dark Theme**: Modern dark mode with glassmorphism effects
- **Responsive Design**: Works beautifully on all screen sizes

## 🎨 Design Features

- Modern dark theme with vibrant gradients
- Glassmorphism effects for cards and panels
- Smooth animations and transitions
- Custom marker designs with pulse effects
- Premium typography using Inter font
- Responsive layout

## 🛠️ Technologies Used

- **React** - UI framework
- **Mapbox GL JS** - Map rendering
- **react-map-gl** - React wrapper for Mapbox
- **Vite** - Build tool
- **CSS3** - Modern styling with custom properties

## 📝 Usage Tips

1. **Add Markers**: Click anywhere on the map
2. **View Details**: Click on any marker to see its coordinates
3. **Remove Markers**: Select a marker and click "Remove Marker"
4. **Navigate**: Use controls on the top-right or mouse/touch gestures
5. **Find Location**: Click the location icon to center on your position

Enjoy your interactive map! 🎉
