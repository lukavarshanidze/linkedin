import React from "react";
import "./body.css";
import userLogo from "../icons/user.png";
import premiumLogo from "../icons/premiumicon.svg";
import myitemslogo from "../icons/myitemslogo.svg";

const Body = ({ el }) => {
  const { firstNameAction, lastNameAction } = el;
  return (
    <div className="feed__body-container">
      <div className="feed__body-items-container">
        <div className="feed__profile_info_left-side">
          <div className="feed__profile__img-and-name">
            <img src={userLogo} />
            <h4 className="feed_left-side__fullname">
              {firstNameAction + " " + lastNameAction}
            </h4>
            <p>--</p>
          </div>
          <div className="feed__underline"></div>
          <div>
            <div className="feed_profile__ feed_same_background feed__whos_viewed-your-profile">
              <span className="feed_font-size-12px">
                Who's viewed your profile
              </span>
              <span className="feed__profile__view-profile-span">0</span>
            </div>
            <div className="feed_same_background">
              <div className="feed_profile__ ">
                <span className="feed_font-size-12px">Connections</span>
                <span className="feed__profile__view-profile-span">0</span>
              </div>
              <p className="feed__manage-your-network">Manage your network</p>
            </div>
            <div className="feed__underline"></div>
            <div className="feed_same_background feed__access-and-premium-together">
              <p className="feed_font-size-12px">
                Access exclusive tools & insights
              </p>
              <div className="feed__display-flex-everywhere feed__premium-logo">
                <img src={premiumLogo} />
                <div>
                  <p>Try Premium for free</p>
                </div>
              </div>
            </div>
            <div className="feed__underline__after-premium"></div>
            <div className="feed__my-items-logo">
              <img src={myitemslogo} />
              <div>
                <span>My items</span>
              </div>
            </div>
          </div>
        </div>
        {/* end of .feed__profile_info_left-side */}
        <div>post</div>
        <div>add to your feed</div>
      </div>
    </div>
  );
};

export default Body;
