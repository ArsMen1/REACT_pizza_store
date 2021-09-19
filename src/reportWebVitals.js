const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // - измеряет степень стабильности контента на вашем сайте
      getFID(onPerfEntry); // - измеряет время отзывчивости вашего сайта. Чем этот показатель ниже, тем больше у посетителей уверенности, что с вашим сайтом можно взаимодействовать
      getFCP(onPerfEntry); // -
      getLCP(onPerfEntry); // - измеряет время отрисовки самой большой и видимой части содержимого на первом экране вашего сайта
      getTTFB(onPerfEntry); // -
    });
  }
};

export default reportWebVitals;
