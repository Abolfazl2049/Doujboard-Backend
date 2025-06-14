import AdminJS, {DefaultAuthProvider} from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSSequelize from "@adminjs/sequelize";
import {dark, light, noSidebar} from "@adminjs/themes";
import userDb from "#src/services/user/db.js";
import doujDb from "#src/services/douj/db.js";
const authenticate = (data: {email: string; password: string}, ctx: any) => {
  if (data.email === "admin" && data.password === "abooliIsKing") return {email: data.email};
  else return null;
};

const authProvider = new DefaultAuthProvider({
  // @ts-ignore
  authenticate
});
AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database
});

const admin = new AdminJS({
  resources: [userDb.User, doujDb.Category, doujDb.Douj],
  defaultTheme: light.id,
  availableThemes: [dark, light, noSidebar],
  branding: {
    companyName: "Doujboard"
  }
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  cookiePassword: "test",
  provider: authProvider
});

export {admin, adminRouter};
