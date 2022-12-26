import {faker} from '@faker-js/faker';
import departmentList from './departments';

/**
 * Function to randomize departments in the existing file.
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

        employees.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "birthDate": birthDate,
            "startDate": startDate,
            "department": department,
            "homeState": homeState,
            "zipCode": zipCode,
        });

        employees.sort(function (a, b) {
            return b.id - a.id;
        });
    }

    return {"data": employees}
};

const employees = generateEmployees(15);

export default employees.data;