import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "../styles/style.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
        <div className="fixed bottom-5 z-50 w-full right-3">
          <WhatsAppWidget
            phoneNumber="1-212-736-5000"
            messageBoxTxt="Hi Team, is there any related service available ?"
          />
        </div>
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
