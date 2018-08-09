# Server

### list of main page routes :

| ROUTE               | HTTP | Description               |
| ------------------- | ---- | ------------------------- |
| /api                | GET  | Main Page                 |
| /api/register       | POST | Create a user             |
| /api/login          | POST | Login a user              |
| /api/login/facebook | POST | Login a user via facebook |
| /darksky            | GET  | Display Current Weather   |

### list of Event routes :

| ROUTE                         | HTTP | Description                     |
| ----------------------------- | ---- | ------------------------------- |
| /api/event/category           | GET  | Display Categories of Events    |
| /api/event/search             | GET  | Search Category                 |
| /api/event/category/:location | GET  | Display Specific Event Location |

### list of Meetup routes :

| ROUTE                          | HTTP | Description                     |
| ------------------------------ | ---- | ------------------------------- |
| /api/meetup/search             | GET  | Display                         |
| /api/meetup/category           | GET  | Display Categories of Meetups   |
| /api/meetup/category/:location | GET  | Display Specific Event Location |
