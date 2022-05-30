import Navbar from './components/Navbar'
import YoutubeVideo from './components/YoutubeVideo'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <section className="container mx-auto px-24 lg:px-99 my-42 lg:my-99">
         <p className="mt-4 text-18 text-gray-700 text-center px-0 lg:px-99">ConcertRx is a communication tool that sends the customer a programmed static or dynamic SMS messages when a patient card is dragged across a kanban board.</p>
      </section>

      <YoutubeVideo />

      <Footer />
    </>
  );
}

export default App;
