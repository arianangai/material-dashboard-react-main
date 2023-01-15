/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";

import { useEffect, useState } from "react";



// export default function data() {
const GetForm = () => {
  const [getForm, setGetForm] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/forms/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetForm(data);
      });
  }, []);

  console.log(getForm);

  const runItems = getForm.map(([
    firstname,
    lastname,
    email,
    phone,
    jobtitle,
    centername,
    businessdesc,
    centerstatus,
    licensecap,
    country,
  ]) => ({
      profile: 
        <Profile image={team2} firstName={firstname} lastName={lastname} jobTitle={jobtitle} />,
      contact: <Contact title={phone} description={email} />,
      center_details: <Details title={centername} description={centerstatus} />,
      business_description: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {businessdesc}{country}
        </MDTypography>
      ),
      license_capacity: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {licensecap}
        </MDTypography>
      ),
    })

    // {
    //   return{
    //     firstname : firstname,
    //     lastname : lastname,
    //     email : email,
    //     phone : phone,
    //     jobtitle : jobtitle,
    //     centername : centername,
    //     businessdesc : businessdesc,
    //     centerstatus : centerstatus,
    //     licensecap : licensecap,
    //     country : country,
    //   }
    // }


  )



  const Profile = ({ image, firstName, lastName, jobTitle }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} firstname={firstName} lastname={lastName} jobtitle={jobTitle} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {firstName} {lastName}
        </MDTypography>
        <MDTypography variant="caption">{jobTitle}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Contact = ({ emailAddress, phoneNo }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {phoneNo}
      </MDTypography>
      <MDTypography variant="caption">{emailAddress}</MDTypography>
    </MDBox>
  );

  const Details = ({ cName, countryName, cStatus }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {cName}, {countryName}
      </MDTypography>
      <MDTypography variant="caption">{cStatus}</MDTypography>
    </MDBox>
  );




  return {
    columns: [
      { Header: "profile", accessor: "profile", width: "45%", align: "left" },
      { Header: "contact", accessor: "contact", align: "left" },
      { Header: "center details", accessor: "center_details", align: "center" },
      { Header: "business description", accessor: "business_description", align: "center" },
      { Header: "license capacity", accessor: "license_capacity", align: "center" },
    ],

    rows: [
      { runItems },
    ],
  }
}


export default GetForm;


