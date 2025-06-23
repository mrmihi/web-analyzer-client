import './styles/index.css'
import { default as Pages } from './pages';
import { ToastProvider } from './providers/toast-provider';

function App() {
  return (
    <ToastProvider>
      <Pages />
    </ToastProvider>
  )
}

export default App
