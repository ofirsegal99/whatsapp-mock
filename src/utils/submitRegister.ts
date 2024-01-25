'use server'
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const submitRegister = async (user:RegisterScheme) => {
    const {email,password,nickname,phonenumber} = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    const phoneNumberNumbersOnly = phonenumber.substring(0,3) + phonenumber.substring(4)
    if (existingUser) {
        return {error:'Email already in use!'};
    }
    await db.user.create({
        data: {
          name:nickname,
          email,
          password: hashedPassword,
          phonenumber:phoneNumberNumbersOnly
        },
      });

      return {success:'Your account has been created.'};
}