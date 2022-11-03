import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;
}

@ObjectType()
export class LoginReturn {
  @Field()
  token: string;

  @Field()
  name: string;
}
