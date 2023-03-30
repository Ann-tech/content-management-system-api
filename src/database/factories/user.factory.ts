import { define } from 'typeorm-seeding'
import { UserEntity } from "src/typeorm/entities/user.entity"

//generates user data
define(UserEntity, (faker: typeof Faker) => {
    const gender = faker.datatype.number(1)
    const firstName = faker.name.firstName(gender)
    const lastName = faker.name.lastName(gender)
  
    const user = new UserEntity()
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = `${firstName}@gmail.com`;
    user.password = faker.random.word()
    return user
  })