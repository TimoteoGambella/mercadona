import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper';
import { arrBanners } from  'utils'
import 'styles/views/Home/components/Slider/Slider.scss'
import banner1 from 'assets/bannerHome/banner1.png'
import banner2 from 'assets/bannerHome/banner2.png'
import banner3 from 'assets/bannerHome/banner3.png'
import banner4 from 'assets/bannerHome/banner4.png'
import banner5 from 'assets/bannerHome/banner5.png'
import banner6 from 'assets/bannerHome/banner6.png'
import 'swiper/css'
import 'swiper/css/effect-fade';

export const Slider = () => {


    return(
        <Swiper modules={[EffectFade, Autoplay]}  centeredSlides={true} slidesPerView={1}  autoplay={{delay: 2700}} effect={"fade"}  >
            {
            arrBanners.map((banner) => {
                return(
                    <SwiperSlide>
                        <img className='imgbanner' src={banner} alt={banner}/>
                    </SwiperSlide>
                )
            })
           }
           {/* <SwiperSlide>
            <img src={banner1} alt={banner1}/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={banner2} alt={banner2}/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={banner3} alt={banner3}/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={banner4} alt={banner4}/>
           </SwiperSlide> */}
        </Swiper>
    )
}