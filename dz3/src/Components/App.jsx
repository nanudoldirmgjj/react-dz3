
import '../style/App.scss'
import plantPic from '../assets/MaskGroup.png'
import prevSlide from '../assets/previos.png'
import nextSlide from '../assets/next.png'
import logo from '../assets/logo.png'
import searchImg from '../assets/search1.png'
import cartImg from '../assets/shopping-cart1.png'
import fastDriveImg from '../assets/fast1.png'
import headphonesImg from '../assets/headphones1.png'
import plantImg from '../assets/plant1.png'
import dollarImg from '../assets/dollar-symbol1.png'
import cac1 from '../assets/cac1.png'
import cac2 from '../assets/cac2.png'
import cac3 from '../assets/cac3.png'
import cac4 from '../assets/cac4.png'
import cac5 from '../assets/cac5.png'

import relaxImg1 from'../assets/relaxPic1.png'
import relaxImg2 from'../assets/relaxPic2.png'

import favPlant from '../assets/favPlant.png'


function App() {
  return (
    <>
      <div className="head-block">
        <div className="plant-div">
          <img className='main-plant' src={plantPic} alt="" />
        </div>
        <div className="intro">
          <div className="topic">
            <p className='name'>Kembang Flower Mantap</p>
            <p className="name-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          </div>


          <div className="slider">



            <div className="previos">
              <div className="prev-container">
                <div className="prev-button">
                  <img src={prevSlide} alt="" />
                  <p>Previous</p>
                </div>
                <p className="Pbut-name">Kaktus Plant</p>
              </div>
            </div>




            <div className="next">
              <div className="next-container">
                <div className="next-button">
                  <p>Next</p>
                  <img src={nextSlide} alt="" />
                </div>
                <p className="Nbut-name">Rahasia Plant</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="head-menu">

        <img src={logo} alt="" />

        <div className="left-menu">
          <button className='search'><img src={searchImg} alt="" /></button>
          <button className="cart"><img src={cartImg} alt="" /></button>
          <button className='signUp-but'>Sign Up</button>
          <button className='signIn-but'>Sign In</button>
        </div>

      </div>



      <div className="benefits">

        <div className="benefit">
          <div className="benefit-container">
            <div className="ben-name">
              <img src={fastDriveImg} alt="" />
              <p>Fast Delivery</p>
            </div>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
        </div>

        <div className="benefit">
          <div className="benefit-container">
            <div className="ben-name">
              <img src={headphonesImg} alt="" />
              <p>Great Customer Service</p>
            </div>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
        </div>

        <div className="benefit">
          <div className="benefit-container">
            <div className="ben-name">
              <img src={plantImg} alt="" />
              <p>Original Plants</p>
            </div>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p></div>
        </div>

        <div className="benefit">
          <div className="benefit-container">
            <div className="ben-name">
              <img src={dollarImg} alt="" />
              <p>Affordable Price</p>
            </div>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
        </div>



      </div>



      <div className="featuredPlants">

        <div className="filter">
          <p className="featuredTitle">           Featured Plants       </p>
          <form className='filterForm'>
            <select name="" id="filterChoice">
              <option value="">most popular</option>
              <option value="">cheaper first</option>
              <option value="">more expensive at first</option> 
            </select>
          </form>

        </div>


        <div className="cactusList">

          <div className="cactus">

            <img src={cac1} alt="" />

            <div className="cactusName">
              <div className="cactusContainer">

                <p className="cacName">Kaktus Plants</p>
                <p className="cacPrice">IDR 85.000</p>

              </div>
            </div>
          </div>
          
          <div className="cactus">

            <img src={cac2} alt="" />

            <div className="cactusName">
              <div className="cactusContainer">

                <p className="cacName">Landak Plants</p>
                <p className="cacPrice">IDR 105.000</p>
                
              </div>
            </div>
          </div>


          <div className="cactus">

            <img src={cac3} alt="" />

            <div className="cactusName">
              <div className="cactusContainer">

                <p className="cacName">Kecubung Plants</p>
                <p className="cacPrice">IDR 85.000</p>
                
              </div>
            </div>
          </div>


          <div className="cactus">

            <img src={cac4} alt="" />

            <div className="cactusName">
              <div className="cactusContainer">

                <p className="cacName">Kecubung Plants</p>
                <p className="cacPrice">IDR 85.000</p>
                
              </div>
            </div>
          </div>


          <div className="cactus">

            <img src={cac5} alt="" />

            <div className="cactusName">
              <div className="cactusContainer">

                <p className="cacName">Kecubung Plants</p>
                <p className="cacPrice">IDR 85.000</p>
                
              </div>
            </div>
          </div>



        </div>


      </div>


      <div className="relax">




      <div className="relax-left">

        <div className="textSide">
          <p className="boldTopic">Buy more plants, it helps you to be relaxed</p>
          <p className="thickDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
        </div>

        <img src={relaxImg1} alt="" />


      </div>

      <div className="relax-right">
        <img src={relaxImg2} alt="" />
      </div>
      </div>


<div className="favoritePlant">

  <div className="favText">
    <p>Get your favourites plant on our shop now</p>
    <button>Visit Shop</button>
  </div>
  <img src={favPlant} alt="" />
</div>


<footer>

  <div className="foot-container">

    <div className="plantku">
      <p className="logoTxt">PLANTKU</p>
      <p className="plantkuHouse">Plantku House</p>
      <p className="plantkuDescrip">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</p>
    </div>

    <div className="Perusahaan">
      <p className="PerusahaanHead">Perusahaan</p>
      <div className="PerusahaanLinks">
        <a href="#">Tentang Kami</a>
        <a href="#">Hubungi Kami</a>
      </div>
    </div>

    <div className="Produk">
      <p className="ProdukHead">Produk</p>
      <div className="ProdukLinks">
        <a href="#">Tanaman</a>
        <a href="#">Tanaman Lain</a>
      </div>
    </div>

    <div className="Berlangganan">
      <p className="BerlanggananHead">Berlangganan</p>
        <input type="email" placeholder='Masukan Alamat Email' name="" id="emailInput" />
        <button>Submit</button>
    </div>
  </div>
</footer>


    </>
  )

}
export default App
