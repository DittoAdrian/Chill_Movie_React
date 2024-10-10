import './App.css'
import phone from './assets/images/iPhone.png'
import usecount from '../src/store/useCount.js'
import useData from './store/Data.js'
import ButtonToPage from './components/button.jsx'

function App() {

  return (
    <div className='container-opening'>
      <div>
        <p>MOVIE STREAMING PLATFORM</p>
        <h1>Chill</h1>
        <p>
          Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna menemukan film dan acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
        </p>
        <ButtonToPage title='Get Srarted'/>
      </div>
      <div >
        <img src={phone} alt="phone" />
      </div>
    </div>
  )
}

export default App
