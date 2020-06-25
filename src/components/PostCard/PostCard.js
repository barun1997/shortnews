import React from "react";
import { Card, Typography } from "antd";
import SwipeableViews from "react-swipeable-views";
import "antd/dist/antd.css";

function PostCard() {
  return (
    <SwipeableViews enableMouseEvents>
      <Card
        title={
          <Typography.Title style={{ fontSize: "4vw", width: "100%" }}>
            {" "}
            केही स्थानमा भारी वर्षा
          </Typography.Title>
        }
        style={{
          height: "80vh",
          width: "80%",
          margin: "auto",
          borderWidth: "3px",
        }}
      >
        <img
          alt="example"
          style={{ height: "30vh", width: "100%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Monsoon_clouds_near_Nagercoil.jpg"
        />
        <p style={{ fontSize: "3vw", maxHeight: "40vh" }}>
          मनसुन सक्रिय भएकाले केही स्थानमा भारी वर्षा हुने र नदीहरुमा बहाव बढ्ने
          भएकाले सतर्क रहन जल तथा मौसम विज्ञान विभागको बाढी पूर्वानुमान
          महाशाखाले अनुरोध गरेको छ ।
        </p>

        <Typography.Link> Read More on Online Khabar</Typography.Link>
      </Card>
      <Card
        title={
          <Typography.Title style={{ fontSize: "4vw", width: "100%" }}>
            {" "}
            नागरिकता विधेयकको विरोधमा जसपाले प्रदर्शन गर्ने
          </Typography.Title>
        }
        style={{
          height: "80vh",
          width: "80%",
          margin: "auto",
          borderWidth: "3px",
        }}
      >
        <img
          alt="example"
          style={{ height: "30vh", width: "100%" }}
          src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/politics/Madhesi-Jana-Adhikar-Forum-Nepal-Chairman-Upendra-Yadav-by-Bhaswor-Ojha-Interview-(2).jpg&w=900&height=601"
        />
        <p style={{ fontSize: "3vw", maxHeight: "30vh" }}>
          जनता समाजवादी पार्टी (जसपा)ले नागरिकता ऐन, २०६३ लाई संशोधन गर्न बनेको
          विधेयकको विरोधमा देशका विभिन्न सहरमा विरोध प्रदर्शन गर्ने भएको छ ।
        </p>

        <Typography.Link> Read More on Online Khabar</Typography.Link>
      </Card>
      <Card
        title={
          <Typography.Title style={{ fontSize: "4vw", width: "100%" }}>
            {" "}
            चोचोमोचोमा ब्रेकअप !
          </Typography.Title>
        }
        style={{
          height: "80vh",
          width: "80%",
          margin: "auto",
          borderWidth: "3px",
        }}
      >
        <img
          alt="example"
          style={{ height: "30vh", width: "100%" }}
          src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2020/politics/thumb-(1)%20(1).jpg&w=900&height=601"
        />
        <p style={{ fontSize: "3vw", maxHeight: "30vh" }}>
          मञ्चमा पार्टीको झण्डा नै नराखी प्रधानमन्त्री निवास बालुवाटारमा बुधबार
          बिहान सत्तारुढ नेपाल कम्युनिस्ट पार्टी (नेकपा) को स्थायी कमिटी बैठक
          बस्यो ।
        </p>

        <Typography.Link> Read More on Online Khabar</Typography.Link>
      </Card>
    </SwipeableViews>
  );
}

export default PostCard;
