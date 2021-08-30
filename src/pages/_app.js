import '../styles/globals.css'


// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';;
import '../assets/scss/custom-styles.scss';
import '../assets/scss/toast.scss';
import { AuthProvider } from '../context/auth';
import { AppWrapper } from '../context/user';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </AuthProvider>)
}

export default MyApp
