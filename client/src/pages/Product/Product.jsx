import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { CiHeart } from "react-icons/ci";
import Size from "../../components/Size/Size";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="product__side-left">
            <div className="product__side-content product-side">
              <div className="product__side-top"></div>
            </div>
          </div>
          <div className="product__main">
            <div className="card-product">
              <div className="media-tape__thumbs">
                <div className="sticky-thumbs">
                  <div className="sticky-thumbs__item active">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        data?.attributes?.img?.data?.attributes?.url
                      }
                      className="sticky-thumbs__image"
                      alt=""
                      onClick={(e) => setSelectedImg("img")}
                    />
                  </div>
                  <div className="sticky-thumbs__item active">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        data?.attributes?.img2?.data?.attributes?.url
                      }
                      className="sticky-thumbs__image"
                      alt=""
                      onClick={(e) => setSelectedImg("img2")}
                    />
                  </div>
                </div>
              </div>
              <div className="media-tape card-product__main">
                <div className="media-tape__tape">
                  <div className="media-tape__cover"></div>
                  <div className="media-tape__item">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        data?.attributes[selectedImg]?.data?.attributes?.url
                      }
                      className="media-tape__image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="card-product__side">
                <div className="side__content">
                  <h1 className="side__title">{data?.attributes?.title}</h1>
                  <div className="side__price">{data?.attributes?.price} ₽</div>
                  <div className="side__description">
                    {data?.attributes?.desc}
                  </div>
                  <div className="color-selector side__colors">
                    <div className="color-selector__title">
                      Цвет: {data?.attributes?.color}
                    </div>
                    <div className="color-selector thumbs">
                      <div className="color-selector__stage">
                        <div className="color-selector__items">
                          <div className="color-selector__thumb">
                            <div className="color-selector__imagebox">
                              <img
                                src={data?.attributes?.colorCube}
                                alt=""
                                className="color-selector__img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side__bottom">
                    <div className="side__bottom-actions">
                      {/* <div className="side__sizes side-sizes">
                        <div className="side-sizes__header">
                          <span className="side-sizes__title">Размер</span>
                        </div>
                        <div
                          className="side-sizes__selector"
                          onClick={() => setOpen(!open)}
                        >
                          <div className="size-selector">
                            <div tabIndex={0} className="size-selector__header">
                              <div className="size-selector__selected">XS</div>
                              <div className="size-selector__arrow">
                                <div className="svg-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 128 128"
                                  >
                                    <path
                                      d="M119.2,47.7l8.8-8.8l-17.5-17.5l-8.8,8.8L119.2,47.7z M60.9,88.5l-9.3,8.2l8.7,10l9.4-9.4L60.9,88.5z M26.8,30.7l-8.2-9.3
	L0,37.7l8.2,9.3L26.8,30.7z M101.7,30.1L52.1,79.7l17.5,17.5l49.6-49.6L101.7,30.1z M70.2,80.3L26.8,30.7L8.2,47.1l43.4,49.6
	L70.2,80.3z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          {open && <Size />}
                          </div>
                        </div>
                      </div> */}
                      <div className="side__actions actions">
                        <div className="actions__cart">
                          <button
                            className="btn btn-cart"
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  id: data.id,
                                  title: data.attributes.title,
                                  desc: data.attributes.desc,
                                  price: data.attributes.price,
                                  img: data.attributes.img.data.attributes.url,
                                  quantity,
                                })
                              )
                            }
                          >
                            Добавить в корзину
                          </button>
                        </div>
                        {/* <div className="actions__fav">
                      <button className="btn-fav">
                        <CiHeart className="icon-favorite" />
                      </button>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card-product__menu"></div> */}
            </div>
          </div>
          {/* <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div> */}
        </>
      )}
      {/* {open && <Size />} */}
    </div>
  );
};

export default Product;
