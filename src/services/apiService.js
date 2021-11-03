export const apiService = {
  BASE_API_URL: 'https://blue-bottle-api-test.herokuapp.com',
  GET_COFFEE_SHOPS: '/v1/coffee_shops',
  GET_TOKEN: '/v1/tokens',

  async getNearestShops(position) {
    const coffeeShops = await this.getCoffeeShops();
    return coffeeShops.map(coffeeShop => {
      return {
        id: coffeeShop.id,
        name: coffeeShop.name,
        latitude: parseFloat(coffeeShop.x),
        longitude: parseFloat(coffeeShop.y)
      }
    });
  },

  async getCoffeeShops(apiKey = '') {
    if (apiKey === '') {
      apiKey = await this.retrieveNewToken();
    }

    console.log("Getting the coffee shops...");
    let response = await fetch(`${this.BASE_API_URL}${this.GET_COFFEE_SHOPS}?token=${apiKey}`);

    if (response.ok) {
      return await response.json();
    } else {
      console.error(`Could not retrieve data. Error code: ${response.status}`);

      if (response.status === 401) {
        console.log("Getting a new token and trying again...");
        apiKey = await this.retrieveNewToken();

        if (apiKey !== '') {
          return await this.getCoffeeShops(apiKey);
        }
      } else {
        console.log("Data could not be retrieved, please wait a few seconds and try again.");
        return [];
      }
    }
  },

  async retrieveNewToken() {
    let response = await fetch(`${this.BASE_API_URL}${this.GET_TOKEN}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return (await response.json()).token;
    } else {
      console.error(`Could not retrieve a new token. Error code: ${response.status}`);
      return '';
    }
  },

  validateValues(latitude, longitude) {
    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
      console.error("The latitude and longitude need to be numbers");
      return false;
    } else if (Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
      console.error("The latitude should be between -90 and 90 degrees, also the longitude between -180 and 180");
      return false;
    } else {
      return true;
    }
  },
}