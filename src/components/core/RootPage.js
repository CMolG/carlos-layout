import React, {useEffect} from "react";
import {updateOrCreateMetaTag} from "../../coreFunctions";

const RootPage = (props) => {
  const {
    fileLocation,
    fileContent,
    pageId,
    children,
  } = props;

  useEffect(() => {
    async function fetchAndApplyMetaData() {
      try {
        let metaData = null;

        if (fileContent) {
          metaData = JSON.parse(fileContent);
        } else if (fileLocation) {
          const response = await fetch(fileLocation);
          metaData = await response.json();
        } else if (pageId) {
          const metaFilePath = `/meta-data/${pageId}.json`; // Asegúrate de que los archivos sean accesibles
          const response = await fetch(metaFilePath);
          metaData = await response.json();
        }

        if (metaData) {
          if (metaData.title) document.title = metaData.title;
          if (metaData.description) updateOrCreateMetaTag('description', metaData.description);
          if (metaData.keywords) updateOrCreateMetaTag('keywords', metaData.keywords.join(', '));
          if (metaData.author) updateOrCreateMetaTag('author', metaData.author);
          if (metaData.robots) updateOrCreateMetaTag('robots', metaData.robots);

          if (metaData.ogTitle) updateOrCreateMetaTag('og:title', metaData.ogTitle, true);
          if (metaData.ogDescription) updateOrCreateMetaTag('og:description', metaData.ogDescription, true);
          if (metaData.ogImage) updateOrCreateMetaTag('og:image', metaData.ogImage, true);
          if (metaData.ogUrl) updateOrCreateMetaTag('og:url', metaData.ogUrl, true);
          if (metaData.ogType) updateOrCreateMetaTag('og:type', metaData.ogType, true);

          if (metaData.twitterCard) updateOrCreateMetaTag('twitter:card', metaData.twitterCard);
          if (metaData.twitterTitle) updateOrCreateMetaTag('twitter:title', metaData.twitterTitle);
          if (metaData.twitterDescription) updateOrCreateMetaTag('twitter:description', metaData.twitterDescription);
          if (metaData.twitterImage) updateOrCreateMetaTag('twitter:image', metaData.twitterImage);
        }
      } catch (error) {
        console.error('Error fetching meta data:', error);
      }
    }

    fetchAndApplyMetaData();
  }, [pageId, fileLocation, fileContent]);

  return <main>{children}</main>;
};

export default RootPage;