import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ram from '../../images/img/ram.png';
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Rammandir",
    image: ram,
    link: "https://rammandir.metalok.io/",
  },
  {
    id: 2,
    name: "sportsverse",
    link: "https://www.sportsverse.trade/",
    image: "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/sportsverse/app_gplay_img.png",
  },
  {
    id: 3,
    name: "filmable",
    image: "https://filmable.metalok.io/assets/screen.png",
    link: "https://filmable.metalok.io/",
  },          
  {
    id: 4,
    name: "wtl",
    image: "https://wtl.metalok.io/static/media/manbat.76922d479b0a64da81dd.png",

    link: "https://wtl.metalok.io/",
  },
  {
    id: 5,
    name: "metalok",
    image: "https://www.metalok.io/images/about/about-3.jpg",
    link: "https://www.metalok.io/",
  },
  {
    id: 6,
    name: "kyyte",
    image: "https://kyyte.io/images/animation-kyyte-mobile.webp",
    link: "https://kyyte.io/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 5,
    label: "",
  },
  {
    filterId: 2,
    label: "Mobile",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
