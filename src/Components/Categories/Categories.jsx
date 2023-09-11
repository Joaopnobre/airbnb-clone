import "./Categories.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { categories } from "../../../fake-api/backend/data";
import { useState } from "react";

function Categories({changeCat}) {
  const [clickedId, setClickedId] = useState(1);

  const handleClick = (event, id) => {
    console.log(id + " clicked");
    setClickedId(id);
    changeCat(id); // Change ID when clicked
  };

  return (
    <>
      <div style={{position: 'fixed', marginTop: '80px',  top: 0, zIndex: 998 }}className="bg-white pt-2 container-fluid">
        <div className=" d-flex align-items-center justify-content-between container-airbnb row">
          <div className="col-sm-11">
            <Swiper
             
              breakpoints={{
                100:{
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 1
                },
                576:{
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 4
                },
                768:{
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                  spaceBetween: 7
                },
                992:{
                  slidesPerView: 8,
                  slidesPerGroup: 8,
                  spaceBetween: 7
                },
                1200:{
                  slidesPerView: 8,
                  slidesPerGroup: 8,
                  spaceBetween: 7
                },
                1400:{
                  slidesPerView: 10,
                  slidesPerGroup: 10,
                  spaceBetween: 7
                },
                1600: {
                  slidesPerView: 14,
                  slidesPerGroup: 13,
                  spaceBetween: 7
                }
              }}
              pagination={false}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {categories.map((data, index) => (
                <SwiperSlide
                  onClick={(event) => handleClick(event, data.id)}
                  className={data.id === clickedId ? "active" : ""}
                  key={data.id}
                  virtualIndex={index}
                >
                  <img className="mb-2" src={data.imagem} />
                  <span>{data.titulo}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-sm-1">
          <button
              className="d-none d-md-flex d-lg-none justify-content-center btn btn-filter float-end"
              data-bs-toggle="modal"
              data-bs-target="#filterModal"
            >
              <i className="mdi mdi-filter-variant me-2"></i>
              
            </button>
            <button
              className="d-none d-lg-flex btn btn-filter d-flex float-end"
              data-bs-toggle="modal"
              data-bs-target="#filterModal"
            >
              <i className="mdi mdi-filter-variant me-2"></i>
              Filtros
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
