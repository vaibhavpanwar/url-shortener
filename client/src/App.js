import React, { Fragment, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import Scissor from "./Scissor";
import { set } from "mongoose";

const App = () => {
  //states
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const [copy, setCopy] = useState(false);

  //input change handler
  const onChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  //api call to backend
  const shortenUrl = async (longUrl) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/url/shorten",
        { longUrl },
        config
      );
      setLoading(false);
      setShortUrl(res.data.shortUrl);
      setUrl("");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setAlert("Something went wrong! Invalid Url or Server error");
      setTimeout(() => setAlert(""), 3000);
      setUrl("");
      setShortUrl("");
    }
  };

  //submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (url === "") return;
    else {
      shortenUrl(url);
    }
  };
  return (
    <Fragment>
      <Navbar />

      <div className="container">
        {alert.length > 0 && (
          <div className="alert alert">
            <i className="fas fa-info-circle" /> {alert}
          </div>
        )}

        <form className="main-form" onSubmit={onSubmit}>
          <div className="form-input">
            <label htmlFor="longUrl">Enter Your Url </label>
            <input name="longUrl" type="text" onChange={onChange} value={url} />
          </div>
          <div className="input-group">
            <input className="input-button" type="submit" value="Shorten Url" />
          </div>

          {loading && (
            <div style={{ margin: "auto" }}>
              <Scissor />
            </div>
          )}
          {shorturl !== "" && (
            <div className="short-url">
              <p>
                {shorturl}{" "}
                <span
                  onClick={() => setShortUrl("")}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  x
                </span>
              </p>
              <CopyToClipboard text={shorturl} onCopy={() => setCopy(true)}>
                <div>
                  <button className="copy-button">
                    <i className="far fa-copy ikon"></i>
                  </button>
                  {copy ? (
                    <p style={{ color: "white", fontSize: "17px" }}>
                      Copied!!!
                    </p>
                  ) : null}
                </div>
              </CopyToClipboard>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
