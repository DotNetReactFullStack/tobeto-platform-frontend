import React from "react";
import "./SocialMediaAccountList.css";
import SocialMediaAccountElement from "./SocialMediaAccountElement";

type Props = {};

const SocialMediaAccountList = (props: Props) => {
  const socialMediaFakeData: any[] = [
    {
      socialMediaId: "socialMedia1",
      title: "Instagram",
      url: "https://www.instagram.com/ozgursonmez00",
    },
    {
      socialMediaId: "socialMedia2",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/ozgursonmez00/",
    },
    {
      socialMediaId: "socialMedia3",
      title: "GitHub",
      url: "https://github.com/OzgurSonmez",
    },
    {
      socialMediaId: "socialMedia4",
      title: "Twitter",
      url: "https://twitter.com/",
    },
  ];

  return (
    <div className="social-media-account-list">
      {socialMediaFakeData.map((value, index) => (
        <>
          {(() => {
            switch (value.title) {
              case "Instagram":
                return (
                  <SocialMediaAccountElement
                    socialMediaId={value.socialMediaId}
                    label={value.title}
                    iconClass="bi bi-instagram"
                    iconColor="#e03780"
                    url={value.url}
                  />
                );
              case "LinkedIn":
                return (
                  <SocialMediaAccountElement
                    socialMediaId={value.socialMediaId}
                    label={value.title}
                    iconClass="bi bi-linkedin"
                    iconColor="#0077b5"
                    url={value.url}
                  />
                );
              case "GitHub":
                return (
                  <SocialMediaAccountElement
                    socialMediaId={value.socialMediaId}
                    label={value.title}
                    iconClass="bi bi-github"
                    iconColor="#181717"
                    url={value.url}
                  />
                );
              case "Twitter":
                return (
                  <SocialMediaAccountElement
                    socialMediaId={value.socialMediaId}
                    label={value.title}
                    iconClass="bi bi-twitter-x"
                    iconColor="#181717"
                    url={value.url}
                  />
                );
            }
          })()}
        </>
      ))}
    </div>
  );
};

export default SocialMediaAccountList;
