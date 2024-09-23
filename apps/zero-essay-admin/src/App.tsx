import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PackageModelList } from "./packageModel/PackageModelList";
import { PackageModelCreate } from "./packageModel/PackageModelCreate";
import { PackageModelEdit } from "./packageModel/PackageModelEdit";
import { PackageModelShow } from "./packageModel/PackageModelShow";
import { CreditList } from "./credit/CreditList";
import { CreditCreate } from "./credit/CreditCreate";
import { CreditEdit } from "./credit/CreditEdit";
import { CreditShow } from "./credit/CreditShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { AiRequestList } from "./aiRequest/AiRequestList";
import { AiRequestCreate } from "./aiRequest/AiRequestCreate";
import { AiRequestEdit } from "./aiRequest/AiRequestEdit";
import { AiRequestShow } from "./aiRequest/AiRequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ZeroEssay"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PackageModel"
          list={PackageModelList}
          edit={PackageModelEdit}
          create={PackageModelCreate}
          show={PackageModelShow}
        />
        <Resource
          name="Credit"
          list={CreditList}
          edit={CreditEdit}
          create={CreditCreate}
          show={CreditShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="AiRequest"
          list={AiRequestList}
          edit={AiRequestEdit}
          create={AiRequestCreate}
          show={AiRequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
