Below is a README file outlining the APIs available in the system along with their usage instructions:

---

# API Documentation

This document provides information about the APIs available in the system and how to use them.

## Sign Up

### Description

Allows users to sign up and create an account.

### Endpoint

POST /signup

### Request Body

```json
{
  "userid": "test2",
  "vehicleid": "hero2",
  "userType": "Owner",
  "contactNumber": "1234567890",
  "email": "test2@test.test",
  "address": "kgp",
  "password": "12345678"
}
```

---

## Login

### Description

Allows users to log in to their account.

### Endpoint

POST /login

### Request Body

```json
{
  "userid": "test",
  "vehicleid": "hero",
  "password": "12345678"
}
```

---

## Get Current Frequency

### Description

Retrieves the current frequency.

### Endpoint

GET qts.iitkgp.ac.in/last/gail/current/5

---

## Get Fault History

### Description

Retrieves the fault history for a vehicle.

### Endpoint

GET /fault-history/get

### Request Body

```json
{
  "vehicleid": "hero"
}
```

---

## Add Fault History

### Description

Adds a fault history entry for a vehicle.

### Endpoint

POST /fault-history/add

### Request Body

```json
{
  "vehicleid": "hero",
  "fault_type_id": "1",
  "description": "Current Overloaded"
}
```

---

## Update Vehicle Data

### Description

Updates battery percentage and health status of a vehicle.

### Endpoint

POST /vehicles/update

### Request Body

```json
{
  "vehicle_id": "hero",
  "battery_percentage": "70",
  "health_status": "80"
}
```

---

## Add Service History

### Description

Adds a service history entry for a vehicle.

### Endpoint

POST /service-history/add

### Request Body

```json
{
  "vehicleid": "hero",
  "description": "Current overloaded repaired"
}
```

---

## Get Service History

### Description

Retrieves the service history for a vehicle.

### Endpoint

GET /service-history/get

### Request Body

```json
{
  "vehicleid": "hero"
}
```

---

## Get Fault History

### Description

Retrieves the fault history for a vehicle.

### Endpoint

GET /fault-history/get

### Request Body

```json
{
  "vehicleid": "hero"
}
```

---

## Update Vehicle Data

### Description

Updates battery percentage and health status of a vehicle.

### Endpoint

POST /vehicles/update

### Request Body

```json
{
  "vehicle_id": "hero",
  "battery_percentage": "70",
  "health_status": "80"
}
```

---

Ensure to replace `"hero"` and other placeholders with actual values when making requests to the APIs.

---

This README provides a comprehensive guide on how to use the available APIs in the system. If you have any further questions or need assistance, feel free to reach out.

---
