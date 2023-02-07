import React, { useEffect, useState } from "react";
import "./country.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";
import { collection, doc, setDoc } from "@firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setCountryNameAction } from "../../redux/actions/setCountryNameAction";

const Country = () => {
  const { firstName } = useSelector((state) => state.register);
  const [countries, setCountry] = useState();
  const [filteredCountries, setFilteredCountries] = useState();
  const [countryName, setCountryName] = useState();
  const [cityName, setCityName] = useState();
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countryClickHandler = (e) => {
    e.preventDefault();
    setCountryName(e.target.outerText);
    setHidden((current) => !current);
  };
  const onChangeHandler = (e) => {
    setCountryName(e.target.value);
    setHidden(false);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountry(data));
  }, []);

  useEffect(() => {
    const filtered =
      countries &&
      countries.filter((country) => {
        return country.name.common
          ?.toLowerCase()
          .includes(countryName?.toLowerCase());
      });
    setFilteredCountries(filtered);
  }, [countryName]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (countryName !== "" && cityName !== "") {
      dispatch(setCountryNameAction(countryName));
      navigate("/signup/recent-job");
    }
  };
  // useEffect(() => {
  //   const filtered = countries && countries.filter((country) => {
  //      return country.capital.toLowerCase().includes(cityName.toLowerCase())
  //   })
  //   setFilteredCities(filtered)
  // }, [cityName]);

  return (
    <div className="">
      <div className="">
        <div className="signup-logo">
          <h1 className="">
            <Link to="/">
              <span className="span-linked">Linked</span>{" "}
              <span className="span-in">in</span>
            </Link>
          </h1>
        </div>

        <h1 className="country__welcome__title">
          Welcome {firstName && firstName}
        </h1>
        <div className="country__title-div">
          <h2 className="country__title-h2">
            Let’s start your profile, connect to people you know, and engage
            with them on topics <br />
            you care about.
          </h2>
        </div>

        <form onSubmit={onSubmitHandler} className="sign__up-form">
          <div className="sign__up__first-input-group">
            <label className="email-input">
              <div>Country/Region</div>
            </label>
            <input
              onClick={() => setHidden((current) => !current)}
              onChange={onChangeHandler}
              value={countryName}
              autoComplete="off"
              type="text"
              required
            />

            <div className="doit">
              {countryName && (
                <div
                  className={`country__search__countries + ${
                    hidden ? "hidden" : ""
                  }`}
                >
                  {filteredCountries &&
                    filteredCountries.map((country) => {
                      return (
                        <div
                          key={country.name.common}
                          className="country__filter_with-input"
                        >
                          <p
                            value={country.name.common}
                            onClick={countryClickHandler}
                            className="country__each__element"
                          >
                            {country.name.common}
                          </p>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            <label className="password-input">
              <div>City/District</div>
            </label>
            <input
              onClick={() => setHidden(true)}
              onChange={(e) => setCityName(e.target.value)}
              type="text"
              required
            />
          </div>

          <button type="submit" className="fullname__up-agree-join">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Country;
