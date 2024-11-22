# API Documentation
Last updated 11/22/2024

The base API url is http://localhost:{portnumber}/api/

## Root endpoint

| **url**         | **Method** | **Description**                 |
|-----------------|------------|---------------------------------|
| /?patient_id=   | GET        | Returns all patient data.       |

### Parameters:
| Name                 | Data Type  | Required/Optional | Description                         |
|----------------------|------------|-------------------|-------------------------------------|
| patient_id           | string     | Optional          | The patient's id                    |

### Responses:
```200``` - Successful request  
```404``` - Error - user not found