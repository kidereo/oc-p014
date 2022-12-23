import {faker} from '@faker-js/faker';
import sampleDepartments from './departments'

/**
 * Function to randomize departments in the existing file.
 */
const departments = sampleDepartments.map(function (item) {
    return item[Object.keys(item)[1]];
});

/**
 * Generate a bunch of random employees.
 *
 * @returns {{data: Array}}
 */
const generateEmployees = (number) => {
    let employees = [];
    for (let id = 1; id <= number; id++) {
        let gender = faker.name.sexType();
        let firstName = faker.name.firstName(gender);
        let lastName = faker.name.lastName(gender);
        let birthDate = faker.date.birthdate({min: 35, max: 65, mode: 'age'});
        let startDate = faker.date.between((date => date.setFullYear(date.getFullYear() - 10))(new Date()), new Date());
        let department = faker.helpers.arrayElement(departments);

        employees.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "birthDate": birthDate,
            "startDate": startDate,
            "department": department,
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