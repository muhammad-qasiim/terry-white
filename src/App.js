import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

        <section className="container mx-auto px-24 lg:px-99 my-99">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/z-sOU0AHFTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>

      <Footer />
    </>
  );
}

export default App;
