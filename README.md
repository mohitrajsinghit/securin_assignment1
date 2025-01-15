# 🌐 CVE LIST ASSIGNMENT

The CVE API is used to easily retrieve information on a single CVE or a collection of
 CVE from the NVD. Pls refer to the below NVD CVE documentation to get more
 information.

 https://nvd.nist.gov/developers/vulnerabilities

 [Click here to watch the project demo video](https://github.com/mohitrajsinghit/securin_assignment1/blob/06e7768602050dff06e5fe59e978e0803f13a28f/images/Project_Demo_Video.mp4)
 
 if the video is not working the please download from the link and watch :)

---

## Features

1. **API Integration:**
   - Fetch CVE data from the [NVD CVE API](https://services.nvd.nist.gov/rest/json/cves/2.0).
   - Supports chunked responses for large datasets using `startIndex` and `resultsPerPage`.

2. **Database Synchronization:**
   - Periodically sync CVE data into the database.
   - It Supports both full data refresh and incremental updates.

3. **Interactive UI:**
   - Display results in a tabular format with pagination.
   - Options for selecting results per page (10, 50, 100).
   - Detailed information on clicking a CVE row.
---

## launch this Project

### React-Frontend:
1. Navigate to the frontend directory:
   ```bash
   cd ../react-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

### Backend:
1. Clone the repository:
   ```bash
   git clone https://github.com/mohitrajsinghit/securin_assignment1.git
   cd Assignment1/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://125015014:<FOR-THE-PASS-USE-SAME-AS-USERID>@cluster0.huwpscz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   NVD_API=https://services.nvd.nist.gov/rest/json/cves/2.0

   Since you need to access the records from my database where have to give my mongo_uri_api (once this assignmnt is completed it will be successfully deleted)
   if any issues please contact me 
   📧 Email - mohitrajsingh2601@gmail.com
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## Usage

### Routes:
- **List CVEs:** `/cves/list`
- **View CVE Details:** `/cves/:cveId`

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


## Tech Used 

### Frontend:
- React.js
- Bootstrap

### Backend:
- Node.js
- Express.js
- MongoDB Atlas

### Others:
- POSTMAN - Backend Testing
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
http://localhost:5000/api/cves/CVE-1999-1467
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

