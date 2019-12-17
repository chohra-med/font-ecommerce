export const getCountryRegionCity = (address_components) => {
    let country = '';
    let region = '';
    let city = '';
    for (let i = 0; i < address_components.length; i++) {
        if (address_components[i].types) {
            for (let j = 0; j < address_components[i].types.length; j++) {
                switch (address_components[i].types[j]) {
                    case 'country': {
                        if (!country) {
                            country = address_components[i].long_name;
                        }
                        break;
                    }
                    case 'administrative_area_level_1':
                    case 'administrative_area_level_2': {
                        if (!region) {
                            region = address_components[i].long_name;
                        }
                        break;
                    }
                    case 'locality':
                    case 'sublocality': {
                        if (!city) {
                            city = address_components[i].long_name;
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }
    return {country, region, city};
};
