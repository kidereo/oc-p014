import {faker} from '@faker-js/faker';
import departmentList from './departments';

/**
 * Function to turn departments in the existing file into array.
 */
const departments = departmentList.map(function (item) {
    return item[Object.keys(item)[1]];
});

/**
 * Generate a bunch of random employees.
 *
 * @returns {{data: Array}}
 */
const generateEmployees = (number) => {
    const employees = [];
    for (let id = 1; id <= number; id++) {
        const gender = faker.name.sexType();
        const firstName = faker.name.firstName(gender);
        const lastName = faker.name.lastName(gender);
        const birthDate = faker.date.birthdate({min: 35, max: 65, mode: 'age'});
        const startDate = faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date()), new Date());
        const department = faker.helpers.arrayElement(departments);
        const homeState = faker.address.stateAbbr();
        const zipCode = faker.address.zipCodeByState(homeState);
        const street = faker.address.streetAddress();
        const city = faker.address.cityName();

        employees.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "birthDate": birthDate,
            "startDate": startDate,
            "department": department,
            "homeState": homeState,
            "zipCode": zipCode,
            "street": street,
            "city": city,
        });

        employees.sort((a, b) => {
            return b.id - a.id;
        });
    }

    return {"data": employees}
};

const employees = generateEmployees(1);

export default employees.data;