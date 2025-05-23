# Gemini Chat Application

A modern chat application built with React and Vite, featuring a clean UI with dark/light mode support and real-time chat functionality.

## Features

- 🎨 Modern and responsive UI
- 🌓 Dark/Light mode toggle
- 💬 Real-time chat functionality
- 📱 Mobile-friendly design
- 💾 Local storage for chat history
- 🔄 Collapsible sidebar
- 🎯 Smooth animations and transitions

## Tech Stack

- React
- Vite
- Tailwind CSS
- Google Gemini API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gemini-chat.git
cd gemini-chat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # React components
│   ├── Main/       # Main chat interface
│   └── Sidebar/    # Sidebar component
├── config/         # Configuration files
├── hooks/          # Custom React hooks
└── App.jsx         # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
