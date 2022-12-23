import {faker} from '@faker-js/faker';
import departmentList from './departments'

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

        employees.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "birthDate": birthDate,
            "startDate": startDate,
            "department": department,
        });

        employees.sort(function (a, b) {
            return b.id - a.id;
        });
    }

    return {"data": employees}
};

const employees = generateEmployees(15);

/*const employees =
    [
        {
            id: 5,
            firstName: faker.name.firstName('male'),
            lastName: faker.name.lastName('male'),
            birthDate: faker.date.birthdate({min: 35, max: 65, mode: 'age'}),
            startDate: faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date), new Date()),
            department: faker.helpers.arrayElement(departments)
        },
        {
            id: 4,
            firstName: faker.name.firstName('female'),
            lastName: faker.name.lastName('female'),
            birthDate: faker.date.birthdate({min: 25, max: 65, mode: 'age'}),
            startDate: faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date), new Date()),
            department: faker.helpers.arrayElement(departments)
        },
        {
            id: 3,
            firstName: faker.name.firstName('male'),
            lastName: faker.name.lastName('male'),
            birthDate: faker.date.birthdate({min: 25, max: 65, mode: 'age'}),
            startDate: faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date), new Date()),
            department: faker.helpers.arrayElement(departments)
        },
        {
            id: 2,
            firstName: faker.name.firstName('female'),
            lastName: faker.name.lastName('female'),
            birthDate: faker.date.birthdate({min: 25, max: 65, mode: 'age'}),
            startDate: faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date), new Date()),
            department: faker.helpers.arrayElement(departments)
        },
        {
            id: 1,
            firstName: faker.name.firstName('female'),
            lastName: faker.name.lastName('female'),
            birthDate: faker.date.birthdate({min: 25, max: 65, mode: 'age'}),
            startDate: faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date), new Date()),
            department: faker.helpers.arrayElement(departments)
        }
    ];*/

export default employees.data;