# 🌐 CVE LIST

A comprehensive CVE tracking application that utilizes the NVD CVE API to fetch, store, and visualize CVE data. This project ensures data quality through cleansing and de-duplication and offers an intuitive user interface for seamless interaction. 

---

## Features 📊

1. **API Integration:**
   - Fetch CVE data from the [NVD CVE API](https://services.nvd.nist.gov/rest/json/cves/2.0).
   - Supports chunked responses for large datasets using `startIndex` and `resultsPerPage`.

2. **Database Synchronization:**
   - Periodically sync CVE data into the database.
   - Supports both full data refresh and incremental updates.

3. **Search & Filter:**
   - Filter CVEs by:
     - **CVE ID**
     - **Last modified in N days**
     - etc..

4. **Interactive UI:**
   - Display results in a tabular format with pagination and sorting.
   - Options for selecting results per page (10, 50, 100).
   - View detailed information on clicking a CVE row.

5. **Error Handling:**
   - Handles API call failures and displays appropriate error messages.

6. **Code Quality:**
   - Follows best practices and standards.
   - Includes unit tests for critical functionalities.

---

## Project Structure 🗂

### Backend:
- **Server:** `server.js`
- **Routes:** `routes/cveRoutes.js`
- **Models:** `models/Cve.js`
- **Services:** `services/syncService.js`
- **Database Configuration:** `config/db.js`

### Frontend:
- **React Components:**  [Using React over just using HTML, CSS, and JavaScript because it provides a structured framework for building complex web applications, enabling easier component reusability, efficient state management, and optimized performance through features like the virtual DOM, making it significantly better for managing large and dynamic web interfaces compared to writing raw HTML, CSS, and JavaScript code.]
  - `App.js` (Main application logic)
  - `CveDetail.js` (Detailed CVE view)
- **Styling:** Bootstrap-based responsive design.
- **Pagination and Sorting:** Server-side and client-side integrated.

---

## Prerequisites 🔨

1. **Node.js** (v14 or higher)
2. **MongoDB**
3. **NPM** or **Yarn**

---

## Installation 🚀

### Backend:
1. Clone the repository:
   ```bash
   git clone https://github.com/Sahil0502/NVD---CVE-API.git
   cd cve-tracker/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/cve-tracker
   NVD_API=https://services.nvd.nist.gov/rest/json/cves/2.0
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend:
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## Usage 🕹

### Routes:
- **List CVEs:** `/cves/list`
- **View CVE Details:** `/cves/:cveId`

### UI Features:
- View and paginate through CVE records.
- Filter data by various parameters.
- Click on a row to view detailed CVE information.

---

## API Documentation 

### Endpoints:

#### 1. Fetch All CVEs
**GET** `/api/cves`

Query Parameters:
- `startIndex` (default: 0)
- `resultsPerPage` (default: 10)

#### 2. Fetch CVE by ID
**GET** `/api/cves/:cveId`

#### 3. Filter CVEs
**GET** `/api/cves/filter`


## Technologies Used 🚀

### Backend:
- Node.js
- Express.js
- MongoDB

### Frontend:
- React.js
- Bootstrap

### Others:
- NVD CVE API
- Mongoose
- Axios

---

## Frontend UI 
Page-1
![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/29b7d099aa8ed48866fbf9685ea549433e4d39d5/images/page1.png)

Page-2
![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/29b7d099aa8ed48866fbf9685ea549433e4d39d5/images/page2.png)


## VSCode Screenshot 

![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/29b7d099aa8ed48866fbf9685ea549433e4d39d5/images/f1.png)

![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/29b7d099aa8ed48866fbf9685ea549433e4d39d5/images/f2.png)

## Testing
Testing-1 API is tested using POSTMAN: 
Filtered data on http://localhost:5000/api/cves
![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/1ae945e30e70ffa3fc3006abb7b7aa0747a895d8/images/test1.png)

Testing-2 Details of selected CVE LIST:
![image](https://github.com/mohitrajsinghit/securin_assignment1/blob/1ae945e30e70ffa3fc3006abb7b7aa0747a895d8/images/test2.png)



## Acknowledgments

- [NVD CVE API Documentation](https://nvd.nist.gov/developers/vulnerabilities)
- Open source contributors

---

## Contact
For questions or support, please reach out to:
- **📧 Email**: [mohitrajsingh2601@gmail.com](mohitrajsingh2601@gmail.com)
- **🔗 LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/workwithmohiit/)

---

