export enum HandelError {
  ShowAndReturn = 1,
  ShowAndKill = 2,
  HideAndReturn = 3,
  HideAndKill = 4,
}
export enum FuncStatus {
  True = 1,
  False = 2,
  Error = 3,
}

export enum Login {
  userLogin = "userLogin"
}

export enum Dealer {
  getDealerList = "getDealerList",
  getDealerDetail = "getDealerDetail",
  getOrderDetail = "getOrderDetail",
  sendSMS = "sendSMS",
  getProductCategory = "getProductCategory",
  getProducts = "getProducts",
  getCalculateNetPayableDetails = "getCalculateNetPayableDetails",
  SaveDealerOrderForPlatinumUsers = "SaveDealerOrderForPlatinumUsers"
}

