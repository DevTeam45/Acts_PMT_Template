class AddSubscriptionModal {
    constructor(supplierID, supplierName, industryID, supplierWebsite, typeID, subscriptionName, startDate, endDate, billdingDate, price, cardUsed, createdBy, approvedBy) {
      this.supplierID = supplierID;
      this.supplierName = supplierName;
      this.industryID = industryID;
      this.supplierWebsite = supplierWebsite;
      this.typeID = typeID;
      this.subscriptionName = subscriptionName;
      this.startDate = new Date(startDate);
      this.endDate = new Date(endDate);
      this.billdingDate = new Date(billdingDate);
      this.price = price;
      this.cardUsed = cardUsed;
      this.createdBy = createdBy;
      this.approvedBy = approvedBy;
    }
  }
  class BooleanResponseData {
    constructor(responseDate, status, message, title, resultCount, results) {
      this.responseDate = new Date(responseDate);
      this.status = status;
      this.message = message;
      this.title = title;
      this.resultCount = resultCount;
      this.results = results;
    }
  }
  class Industry {
    constructor(industryID, name, description, createdDateTime, modifiedDateTime) {
      this.industryID = industryID;
      this.name = name;
      this.description = description;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class IndustryListResponseData {
    constructor(responseDate, status, message, title, resultCount, results) {
      this.responseDate = new Date(responseDate);
      this.status = status;
      this.message = message;
      this.title = title;
      this.resultCount = resultCount;
      this.results = results.map(industry => new Industry(industry.industryID, industry.name, industry.description, industry.createdDateTime, industry.modifiedDateTime));
    }
  }
  class IndustryResponseData {
    constructor(responseDate, status, message, title, resultCount, results) {
      this.responseDate = new Date(responseDate);
      this.status = status;
      this.message = message;
      this.title = title;
      this.resultCount = resultCount;
      this.results = new Industry(results.industryID, results.name, results.description, results.createdDateTime, results.modifiedDateTime);
    }
  }
  class SubscriptionStatus {
    constructor(statusID, name, description, color, createdDateTime, modifiedDateTime) {
      this.statusID = statusID;
      this.name = name;
      this.description = description;
      this.color = color;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class Supplier {
    constructor(supplierID, name, registrationNumber, vatNumber, beeeLevel, taxNumber, industryID, website, telephone, email, tags, createdDateTime, modifiedDateTime) {
      this.supplierID = supplierID;
      this.name = name;
      this.registrationNumber = registrationNumber;
      this.vatNumber = vatNumber;
      this.beeeLevel = beeeLevel;
      this.taxNumber = taxNumber;
      this.industryID = industryID;
      this.website = website;
      this.telephone = telephone;
      this.email = email;
      this.tags = tags;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class SupplierAccount {
    constructor(accountID, supplierID, name, number, link, email, username, password, isActive, createdDateTime, modifiedDateTime) {
      this.accountID = accountID;
      this.supplierID = supplierID;
      this.name = name;
      this.number = number;
      this.link = link;
      this.email = email;
      this.username = username;
      this.password = password;
      this.isActive = isActive;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class SupplierAddress {
    constructor(addressID, supplierID, name, addressLine1, addressLine2, addressLine3, suburb, city, code, province, country, geoLocationA, geoLocationL, isActive, createdDateTime, modifiedDateTime) {
      this.addressID = addressID;
      this.supplierID = supplierID;
      this.name = name;
      this.addressLine1 = addressLine1;
      this.addressLine2 = addressLine2;
      this.addressLine3 = addressLine3;
      this.suburb = suburb;
      this.city = city;
      this.code = code;
      this.province = province;
      this.country = country;
      this.geoLocationA = geoLocationA;
      this.geoLocationL = geoLocationL;
      this.isActive = isActive;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class SupplierContact {
    constructor(contactID, addressID, supplierID, firstName, middleName, surname, telephone, cellphone, email, position, isActive, createdDateTime, modifiedDateTime) {
      this.contactID = contactID;
      this.addressID = addressID;
      this.supplierID = supplierID;
      this.firstName = firstName;
      this.middleName = middleName;
      this.surname = surname;
      this.telephone = telephone;
      this.cellphone = cellphone;
      this.email = email;
      this.position = position;
      this.isActive = isActive;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class SupplierSubscription {
    constructor(subscriptionID, supplierID, typeID, statusID, name, startDate, expiryDate, billingDate, price, cardUsed, createdBy, approvedBy, createdDateTime, modifiedDateTime) {
      this.subscriptionID = subscriptionID;
      this.supplierID = supplierID;
      this.typeID = typeID;
      this.statusID = statusID;
      this.name = name;
      this.startDate = new Date(startDate);
      this.expiryDate = new Date(expiryDate);
      this.billingDate = new Date(billingDate);
      this.price = price;
      this.cardUsed = cardUsed;
      this.createdBy = createdBy;
      this.approvedBy = approvedBy;
      this.createdDateTime = createdDateTime;
      this.modifiedDateTime = modifiedDateTime;
    }
  }
  class ResponseData {
    constructor(responseDate, status, message, title, resultCount, results, resultClass) {
      this.responseDate = new Date(responseDate);
      this.status = status;
      this.message = message;
      this.title = title;
      this.resultCount = resultCount;
      // Dynamically handle results based on the passed resultClass
      if (Array.isArray(results)) {
        this.results = results.map(result => new resultClass(result));
      } else if (results !== null && resultClass) {
        this.results = new resultClass(results);
      } else {
        this.results = results;
      }
    }
  }
  
  class SupplierSubscriptionViewModel {
    constructor({
      subscriptionID,
      subscriptionName,
      subscriptionType,
      subscriptionStatus,
      color,
      startDate,
      expiryDate,
      price,
      supplierID,
      supplierName
    }) {
      this.subscriptionID = subscriptionID;
      this.subscriptionName = subscriptionName;
      this.subscriptionType = subscriptionType;
      this.subscriptionStatus = subscriptionStatus;
      this.color = color;
      this.startDate = new Date(startDate);
      this.expiryDate = new Date(expiryDate);
      this.price = price;
      this.supplierID = supplierID;
      this.supplierName = supplierName;
    }
  }
  
  class SupplierSubscriptionViewModelListResponseData {
    constructor({ responseDate, status, message, title, resultCount, results }) {
      this.responseDate = new Date(responseDate);
      this.status = status;
      this.message = message;
      this.title = title;
      this.resultCount = resultCount;
      // Map each item in the results array to a new SupplierSubscriptionViewModel instance
      this.results = results.map(result => new SupplierSubscriptionViewModel(result));
    }
  }
  