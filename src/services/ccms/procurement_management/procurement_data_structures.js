class ApprovalStatus {
    constructor(statusID, name, description, color, icon, modifiedDateTime, createdDateTime) {
      this.statusID = statusID;
      this.name = name;
      this.description = description;
      this.color = color;
      this.icon = icon;
      this.modifiedDateTime = modifiedDateTime;
      this.createdDateTime = createdDateTime;
    }
  
    // Getters and Setters
    getStatusID() {
      return this.statusID;
    }
  
    setStatusID(statusID) {
      this.statusID = statusID;
    }
  
    // Include getters and setters for other properties similarly...
  }
  
  class OrderRequest {
    constructor(requestID, memberID, locationID, departmentID, statusID, typeID, requestDate, description, modifiedDateTime, createdDateTime) {
      this.requestID = requestID;
      this.memberID = memberID;
      this.locationID = locationID;
      this.departmentID = departmentID;
      this.statusID = statusID;
      this.typeID = typeID;
      this.requestDate = requestDate;
      this.description = description;
      this.modifiedDateTime = modifiedDateTime;
      this.createdDateTime = createdDateTime;
    }
  
    // Getters and Setters
    getRequestID() {
      return this.requestID;
    }
  
    setRequestID(requestID) {
      this.requestID = requestID;
    }
  
    // Include getters and setters for other properties similarly...
  }
  
  class RequestApproval {
    constructor(requestID, quotationID, approvalMemberID, statusID, approvedDate, reason, operationalImpact, modifiedDateTime, createdDateTime) {
      this.requestID = requestID;
      this.quotationID = quotationID;
      this.approvalMemberID = approvalMemberID;
      this.statusID = statusID;
      this.approvedDate = approvedDate;
      this.reason = reason;
      this.operationalImpact = operationalImpact;
      this.modifiedDateTime = modifiedDateTime;
      this.createdDateTime = createdDateTime;
    }
  
    // Getters and Setters
    getRequestID() {
      return this.requestID;
    }
  
    setRequestID(requestID) {
      this.requestID = requestID;
    }
  
    // Include getters and setters for other properties similarly...
  }
  