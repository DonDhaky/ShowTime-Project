import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  is_admin: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  favorite_groups: string;

  @Prop()
  wishlist: string;

  @Prop()
  booked: string;

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;

  next();
});


/*
// user.model.ts
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    is_admin: {type: String, required: true,},
    username: {type: String, required: true, unique: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true,},
    favorite_groups: {type: String,},
    wishlist: {type: String,},
    booked: {type: String,},
  },
  { timestamps: true }
);

export interface User extends mongoose.Document {
    is_admin: string;
    username: string;
    email: string;
    password: string;
    favorite_groups: string;
    wishlist: string;
    booked: string;
}
*/
