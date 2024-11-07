Gauge Chart Application

This project showcases a responsive gauge chart created with React, Recharts, and Redux, visualizing a dynamic gauge meter with values controlled by Redux state. The gauge chart features labels, a pointer/needle, and smooth color transitions based on the gauge value.

Features
Semi-circular gauge displaying values from 0% to 100%
Real-time updates based on a Redux-controlled value
Labels positioned at 0%, 25%, 50%, 75%, and 100%
Pointer/needle indicating the current gauge value
Dark-themed color palette
Random value generator button (optional)

Tech Stack
React: For building the UI
Recharts: For creating the gauge chart visualization
Redux: For state management, controlling the gauge values

Project Structure
slice.js: Redux slice for managing the gauge value
store.js: Redux store configuration
src/chart/index.js: Component for rendering the gauge chart
src/App.js: Main application component that displays the gauge chart

Code Overview
Redux Store: Configured in store.js with a single slice (gaugeSlice) to manage gauge values.
GaugeChart Component: Renders a semi-circular gauge using Recharts, with labels and a pointer. The gauge color smoothly transitions as the value updates in the Redux state.
Button Component: A button that generates random gauge values for demonstration.

Usage
Start the development server: npm start
Open the app in your browser at http://localhost:3000.
