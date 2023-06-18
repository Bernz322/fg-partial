import { memo, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import CountUp from "react-countup";
import Card from "../../../components/Card";

const Widgetchart = memo((props) => {
   const chart1 = {
      options: {
         chart: {
            sparkline: {
               enabled: true,
            },
         },
         plotOptions: {
            bar: {
               horizontal: false,
               columnWidth: "50%",
               borderRadius: 5,
            },
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            show: true,
            width: 2,
            curve: "smooth",
            colors: ["transparent"],
         },
         xaxis: {
            categories: [
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug",
               "Sep",
               "Oct",
            ],
         },
         // yaxis: {
         //   title: {
         //     text: "$ (thousands)",
         //   },
         // },
         fill: {
            opacity: 1,
            colors: ["#344ED1", "#B91D12", "#D48918"],
         },
         tooltip: {
            y: {
               formatter: function (val) {
                  return "$ " + val + " thousands";
               },
            },
         },
      },
      series: [
         {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58],
         },
         {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105],
         },
         {
            name: "Free Cash Flow",
            data: [24, 20, 15, 23, 25, 30]
         }
      ],
   };
   const chart3 = {
      options: {
         colors: ["#344ed1"],
         chart: {

            sparkline: {
               enabled: true
            },
            group: 'sparklines',

         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            width: 3,
            curve: 'smooth'
         },
         fill: {
            type: 'gradient',
            gradient: {
               shadeIntensity: 1,
               opacityFrom: 0.5,
               opacityTo: 0,
            }
         },
         xaxis: {
            type: 'datetime',
            categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
         },
         tooltip: {
            x: {
               format: 'dd/MM/yy HH:mm'
            },
         }
      },
      series: [{
         name: 'series1',
         data: [60, 15, 50, 30, 70]
      },],

   };

   const iqchartbox1 = {
      options: {
         colors: ["#344ed1"],
         chart: {
            sparkline: {
               enabled: true,
            },
            zoom: {
               enabled: false
            }
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'straight'
         },
         title: {
            text: '',
            align: 'left'
         },

         xaxis: {
            categories: ['Jan', 'Feb', 'Mar'],
         },
         tooltip: {
            enabled: false,
         }
      },
      series: [{
         name: "Total sales",
         data: [10, 10, 35, 10]
      }]
   };

   const servicechart1 = {
      options: {
         colors: ["#344ed1"],
         chart: {
            sparkline: {
               enabled: true,
            }
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'smooth'
         },
         xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z"]
         },
         tooltip: {
            enabled: false,
         },
      },
      series: [{
         name: 'series1',
         data: [25, 30, 22, 29]
      }]
   };

   const ethernetchart1 = {
      options: {
         colors: ["#3a57e8"],
         chart: {
            zoom: {
               enabled: false
            },
            sparkline: {
               enabled: true,
            },

         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'smooth',
            width: 3
         },
         title: {
            text: '',
            align: 'left'
         },
         xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         },
         tooltip: {
            enabled: false,
         }
      },
      series: [
         {
            name: "Desktops",
            data: [5, 30, 6, 20, 5, 18],
         },
      ],

   };

   const chart9 = {
      options: {
         colors: ["#07750b"],
         chart: {
            sparkline: {
               enabled: true,
            }
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'smooth'
         },
         xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z"]
         },
         tooltip: {
            enabled: false,
         },
      },
      series: [{
         name: 'series1',
         data: [25, 27, 24, 26]
      }]

   };

   return (
      <Fragment>
         <Row>
            <Col lg="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between">
                        <div className="bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <div>
                           <span>Net Worth</span>
                        </div>
                     </div>
                     <div className="text-center">
                        <h2 className="counter"><CountUp start={4} end={65} duration={3} />M</h2>
                        <div>
                           <span className="text-success">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                                 <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              10%
                           </span>
                           <span>Increased</span>
                        </div>
                     </div>
                  </Card.Body>
                  <Chart options={chart3.options} series={chart3.series} type="area" height="80" />
               </Card>
            </Col>
         </Row>
         <Row>
            <Col lg="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between">
                        <div className="bg-soft-primary rounded p-3">
                           <svg width="24px" height="24px" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M13,2.05C18.05,2.55 22,6.82 22,12C22,13.45 21.68,14.83 21.12,16.07L18.5,14.54C18.82,13.75 19,12.9 19,12C19,8.47 16.39,5.57 13,5.08V2.05M12,19C14.21,19 16.17,18 17.45,16.38L20.05,17.91C18.23,20.39 15.3,22 12,22C6.47,22 2,17.5 2,12C2,6.81 5.94,2.55 11,2.05V5.08C7.61,5.57 5,8.47 5,12A7,7 0 0,0 12,19M12,6A6,6 0 0,1 18,12C18,14.97 15.84,17.44 13,17.92V14.83C14.17,14.42 15,13.31 15,12A3,3 0 0,0 12,9L11.45,9.05L9.91,6.38C10.56,6.13 11.26,6 12,6M6,12C6,10.14 6.85,8.5 8.18,7.38L9.72,10.05C9.27,10.57 9,11.26 9,12C9,13.31 9.83,14.42 11,14.83V17.92C8.16,17.44 6,14.97 6,12Z" />
                           </svg>
                        </div>
                        <div>
                           <span>Total Sales</span>
                        </div>
                     </div>
                     <div className="d-flex justify-content-between align-items-center">
                        <h6 className="counter"><b>$<CountUp start={789} end={18378} duration={3} /></b></h6>
                        <Chart options={iqchartbox1.options} series={iqchartbox1.series} type="line" width="100" height="50" />
                        <div className=" d-flex align-items-center text-primary">
                           <b>+14%</b>
                           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                           </svg>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col lg="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between mb-3">
                        <div>
                           <span>Invoice Sent</span>
                        </div>
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                           </svg>
                        </div>
                     </div>
                     <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <div className="border rounded p-3 bg-soft-primary me-3">
                              <svg width="20" height="20" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M5 19V17H8.13A4.13 4.13 0 0 0 9.4 19M19 19H14.6A4.13 4.13 0 0 0 15.87 17H19M19 15H14V16A2 2 0 0 1 10 16V15H5V5H19Z" />
                              </svg>
                           </div>
                           <h2 className="counter"><CountUp start={35} end={352} duration={3} /></h2>
                        </div>
                        <div className="pt-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill={props.colorprimarymode}>
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                           </svg>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col sm="6" lg="6" xl="3">
               <Card>
                  <Card.Body className="iq-box-relative">
                     <div className="iq-service d-flex align-items-center justify-content-between" style={{ position: "relative" }}>
                        <div className="service-data">
                           <h3 className="counter"><CountUp start={4} end={24} duration={3} />%</h3>
                           <p className="mb-0">Service used</p>
                        </div>
                        <Chart options={servicechart1.options} series={servicechart1.series} type="area" width="140" height="65" />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="12" className="row m-0 p-0 iq-duration-block">
               <Col sm="6" md="6" lg="2">
                  <Card>
                     <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="border rounded p-3 bg-soft-primary">
                              <svg width="24" height="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z" />
                              </svg>
                           </div>
                        </div>
                        <div className="mt-5">
                           <h2>2.14s</h2>
                           <p>Frontend time</p>
                        </div>
                        <Chart options={ethernetchart1.options} series={ethernetchart1.series} type="line" height="60" />
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="12" lg="4">
                  <Card>
                     <Card.Body>
                        <h4 className="text-uppercase text-black mb-0">Session(Now)</h4>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                           <h2 className=" text-black">12</h2>
                           <div className="text-left">
                              <p className="m-0 text-uppercase">1 Hours Ago</p>
                              <div className="mb-1 text-black">1500<span className="text-danger">
                                 <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2744 19.75V4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M18.299 13.7002L12.275 19.7502L6.25 13.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 </svg>
                                 3.25%</span>
                              </div>
                              <p className="m-0 text-uppercase">1 Day Ago</p>
                              <div className="mb-1 text-black">1890<span className="text-success">
                                 <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7261 4.25L11.7261 19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M5.70149 10.2998L11.7255 4.2498L17.7505 10.2998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 </svg>
                                 1.00%</span>
                              </div>
                              <p className="m-0 text-uppercase">1 Week Ago</p>
                              <div className="text-black">1260<span className="text-danger">
                                 <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2744 19.75V4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M18.299 13.7002L12.275 19.7502L6.25 13.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 </svg>
                                 9.87%</span>
                              </div>
                           </div>
                        </div>
                        <Chart options={chart9.options} series={chart9.series} type="area" width="140" height="65" />
                     </Card.Body>
                  </Card>
               </Col>
            </Col>
         </Row>
         <Row>
            <Col lg="6">
               <Card className="bg-soft-primary">
                  <Card.Body>
                     <div className="d-flex flex-column">
                        <div className="mb-3">
                           <h2>Analytics</h2>
                           <span className="text-primary">Status</span>
                        </div>
                        <div className="border rounded bg-soft-primary">
                           <Chart options={chart1.options} series={chart1.series} type="bar" height="250" />
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Upcoming</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                        <div>
                           <h5>Psychology Exam</h5>
                           <p>carry out writing exam in school</p>
                        </div>
                        <div>
                           <span className="text-danger">19 jan</span>
                           <p>45 Minutes</p>
                        </div>
                        <button type="button" className="btn btn-outline-danger btn-sm">
                           <span className="btn-inner">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                           </span>
                        </button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
}
);

Widgetchart.displayName = "Widgetchart";
export default Widgetchart;
