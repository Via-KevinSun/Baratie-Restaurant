import { useEffect } from 'react';
import Home from './pages/Home';

// Opcional: importar fontes do Google Fonts (se não estiver usando link no index.html)
/*
import '@fontsource/playfair-display';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/cormorant-garamond';
import '@fontsource/cormorant-garamond/300.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/dm-mono';
import '@fontsource/dm-mono/300.css';
*/
function App() {
  // Opcional: configurações globais ao montar o app
  useEffect(() => {
    // Exemplo: adicionar classe ao body se quiser controle extra
    document.body.classList.add('baratie-theme');

    // Cleanup (opcional)
    return () => {
      document.body.classList.remove('baratie-theme');
    };
  }, []);

  return (
    <>
      {/* Aqui você pode colocar provedores no futuro, ex:
      <ThemeProvider>
      <AuthProvider>
      */}
      
      <Home />

      {/* Aqui você pode colocar provedores de fechamento */}
    </>
  );
}

export default App;