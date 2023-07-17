"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,w=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(w,l(l({ref:t},c),{},{components:n})):o.createElement(w,l({ref:t},c))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},l="Setting Up Snowplow on GCP",i={unversionedId:"snowplow/setup-snowplow-gcp",id:"snowplow/setup-snowplow-gcp",title:"Setting Up Snowplow on GCP",description:"Setting up Snowplow on Google Cloud Platform (GCP) involves configuring and installing the Snowplow event data collection platform on GCP infrastructure. Snowplow is an open-source tool used for collecting, processing, and analyzing event data from various sources.",source:"@site/docs/snowplow/setup-snowplow-gcp.md",sourceDirName:"snowplow",slug:"/snowplow/setup-snowplow-gcp",permalink:"/docs/snowplow/setup-snowplow-gcp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snowplow/setup-snowplow-gcp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Snowplow on AWS",permalink:"/docs/snowplow/setup-snowplow-aws"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Environment and Resources Required",id:"environment-and-resources-required",level:2},{value:"Create a Google Cloud Project:",id:"create-a-google-cloud-project",level:3},{value:"Setup a Service Account",id:"setup-a-service-account",level:3},{value:"Create a Pub/Sub Topics for Snowplow Collector, Enricher and Loader",id:"create-a-pubsub-topics-for-snowplow-collector-enricher-and-loader",level:2},{value:"Setup Snowplow Collector Instance (Scala Stream Collector)",id:"setup-snowplow-collector-instance-scala-stream-collector",level:2},{value:"Creating a VM instance for the collector, loader, and enricher.",id:"creating-a-vm-instance-for-the-collector-loader-and-enricher",level:2},{value:"Configuring the Enricher",id:"configuring-the-enricher",level:3},{value:"Configuring the Loader",id:"configuring-the-loader",level:3},{value:"Configuring the Docker Compose",id:"configuring-the-docker-compose",level:3},{value:"Deploying the Snowplow Application",id:"deploying-the-snowplow-application",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-snowplow-on-gcp"},"Setting Up Snowplow on GCP"),(0,a.kt)("p",null,"Setting up Snowplow on Google Cloud Platform (GCP) involves configuring and installing the Snowplow event data collection platform on GCP infrastructure. Snowplow is an open-source tool used for collecting, processing, and analyzing event data from various sources."),(0,a.kt)("p",null,"To set up Snowplow on GCP, you need to create a GCP account and project, enable necessary GCP services like Google Cloud Storage, BigQuery and Pub/Sub, provision the required infrastructure, install Snowplow components (Collector, Enrichment, Loader), configure data storage, and set up monitoring and logging."),(0,a.kt)("p",null,"Once Snowplow is running, it collects event data, which can be stored in GCP's storage systems like Google Cloud Storage or BigQuery. You can then utilize GCP's data analysis and visualization tools to analyze and visualize the collected event data."),(0,a.kt)("p",null,"Setting up Snowplow on GCP involves a series of steps to ensure a successful installation and configuration process, allowing you to effectively collect and utilize event data for analysis and insights."),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Google Cloud Platform (GCP) Account."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sign up for a GCP account to access GCP services and resources."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up a GCP Project."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Create a new GCP project to organize and manage resources for Snowplow."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable Google Cloud Pub/Sub."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable the Google Cloud Pub/Sub service in GCP to facilitate event data ingestion and streaming."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provision infrastructure for Snowplow."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set up virtual machines or utilize managed services like Google Kubernetes Engine (GKE) to provide the necessary computing resources for Snowplow components."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install and configure Snowplow trackers."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Implement Snowplow trackers in your applications or websites to collect event data and send it to the Snowplow infrastructure."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy a Snowplow Collector using Pub/Sub."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set up the Snowplow Collector component to subscribe to the Pub/Sub topic and receive and process the incoming events."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure Snowplow enrichment for enhanced insights."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set up Snowplow's Enrichment component to enrich the incoming events with additional contextual information, such as user demographics or geolocation data."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose a data storage solution."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select and configure a suitable data storage solution in GCP, such as Google Cloud Storage or Google BigQuery, to store and query the Snowplow event data."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable data visualization and analysis."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilize data visualization tools or analytics platforms available in GCP, such as Google Data Studio or BigQuery, to analyze and visualize the Snowplow event data."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up monitoring and maintenance."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Implement monitoring and logging mechanisms to track the health, data accuracy, and performance of the Snowplow setup on GCP. Ensure proactive monitoring and maintenance for optimal system performance.")))),(0,a.kt)("p",null,"These objectives provide a roadmap for setting up Snowplow with Google Cloud Pub/Sub on GCP, covering various aspects from account creation to monitoring and maintenance. Adjust the objectives according to your specific requirements and use case."),(0,a.kt)("h2",{id:"environment-and-resources-required"},"Environment and Resources Required"),(0,a.kt)("p",null,"Below Github repository contains configurations, schemas, sample web app and everything needed for setting up a Snowplow real-time analytics pipeline in GCP."),(0,a.kt)("p",null,"Github URL:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fabriq-labs/fabriq-platform/tree/master/snowplow/gcp"},"Click here")," - fabriq-platform-snowplow-gcp"),(0,a.kt)("p",null,"Cloud:  GCP"),(0,a.kt)("p",null,"VM instances: Snowplow Collector \u2014 e2-medium"),(0,a.kt)("p",null,"VM instances: Snowplow Enricher \u2014 e2-medium"),(0,a.kt)("p",null,"Setup a BigQuery"),(0,a.kt)("p",null,"Setup a Service Account"),(0,a.kt)("p",null,"Cloud Storage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fabriq-dp-enricher"),(0,a.kt)("li",{parentName:"ul"},"snowplow-events-collector-fabriq")),(0,a.kt)("p",null,"Pub/Sub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"snowplow-good-events-fabriq"),(0,a.kt)("li",{parentName:"ul"},"snowplow-bad-events-fabriq"),(0,a.kt)("li",{parentName:"ul"},"snowplow-good-events-enriched-fabriq"),(0,a.kt)("li",{parentName:"ul"},"snowplow-bad-events-enriched-fabriq")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For bigquery")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"snowplow-bad-events-bq-loader-fabriq"),(0,a.kt)("li",{parentName:"ul"},"snowplow-types-events-bq-loader-fabriq"),(0,a.kt)("li",{parentName:"ul"},"snowplow-failed-inserts-topic-events-bq-loader-fabriq")),(0,a.kt)("h1",{id:"steps-to-setup-the-snowplow-streams"},"Steps to setup the Snowplow Streams"),(0,a.kt)("p",null,"GCP Snowplow Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(6584).Z,width:"1364",height:"612"})),(0,a.kt)("p",null,"This image is obtained from the following ",(0,a.kt)("a",{parentName:"p",href:"https://www.simoahava.com/analytics/install-snowplow-on-the-google-cloud-platform/"},"blog"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Document Links for setup Snowplow")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.snowplow.io/docs/pipeline-components-and-applications/stream-collector/setup/"},"Setup Collector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.snowplow.io/docs/pipeline-components-and-applications/enrichment-components/enrich-pubsub/"},"Setup Enricher")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.snowplow.io/docs/pipeline-components-and-applications/stream-collector/setup/"},"Setup Loader")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.snowplow.io/docs/destinations/warehouses-and-lakes/bigquery/#streamloader"},"Setup Mutator, Repeater"))),(0,a.kt)("h3",{id:"create-a-google-cloud-project"},"Create a Google Cloud Project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you haven't already, create a Google Cloud project that will be used for your Snowplow data, Postgres, and BigQuery setup.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(8160).Z,width:"1920",height:"975"})),(0,a.kt)("h3",{id:"setup-a-service-account"},"Setup a Service Account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Goto the console ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"Click here")),(0,a.kt)("li",{parentName:"ul"},"To create credentials, first select the Compute Engine default service account, and then assign roles to it. Finally, create a new service account.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(6208).Z,width:"1766",height:"746"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(1325).Z,width:"1108",height:"724"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(2533).Z,width:"596",height:"624"})),(0,a.kt)("h2",{id:"create-a-pubsub-topics-for-snowplow-collector-enricher-and-loader"},"Create a Pub/Sub Topics for Snowplow Collector, Enricher and Loader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow-bad-events-fabriq")," Pub/Sub Topic for collecting bad events from Snowplow Collector.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow-good-events-fabriq")," Pub/Sub Topic for collecting good events from Snowplow Collector.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Goto the console ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloudpubsub/topic/list"},"Click here"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click to Create Topic"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(7865).Z,width:"1920",height:"914"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter Topic ID and create a Topic")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(5786).Z,width:"1920",height:"914"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once the topic is created, you can obtain the subscription.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(3205).Z,width:"1920",height:"914"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Cloud Storage and create the necessary buckets.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(9163).Z,width:"1920",height:"914"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once the check the required Cloud Storage buckets are created.")),(0,a.kt)("h2",{id:"setup-snowplow-collector-instance-scala-stream-collector"},"Setup Snowplow Collector Instance (Scala Stream Collector)"),(0,a.kt)("p",null,"Github URL:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fabriq-labs/fabriq-platform/tree/master/snowplow/gcp"},"Click here")," - fabriq-platform-snowplow-gcp."),(0,a.kt)("p",null,"You can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.hocon")," file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fabriq-labs/fabriq-platform/blob/master/snowplow/gcp/snowplow/collector/configs/config.hocon"},"here.")),(0,a.kt)("p",null,"To set up the good and bad event topics, you can use the following configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.hocon")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'good = "snowplow-good-events-fabriq"\nbad = "snowplow-bad-events-fabriq"\n')),(0,a.kt)("p",null,"Additionally, you can configure the GCP credentials under the sink as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'googleProjectId = "your project id here"\n')),(0,a.kt)("p",null,"After configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.hocon")," file and setting up the desired topics and GCP credentials, you can proceed to build it into a Docker image and push it to the Google Container Registry (gcr)."),(0,a.kt)("h2",{id:"creating-a-vm-instance-for-the-collector-loader-and-enricher"},"Creating a VM instance for the collector, loader, and enricher."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To set up the data processing pipeline, create a separate instance for the collector and another instance for the loader and enricher components."),(0,a.kt)("li",{parentName:"ul"},"For both the collector and loader/enricher instances, use the same configurations.")),(0,a.kt)("p",null,"To create an instance, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select a suitable boot disk."),(0,a.kt)("li",{parentName:"ol"},"Enter a unique instance name."),(0,a.kt)("li",{parentName:"ol"},"Choose the appropriate machine type for your workload."),(0,a.kt)("li",{parentName:"ol"},"Ensure that firewall rules allow the necessary network access for the instance.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(7194).Z,width:"1920",height:"975"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(9199).Z,width:"1920",height:"975"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(4407).Z,width:"1920",height:"2457"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once the collector instance is created, you can allow firewall access on port 8081 specifically for that instance."),(0,a.kt)("li",{parentName:"ul"},"SSH into the VM instance using a secure terminal."),(0,a.kt)("li",{parentName:"ul"},"Install Docker and Docker Compose on your machine if you haven't already."),(0,a.kt)("li",{parentName:"ul"},"To obtain the configuration files, you can clone the repository located at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fabriq-labs/fabriq-platform/tree/master/snowplow/gcp"},"Click here"),". This repository contains the necessary files for setting up Snowplow on GCP. ")),(0,a.kt)("h3",{id:"configuring-the-enricher"},"Configuring the Enricher"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once you have cloned the repository, upload your enrichments to the ",(0,a.kt)("inlineCode",{parentName:"p"},"enrichments")," folder inside the enricher directory.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After uploading the enrichments, you can use the following configuration in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.hocon")," file to reference them:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{"},'  "input": {\n    "subscription": "projects/your-projectid/subscriptions/snowplow-good-events-fabriq-sub"\n  }\n\n  "output": {\n    "good": {\n      "topic": "projects/your-projectid/topics/snowplow-good-events-enriched-fabriq"\n    }\n\n    "bad": {\n      "topic": "projects/your-projectid/topics/snowplow-bad-events-enriched-fabriq"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"configuring-the-loader"},"Configuring the Loader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'You can find the loader configurations under the "loader" folder in the repository.'),(0,a.kt)("li",{parentName:"ul"},"To update the database details, modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with the appropriate database settings."),(0,a.kt)("li",{parentName:"ul"},"Here is a sample configuration with valid Topics and database details:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Loader Config for Postgres")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "input": {\n    "type": "PubSub"\n    "projectId": "your project id"\n    "subscriptionId": "snowplow-good-events-enriched-fabriq-sub"\n  }\n  "output" : {\n    "good": {\n      "type": "Postgres",\n      "host": "localhost",\n      "database": "content_analytics_db",\n      "username": "Postgres",\n      "password": "Postgres",\n      "schema": "atomic",\n      "port": 5432\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the configuration above, make sure to provide the appropriate values for the ",(0,a.kt)("inlineCode",{parentName:"li"},"projectId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subscriptionId")," to representing the Topicsand the database details such as   ",(0,a.kt)("inlineCode",{parentName:"li"},"host, database, username, password, schema, and port")," for the Postgres database. This configuration specifies that the Snowplow enriched good events will be consumed from the Kinesis stream and loaded into the specified Postgres database.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Loader Config for BigQuery")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kindly provide a unique project ID, dataset ID, and table ID for proper configuration and execution.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "projectId": "your project id"\n\n  "loader": {\n    "input": {\n      "subscription": "snowplow-good-events-enriched-fabriq-sub"\n    }\n\n    "output": {\n      "good": {\n        "datasetId": "atomic"\n        "tableId": "events"\n      }\n\n      "bad": {\n        "topic": "snowplow-bad-events-bq-loader-fabriq"\n      }\n\n      "types": {\n        "topic": "snowplow-types-events-bq-loader-fabriq"\n      }\n\n      "failedInserts": {\n        "topic": "snowplow-failed-inserts-topic-events-bq-loader-fabriq"\n      }\n    }\n  }\n\n  "mutator": {\n    "input": {\n      "subscription": "snowplow-types-events-bq-loader-fabriq-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n    }\n  }\n\n  "repeater": {\n    "input": {\n      "subscription": "snowplow-failed-inserts-topic-events-bq-loader-fabriq-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n\n      "deadLetters": {\n        "bucket": "gs://snowplow-events-collector-fabriq"\n      }\n    }\n  }\n\n  "monitoring": {} # disabled\n}\n')),(0,a.kt)("p",null,"The configuration includes the following components: loader, mutator, repeater, and monitoring. The loader component processes input from a subscription, stores good events in a specified dataset and table, and sends bad events and event types to their respective topics. The mutator component takes input from a subscription and outputs good events using the loader's output configuration. The repeater component processes failed inserts from a subscription, stores good events using the loader's output, and stores dead letters in a designated bucket. Monitoring for the pipeline is disabled."),(0,a.kt)("p",null,"Here are the main components and their respective purposes in the provided configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"loader:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Input: Processes events from the "snowplow-good-events-enriched-fabriq-sub" subscription.'),(0,a.kt)("li",{parentName:"ul"},'Output (good events): Stores them in the "atomic" dataset and "events" table.'),(0,a.kt)("li",{parentName:"ul"},'Output (bad events): Sends them to the "snowplow-bad-events-bq-loader-fabriq" topic.'),(0,a.kt)("li",{parentName:"ul"},'Output (event types): Sends them to the "snowplow-types-events-bq-loader-fabriq" topic.'),(0,a.kt)("li",{parentName:"ul"},'Output (failed inserts): Sends them to the "snowplow-failed-inserts-topic-events-bq-loader-fabriq" topic.'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"mutator:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Input: Processes events from the "snowplow-types-events-bq-loader-fabriq-sub" subscription.'),(0,a.kt)("li",{parentName:"ul"},"Output (good events): Automatically inferred from the loader's output configuration."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"repeater:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Input: Processes failed inserts from the "snowplow-failed-inserts-topic-events-bq-loader-fabriq-sub" subscription.'),(0,a.kt)("li",{parentName:"ul"},"Output (good events): Automatically inferred from the loader's output configuration."),(0,a.kt)("li",{parentName:"ul"},'Output (dead letters): Stores them in the "gs://snowplow-events-collector-fabriq" bucket.'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"monitoring: Disabled, indicating that no specific monitoring configuration is provided."))),(0,a.kt)("p",null,"These components work together to process and distribute events based on their types, store them in designated locations, and handle any failed inserts or errors in the pipeline."),(0,a.kt)("h3",{id:"configuring-the-docker-compose"},"Configuring the Docker Compose"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To load your service account key JSON file under the snowplow repository, set the environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},'GOOGLE_APPLICATION_CREDENTIALS to "/snowplow/service-account-key.json"'),"."),(0,a.kt)("li",{parentName:"ul"},"To set up Snowplow Collector using Docker Compose, create a docker-compose.yml file with the following sample code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: \'3\'\nservices:\n    snowplow-collector:\n    image: snowplow/scala-stream-collector-pubsub:2.9.0\n    command: [ "--config", "/snowplow/collector/configs/config.hocon" ]\n    volumes:\n      - ./snowplow/:/snowplow/\n    ports:\n      - "8080:8080"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To set up Snowplow Enricher and Loader using Docker Compose, create a docker-compose.yml file with the following sample code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-version:",metastring:"'3'","'3'":!0},'services:\n  snowplow-enricher:\n    image: snowplow/snowplow-enrich-pubsub:3.8.0\n    command:\n      [\n        "--config",\n        "/snowplow/enricher/configs/config.hocon",\n        "--iglu-config",\n        "/snowplow/enricher/configs/resolver.json",\n        "--enrichments",\n        "/snowplow/enricher/configs/enrichments"\n      ]\n    volumes:\n      - ./snowplow:/snowplow/\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n  snowplow-loader:\n    image: snowplow/snowplow-bigquery-streamloader:1.6.4\n    volumes:\n      - ./snowplow:/snowplow/\n    command:\n      - "--config=/snowplow/loader/configs/config.hocon"\n      - "--resolver=/snowplow/loader/configs/resolver.json"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n  snowplow-loader-pg:\n    image: snowplow/snowplow-postgres-loader:0.3.3\n    volumes:\n      - ./snowplow:/snowplow/\n    command:\n      - "--config=/snowplow/loader-pg/configs/config.hocon"\n      - "--resolver=/snowplow/loader-pg/configs/resolver.json"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n  snowplow-repeater:\n    image: snowplow/snowplow-bigquery-repeater:1.6.4\n    volumes:\n      - ./snowplow:/snowplow/\n    command:\n      - "--config=/snowplow/loader/configs/config.hocon"\n      - "--resolver=/snowplow/loader/configs/resolver.json"\n      - "--bufferSize=20"\n      - "--timeout=20"\n      - "--backoffPeriod=900"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n  snowplow-mutator:\n    image: snowplow/snowplow-bigquery-mutator:1.6.4\n    volumes:\n      - ./snowplow:/snowplow/\n    command:\n      - "listen"\n      - "--config=/snowplow/loader/configs/config.hocon"\n      - "--resolver=/snowplow/loader/configs/resolver.json"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n  snowplow-mutator-create:\n    image: snowplow/snowplow-bigquery-mutator:1.6.4\n    volumes:\n      - ./snowplow:/snowplow/\n    command:\n      - "create"\n      - "--config=/snowplow/loader/configs/config.hocon"\n      - "--resolver=/snowplow/loader/configs/resolver.json"\n      - "--partitionColumn=load_tstamp"\n    environment:\n      - "GOOGLE_APPLICATION_CREDENTIALS=/snowplow/service-account-key.json"\n')),(0,a.kt)("p",null," This ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file defines two services: ",(0,a.kt)("inlineCode",{parentName:"p"},"enricher")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"loader"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"enricher")," service uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow/snowplow-enrich-kinesis:3.8.0")," image, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," service uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow/snowplow-postgres-loader:0.3.3")," image. The services are configured with necessary command-line arguments, volumes for mounting local directories, and environment variables for GCP access credentials."),(0,a.kt)("p",null,"You can customize the configuration by adjusting the paths and environment variables as per your specific requirements. Once you have created the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, you can use it to deploy and manage the Snowplow Enricher and Loader services using Docker Compose."),(0,a.kt)("h2",{id:"deploying-the-snowplow-application"},"Deploying the Snowplow Application"),(0,a.kt)("p",null,"To manage your Docker Compose services, you can use the following commands:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To start the services defined in your ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file and detach the terminal (run in the background), use the command: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To stop and remove the running services defined in your ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file, use the command: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose down"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,a.kt)("p",null,"These commands allow you to easily manage the lifecycle of your Docker Compose services, starting them in detached mode for continuous operation or stopping and removing them when they are no longer needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," command is used to display the currently running containers. It provides information such as the container ID, image, status, ports, and names of the running containers. By running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),", you can see a list of the active containers on your Docker host."),(0,a.kt)("p",null,"To view the logs of a specific container, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs")," command followed by the container name or ID. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <container_name_or_id>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<container_name_or_id>")," with the actual name or ID of the container whose logs you want to view."),(0,a.kt)("p",null,"By running this command, you can access the logs generated by the specified container, helping you troubleshoot issues or monitor the application's output."))}d.isMDXComponent=!0},8160:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcp_project-861670e0bfc68014c4e08ea45f5c1494.png"},5786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-1-c1c9e0852a7b3d9b8b3d32095f10764f.png"},6584:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-14-dc7ef006f5b2f806beefa83c13986e75.png"},1325:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-15-b02467e0f98d291de03d59e4404c7a92.png"},2533:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-16-d3633e8de224e06a2cfa8ade9f66be91.png"},9163:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-2-ecc4ac6303426f32e4af23a73b9f8550.png"},3205:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-3-0fc629bf8228a617b2c9195359e6d94f.png"},7194:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-4-685ba7bc6f19b019309e7902204fe00a.png"},9199:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-5-955e47e3529d9dfeb0024b3b12ab9df2.png"},4407:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-6-adc9fe863f35939dc17c6bd779e7db5d.png"},7865:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-36581279ccd2de439f7a719658df6143.png"},6208:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/imagecread-c74af351f79241b65d878af1e6cfe235.png"}}]);