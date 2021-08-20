import '../styles/globals.css'


// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';;
import '../assets/scss/custom-styles.scss';
import '../assets/scss/toast.scss';
import { AuthProvider } from '../context/auth';


 
function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>)
}

export default MyApp
