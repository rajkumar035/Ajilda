import routes from './routes.json';

export const getTabText = (pathName) => {
  const splitName = pathName.split('/');
  const customName = splitName.length === 2 ? splitName[1] : splitName[2];
  let notfound;
  if (splitName.length === 3) {
    notfound = Object.keys(routes).find((items) => {
      return routes[items] === splitName[1];
    });
  } else {
    notfound = Object.keys(routes).find((items) => {
      return routes[items] === customName;
    });
  }
  const dynamicRoutCheck = notfound === 'productDetails' || notfound === 'orderDetails';
  if (customName === '') {
    return 'Ajilda';
  } else if (typeof notfound === 'undefined') {
    return 'Not Found';
  } else {
    if (splitName.length === 2 && dynamicRoutCheck) {
      return 'Not Found';
    }
    return customName[0].toUpperCase() + customName.substring(1);
  }
};
