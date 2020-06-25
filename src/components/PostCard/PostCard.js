import React from "react";
import { Card, Typography } from "antd";
import SwipeableViews from "react-swipeable-views";
import "antd/dist/antd.css";

const news = [
  {
    title: "केही स्थानमा भारी वर्षा",
    description:
      "मनसुन सक्रिय भएकाले केही स्थानमा भारी वर्षा हुने र नदीहरुमा बहाव बढ्ने भएकाले सतर्क रहन जल तथा मौसम विज्ञान विभागको बाढी पूर्वानुमान महाशाखाले अनुरोध गरेको छ ।",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Monsoon_clouds_near_Nagercoil.jpg",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876133",
    sourceName: "Online Khabar",
  },
  {
    title: " नागरिकता विधेयकको विरोधमा जसपाले प्रदर्शन गर्ने",
    description:
      " जनता समाजवादी पार्टी (जसपा)ले नागरिकता ऐन, २०६३ लाई संशोधन गर्न बनेको विधेयकको विरोधमा देशका विभिन्न सहरमा विरोध प्रदर्शन गर्ने भएको छ ।",
    image:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/politics/Madhesi-Jana-Adhikar-Forum-Nepal-Chairman-Upendra-Yadav-by-Bhaswor-Ojha-Interview-(2).jpg&w=900&height=601",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876025",
    sourceName: "Online Khabar",
  },
  {
    title: "चोचोमोचोमा ब्रेकअप !",
    description:
      "मञ्चमा पार्टीको झण्डा नै नराखी प्रधानमन्त्री निवास बालुवाटारमा बिहान सत्तारुढ नेपाल कम्युनिस्ट पार्टी (नेकपा) को स्थायी कमिटी बैठक बस्यो ।",
    image:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2020/politics/thumb-(1)%20(1).jpg&w=900&height=601",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876104",
    sourceName: "Online Khabar",
  },
  {
    title: "व्यापारमा दम छैन, अब कृषि",
    description:
      "मास्क उत्पादन गरेर बजारको अभाव टारेका मल्होत्रा अब कृषि क्षेत्रमा लगानी बढाउन चाहन्छन् । यसका लागि विभिन्न योजनाहरू बुनिरहेका छन् । ",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2020/06/Deepak-Malhotra-900.jpg",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876112",
    sourceName: "Online Khabar",
  },
  {
    title: "पोखरामा एक जना कोरोना संक्रमितको मृत्यु",
    description:
      "स्याङ्जाको सिरुवारी निवासी ५५ वर्षीय पुरुषको गएराति ११ः३५ बजे मृत्यु भएको अस्पतालका सहप्रध्यापक डा. अर्जुन आचार्यले जानकारी दिए । यससँगै नेपालमा कोरोना भाइरस संक्रमणबाट मृत्यु हुने व्यक्तिहरुको संख्या २५ पुगेको छ ।",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2020/05/Death-from-corona.jpg",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876114",
    sourceName: "Online Khabar",
  },
  {
    title: "हल्दिबारीको गाउँसभामा कुटाकुट",
    description:
      " झापाको हल्दिवारी गाउँपालिकाको गाउँसभामा कुटाकुट भएको छ । गाउँसभाका केही सदस्यले अध्यक्ष रविन्द्र लिङ्गदेनलाई मुक्का प्रहार गरेका हुन् । हल्दिवारीमा बहुमत कार्यपालिका सदस्य नेकपाका रहेका कारण अल्पमतमा रहेका गाउँपालिका अध्यक्षले आफ्नो पार्टीको नीति र लक्ष्य अनुसार काम गर्न नपाएको नेकपा पक्षको आरोप छ ।",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2020/06/Haldibari-Gaupalika.jpg",
    sourceUrl: "https://www.onlinekhabar.com/2020/06/876130",
    sourceName: "Online Khabar",
  },
];
function PostCard() {
  return (
    <SwipeableViews enableMouseEvents>
      {news.map((element) => (
        <Card
          title={
            <Typography.Title style={{ fontSize: "4vw", width: "100%" }}>
              {" "}
              {element.title}
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
            src={element.image}
          />
          <p style={{ fontSize: "3vw", maxHeight: "40vh" }}>
            {element.description}
          </p>

          <a href={element.sourceUrl}>
            <Typography.Link>Read More on {element.sourceName}</Typography.Link>
          </a>
        </Card>
      ))}
    </SwipeableViews>
  );
}

export default PostCard;
